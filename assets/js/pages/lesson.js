import { courseService } from '../services/course.js';

export async function renderLesson(courseId, lessonId) {
    const course = await courseService.getCourseById(courseId);

    if (!course) {
        return `<div class="container text-center" style="padding: 4rem;"><h2>Cours non trouvé</h2><a href="#courses" class="btn btn-primary">Retour aux cours</a></div>`;
    }

    // Default to first lesson if not specified
    if (!lessonId && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
        lessonId = course.modules[0].lessons[0].id;
    }

    const currentLesson = findLesson(course, lessonId);

    if (!currentLesson) {
        return `<div class="container text-center"><h2>Leçon non trouvée</h2></div>`;
    }

    return `
        <div class="course-viewer">
            <aside class="course-sidebar">
                <div class="sidebar-header">
                    <a href="#courses" class="back-link">← Retour</a>
                    <h3>${course.title}</h3>
                </div>
                <div class="modules-list">
                    ${course.modules.map(module => `
                        <div class="module-item">
                            <h4 class="module-title">${module.title}</h4>
                            <ul class="lesson-list">
                                ${module.lessons.map(lesson => `
                                    <li>
                                        <a href="#course/${course.id}/lesson/${lesson.id}" 
                                           class="lesson-link ${lesson.id === lessonId ? 'active' : ''}">
                                           <span class="icon-type ${lesson.type}"></span>
                                           ${lesson.title}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </aside>
            
            <main class="lesson-content">
                <div class="lesson-header">
                    <h1>${currentLesson.title}</h1>
                </div>
                
                <div class="lesson-body">
                    ${renderLessonContent(currentLesson)}
                </div>

                <div class="lesson-navigation">
                    <button class="btn btn-outline">Leçon Précédente</button>
                    <button class="btn btn-primary">Leçon Suivante</button>
                </div>
            </main>
        </div>
    `;
}

function findLesson(course, lessonId) {
    for (const module of course.modules) {
        const lesson = module.lessons.find(l => l.id === lessonId);
        if (lesson) return lesson;
    }
    return null;
}

function renderLessonContent(lesson) {
    if (lesson.type === 'video') {
        return `
            <div class="video-container">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${lesson.videoId}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="text-content mt-4">
                <p>${lesson.content}</p>
            </div>
        `;
    }
    return `
        <div class="text-content">
            <p>${lesson.content}</p>
        </div>
    `;
}
