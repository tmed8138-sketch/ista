/**
 * Authentication Service
 * Handles user sessions using localStorage
 */

const STORAGE_KEY_USERS = 'webacademy_users';
const STORAGE_KEY_SESSION = 'webacademy_session';

export const authService = {
    // Register a new user
    register(username, email, password) {
        const users = this.getUsers();

        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Cet email est déjà utilisé.' };
        }

        const newUser = {
            id: Date.now().toString(),
            username,
            email,
            password, // In a real app, hash this!
            progress: {} // Course progress tracking
        };

        users.push(newUser);
        this.saveUsers(users);
        this.login(email, password); // Auto login
        return { success: true };
    },

    // Login user
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Create session (exclude password)
            const { password, ...sessionUser } = user;
            localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionUser));
            window.dispatchEvent(new Event('auth-change'));
            return { success: true };
        }

        return { success: false, message: 'Email ou mot de passe incorrect.' };
    },

    // Logout user
    logout() {
        localStorage.removeItem(STORAGE_KEY_SESSION);
        window.dispatchEvent(new Event('auth-change'));
    },

    // Get current user session
    getUser() {
        const session = localStorage.getItem(STORAGE_KEY_SESSION);
        return session ? JSON.parse(session) : null;
    },

    // Internal: Get all users
    getUsers() {
        const users = localStorage.getItem(STORAGE_KEY_USERS);
        return users ? JSON.parse(users) : [];
    },

    // Internal: Save all users
    saveUsers(users) {
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    }
};
