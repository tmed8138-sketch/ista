export function renderExercises() {
    return `
        <div class="exercise-container">
            <div class="editor-pane">
                <div class="editor-header">
                    <h3>Éditeur HTML/CSS</h3>
                    <div class="editor-actions">
                        <button id="run-btn" class="btn btn-primary btn-sm">▶ Exécuter</button>
                    </div>
                </div>
                <div class="code-area">
                    <textarea id="html-code" placeholder="<!-- Écrivez votre HTML ici -->\n<h1>Bonjour le monde !</h1>\n<p>Ceci est un test.</p>"></textarea>
                    <textarea id="css-code" placeholder="/* Écrivez votre CSS ici */\nbody {\n  font-family: sans-serif;\n  color: #333;\n}\nh1 {\n  color: navy;\n}"></textarea>
                </div>
            </div>
            <div class="preview-pane">
                <div class="preview-header">
                    <h3>Résultat</h3>
                </div>
                <iframe id="preview-frame" title="Preview"></iframe>
            </div>
        </div>
    `;
}

export function attachExerciseListeners() {
    const runBtn = document.getElementById('run-btn');
    if (runBtn) {
        runBtn.addEventListener('click', updatePreview);
        // Auto-run on load
        setTimeout(updatePreview, 100);
    }
}

function updatePreview() {
    const html = document.getElementById('html-code').value;
    const css = document.getElementById('css-code').value;
    const frame = document.getElementById('preview-frame');

    if (frame) {
        const doc = frame.contentDocument || frame.contentWindow.document;
        doc.open();
        doc.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
            </body>
            </html>
        `);
        doc.close();
    }
}
