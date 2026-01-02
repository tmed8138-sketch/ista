import { authService } from '../services/auth.js';

export function renderLogin() {
    return `
        <div class="container auth-container">
            <div class="auth-card">
                <h2>Connexion</h2>
                <p class="auth-subtitle">Content de vous revoir !</p>
                
                <form id="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required placeholder="nom@exemple.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" required placeholder="••••••••">
                    </div>

                    <div id="login-error" class="form-error"></div>
                    
                    <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
                    
                    <p class="auth-footer">
                        Pas encore de compte ? <a href="#register" class="text-accent">S'inscrire</a>
                    </p>
                </form>
            </div>
        </div>
    `;
}

export function attachLoginListeners() {
    const form = document.getElementById('login-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('login-error');

        const result = authService.login(email, password);

        if (result.success) {
            window.location.hash = 'dashboard';
        } else {
            errorDiv.textContent = result.message;
            errorDiv.style.display = 'block';
        }
    });
}
