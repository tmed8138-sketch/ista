import { authService } from '../services/auth.js';
import { courseService } from '../services/course.js';

export async function renderDashboard() {
    const user = authService.getUser();
    if (!user) {
        window.location.hash = 'login';
        return '';
    }

    const courses = await courseService.getAllCourses();

    return `
        <div class="container dashboard-header">
            <h1>Tableau de <span class="text-accent">Bord</span></h1>
            <p>Bienvenue, <strong>${user.username}</strong> ! Continuez votre progression.</p>
        </div>

        <div class="container">
            <div class="dashboard-stats">
                <div class="stat-card">
                    <h3>0</h3>
                    <p>Cours complétés</p>
                </div>
                <div class="stat-card">
                    <h3>0%</h3>
                    <p>Progression globale</p>
                </div>
                <div class="stat-card">
                    <h3>0</h3>
                    <p>Exercices résolus</p>
                </div>
            </div>

            <h2 class="section-title">Mes Cours</h2>
            <div class="course-list">
                ${courses.map(course => `
                    <div class="course-item">
                        <div class="course-info">
                            <h4>${course.title}</h4>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: 0%"></div>
                            </div>
                        </div>
                        <a href="#course/${course.id}" class="btn btn-primary btn-sm">Continuer</a>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
