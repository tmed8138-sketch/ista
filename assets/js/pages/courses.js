import { courseService } from '../services/course.js';

export async function renderCourses() {
    const courses = await courseService.getAllCourses();

    return `
        <div class="container page-header">
            <h1>Nos <span class="text-accent">Cours</span></h1>
            <p>Découvrez nos parcours de formation complets.</p>
        </div>
        
        <div class="container course-grid">
            ${courses.map(course => `
                <div class="course-card">
                    <div class="course-icon icon-${course.icon}">
                        <!-- Simple Icon Placeholder -->
                        <span>${getIconContent(course.icon)}</span>
                    </div>
                    <div class="course-content">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <a href="#course/${course.id}" class="btn btn-outline btn-sm">Voir le cours</a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function getIconContent(iconName) {
    const icons = {
        'html5': 'HTML',
        'css3': 'CSS',
        'bootstrap': 'B'
    };
    return icons[iconName] || '?';
}
