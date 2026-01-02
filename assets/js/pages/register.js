import { authService } from '../services/auth.js';

export function renderRegister() {
    return `
        <div class="container auth-container">
            <div class="auth-card">
                <h2>Créer un compte</h2>
                <p class="auth-subtitle">Commencez votre apprentissage aujourd'hui.</p>
                
                <form id="register-form">
                    <div class="form-group">
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" id="username" required placeholder="Votre nom">
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" required placeholder="nom@exemple.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Mot de passe</label>
                        <input type="password" id="password" required placeholder="••••••••">
                    </div>

                    <div id="register-error" class="form-error"></div>
                    
                    <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
                    
                    <p class="auth-footer">
                        Déjà un compte ? <a href="#login" class="text-accent">Se connecter</a>
                    </p>
                </form>
            </div>
        </div>
    `;
}

export function attachRegisterListeners() {
    const form = document.getElementById('register-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('register-error');

        const result = authService.register(username, email, password);

        if (result.success) {
            window.location.hash = 'dashboard';
        } else {
            errorDiv.textContent = result.message;
            errorDiv.style.display = 'block';
        }
    });
}
