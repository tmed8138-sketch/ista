/**
 * Course Service
 * Fetches course data
 */

export const courseService = {
    async getAllCourses() {
        try {
            const response = await fetch('assets/data/courses.json');
            if (!response.ok) throw new Error('Failed to load courses');
            const data = await response.json();
            return data.courses;
        } catch (error) {
            console.error('Error fetching courses:', error);
            return [];
        }
    },

    async getCourseById(id) {
        const courses = await this.getAllCourses();
        return courses.find(c => c.id === id);
    }
};
