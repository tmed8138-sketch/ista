import { authService } from './services/auth.js';
import { renderLogin, attachLoginListeners } from './pages/login.js';
import { renderRegister, attachRegisterListeners } from './pages/register.js';
import { renderCourses } from './pages/courses.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderLesson } from './pages/lesson.js';
import { renderExercises, attachExerciseListeners } from './pages/exercises.js';

const app = document.getElementById('app');
const authButtons = document.getElementById('auth-buttons');
const appNav = document.querySelector('.navbar');

const routes = {
    home: renderHome,
    login: renderLogin,
    register: renderRegister,
    dashboard: renderDashboard,
    courses: renderCourses,
    exercises: renderExercises
};

function init() {
    window.addEventListener('hashchange', router);
    window.addEventListener('auth-change', updateAuthUI);
    updateAuthUI();
    router();
}

async function router() {
    const hash = window.location.hash.slice(1) || 'home';
    let renderer = routes[hash];

    // Dynamic route handling
    if (hash.startsWith('course/')) {
        const parts = hash.split('/');
        const courseId = parts[1];

        if (parts.length >= 4 && parts[2] === 'lesson') {
            // #course/id/lesson/lessonId
            const lessonId = parts[3];
            renderer = () => renderLesson(courseId, lessonId);
        } else {
            // #course/id (default to first lesson)
            renderer = () => renderLesson(courseId, null);
        }
    }

    if (!renderer) renderer = renderHome;

    // Render
    const content = typeof renderer === 'function' ? await renderer() : renderer;
    app.innerHTML = content;

    // Attach listeners
    if (hash === 'login') attachLoginListeners();
    if (hash === 'register') attachRegisterListeners();
    if (hash === 'exercises') attachExerciseListeners();
    // Dashboard loads its own data internally or we can trigger it here if needed
}

function updateAuthUI() {
    const user = authService.getUser();
    if (user) {
        authButtons.innerHTML = `
            <a href="#dashboard" class="btn btn-outline">Mon Espace</a>
            <button id="logout-btn" class="btn btn-primary">Déconnexion</button>
        `;
        document.getElementById('logout-btn').addEventListener('click', () => {
            authService.logout();
            window.location.hash = 'home';
        });
    } else {
        authButtons.innerHTML = `
            <a href="#login" class="btn btn-outline">Connexion</a>
            <a href="#register" class="btn btn-primary">S'inscrire</a>
        `;
    }
}

function renderHome() {
    return `
        <section class="hero">
            <div class="container">
                <h1>Maîtrisez le <span class="text-accent">Développement Web</span></h1>
                <p class="hero-subtitle">Apprenez HTML, CSS et Bootstrap avec des cours interactifs et des projets réels.</p>
                <div class="hero-actions">
                    <a href="#courses" class="btn btn-primary">Commencer à apprendre</a>
                    <a href="#exercises" class="btn btn-outline">Voir les exercices</a>
                </div>
            </div>
        </section>
    `;
}

function renderExercises() {
    return `<div class="container" style="padding-top: 4rem;"><h2>Exercices Pratiques</h2><p>Éditeur en cours de construction...</p></div>`;
}

init();
