/**
 * Web Academy - Consolidated Application Logic
 * Combined into one file to run locally without a server (file:// protocol compatibility)
 * CONTENT UPDATE: Detailed Lessons with Code Examples
 */

// --- DATA GENERATION HANDLER ---

const HTML_COURSE = {
    "id": "html-basics",
    "title": "HTML5 Fondamentaux",
    "description": "La structure du web. Devenez expert en balisage.",
    "icon": "html5",
    "modules": [
        {
            "title": "Module 1: Introduction",
            "lessons": [
                {
                    "id": "h1-1",
                    "title": "C'est quoi HTML ?",
                    "content": `
                        <h3>Définition</h3>
                        <p><strong>HTML</strong> (HyperText Markup Language) est le langage standard utilisé pour créer des pages web. Il ne s'agit pas d'un langage de programmation, mais d'un <em>langage de balisage</em> qui indique au navigateur comment structurer et afficher le contenu.</p>
                        
                        <h3>Comment ça marche ?</h3>
                        <p>HTML utilise des "balises" (tags) pour envelopper les éléments. Par exemple, pour dire qu'un texte est un paragraphe, on l'entoure de balises <code>&lt;p&gt;</code>.</p>
                        
                        <div class="code-example">
                            <h4>Exemple :</h4>
                            <pre><code>&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;
&lt;button&gt;Ceci est un bouton&lt;/button&gt;</code></pre>
                        </div>

                        <h3>L'Histoire de HTML5</h3>
                        <p>HTML5 est la dernière version majeure d'HTML. Elle a introduit de nouvelles fonctionnalités natives pour la vidéo, l'audio et des balises sémantiques qui rendent le web plus intelligent.</p>
                    `
                },
                {
                    "id": "h1-2",
                    "title": "Structure d'une page",
                    "content": `
                        <h3>Le Squelette d'un fichier HTML</h3>
                        <p>Chaque page web bien formée suit une structure précise. Voici le modèle standard :</p>

                        <div class="code-example">
                            <h4>Code de base :</h4>
                            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="fr"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Titre de la page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Bonjour le monde !&lt;/h1&gt;
    &lt;p&gt;Ceci est le contenu visible.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
                        </div>

                        <h3>Détails des éléments :</h3>
                        <ul>
                            <li><code>&lt;!DOCTYPE html&gt;</code> : Indique au navigateur qu'il s'agit d'un document HTML5 moderne.</li>
                            <li><code>&lt;html&gt;</code> : La racine du document.</li>
                            <li><code>&lt;head&gt;</code> : Contient les métadonnées (titre, encodage) non visibles sur la page.</li>
                            <li><code>&lt;body&gt;</code> : Contient tout ce que l'utilisateur voit (textes, images, boutons).</li>
                        </ul>
                    `
                },
                {
                    "id": "h1-3",
                    "title": "Éditeurs de code",
                    "content": `
                        <h3>Outils de développeur</h3>
                        <p>Pour écrire du code HTML, oubliez Word ou Pages. Vous avez besoin d'un éditeur de texte conçu pour le code.</p>
                        
                        <h3>Les meilleurs choix gratuits :</h3>
                        <ul>
                            <li><strong>Visual Studio Code (VS Code)</strong> : Le plus populaire, puissant et extensible.</li>
                            <li><strong>Sublime Text</strong> : Très rapide et léger.</li>
                            <li><strong>Notepad++</strong> : Une solution classique sur Windows.</li>
                        </ul>

                        <p class="tip">💡 <strong>Conseil :</strong> Notre plateforme intègre son propre éditeur dans l'onglet "Exercices" pour que vous puissiez pratiquer immédiatement !</p>
                    `
                },
                // ... (Additional lessons for Module 1 would follow similar detailed pattern)
                { "id": "h1-4", "title": "Votre premier fichier", "content": "<p>Créez un fichier nommé <code>index.html</code>. C'est le point d'entrée standard d'un site web.</p>" },
                { "id": "h1-5", "title": "Le Doctype", "content": "<p>La déclaration <code>&lt;!DOCTYPE html&gt;</code> au début du document indique au navigateur qu'il s'agit d'un document HTML5.</p>" },
                { "id": "h1-6", "title": "Balises et Attributs", "content": "<p>Les balises ont souvent des attributs qui fournissent des informations supplémentaires, comme <code>class</code> ou <code>id</code>.</p>" },
                { "id": "h1-7", "title": "Commentaires", "content": "<p>On peut ajouter des commentaires invisibles avec <code>&lt;!-- commentaire --&gt;</code>.</p>" }
            ]
        },
        {
            "title": "Module 2: Texte et Formatage",
            "lessons": [
                {
                    "id": "h2-1",
                    "title": "Titres (h1-h6)",
                    "content": `
                        <h3>La Hiérarchie des Titres</h3>
                        <p>Les titres sont essentiels pour structurer votre contenu et pour le référencement (SEO). HTML propose 6 niveaux :</p>

                        <div class="code-example">
                            <pre><code>&lt;h1&gt;Titre Principal (Unique par page)&lt;/h1&gt;
&lt;h2&gt;Sous-titre important&lt;/h2&gt;
&lt;h3&gt;Sous-section&lt;/h3&gt;
&lt;h4&gt;Titre mineur&lt;/h4&gt;
&lt;h5&gt;Petit titre&lt;/h5&gt;
&lt;h6&gt;Très petit titre&lt;/h6&gt;</code></pre>
                        </div>

                        <h3>Règles d'or :</h3>
                        <ol>
                            <li>Utilisez un seul <code>&lt;h1&gt;</code> par page pour le sujet principal.</li>
                            <li>Ne sautez pas de niveaux (ne passez pas de h2 à h4).</li>
                            <li>N'utilisez pas des titres juste pour mettre du texte en gras/grand. Utilisez CSS pour ça.</li>
                        </ol>
                    `
                },
                {
                    "id": "h2-2",
                    "title": "Paragraphes",
                    "content": `
                        <h3>Le bloc de texte de base</h3>
                        <p>L'élément <code>&lt;p&gt;</code> définit un paragraphe.</p>
                        
                        <div class="code-example">
                            <pre><code>&lt;p&gt;Ceci est un premier paragraphe de texte.&lt;/p&gt;
&lt;p&gt;Ceci est un second paragraphe. Les navigateurs ajoutent automatiquement une marge entre eux.&lt;/p&gt;</code></pre>
                        </div>

                        <p>Notez que si vous ajoutez plusieurs espaces ou sauts de ligne dans votre code HTML, le navigateur les ignorera et n'affichera qu'un seul espace. Pour forcer un saut de ligne, utilisez la balise auto-fermante <code>&lt;br&gt;</code>.</p>
                    `
                },
                // ... (Continuing the pattern for other lessons)
                { "id": "h2-3", "title": "Gras et Italique", "content": "<p>Utilisez <code>&lt;strong&gt;</code> pour le texte important (gras) et <code>&lt;em&gt;</code> pour l'emphase (italique).</p>" },
                { "id": "h2-4", "title": "Listes à puces", "content": "<p>Créez des listes non ordonnées avec <code>&lt;ul&gt;</code> et des éléments de liste <code>&lt;li&gt;</code>.</p>" },
                { "id": "h2-5", "title": "Listes numérotées", "content": "<p>Utilisez <code>&lt;ol&gt;</code> pour des listes ordonnées.</p>" },
                { "id": "h2-6", "title": "Citations", "content": "<p>La balise <code>&lt;blockquote&gt;</code> est utilisée pour les citations longues.</p>" },
                { "id": "h2-7", "title": "Code et Préformaté", "content": "<p>Pour afficher du code, utilisez <code>&lt;code&gt;</code> et <code>&lt;pre&gt;</code> pour conserver les espaces.</p>" }
            ]
        },
        {
            "title": "Module 3: Liens et Médias",
            "lessons": [
                {
                    "id": "h3-1",
                    "title": "Liens Hypertextes",
                    "content": `
                        <h3>L'Ancre du Web</h3>
                        <p>La balise <code>&lt;a&gt;</code> (anchor) est ce qui rend le web "naviguable". Elle permet de créer des liens vers d'autres pages, des fichiers, des adresses e-mail, ou des endroits dans la même page.</p>

                        <div class="code-example">
                            <pre><code>&lt;!-- Lien vers un site externe --&gt;
&lt;a href="https://www.google.com"&gt;Aller sur Google&lt;/a&gt;

&lt;!-- Lien vers une page locale --&gt;
&lt;a href="contact.html"&gt;Contactez-nous&lt;/a&gt;</code></pre>
                        </div>

                        <p>L'attribut <code>href</code> (Hypertext REFerence) est obligatoire : il indique la destination du lien.</p>
                    `
                },
                {
                    "id": "h3-2",
                    "title": "Images",
                    "content": `
                        <h3>Intégrer des visuels</h3>
                        <p>La balise <code>&lt;img&gt;</code> permet d'afficher des images. C'est une balise "orpheline" ou "auto-fermante" (elle n'a pas de balise de fermeture).</p>

                        <div class="code-example">
                            <pre><code>&lt;img src="photo.jpg" alt="Description de la photo" width="500" height="300"&gt;</code></pre>
                        </div>

                        <h3>Attributs clés :</h3>
                        <ul>
                            <li><strong>src</strong> (source) : Le chemin vers le fichier image (URL ou local).</li>
                            <li><strong>alt</strong> (alternative) : Texte qui s'affiche si l'image ne charge pas (crucial pour l'accessibilité).</li>
                            <li><strong>width/height</strong> : Dimensions en pixels (optionnel mais recommandé pour éviter les sauts de contenu).</li>
                        </ul>
                    `
                },
                // ... other lessons
                { "id": "h3-3", "title": "Chemins relatifs vs absolus", "content": "<p>Comprendre la différence entre un lien vers un site externe (absolu) et un fichier local (relatif).</p>" },
                { "id": "h3-4", "title": "Attribut target", "content": "<p>Utilisez <code>target='_blank'</code> pour ouvrir un lien dans un nouvel onglet.</p>" },
                { "id": "h3-5", "title": "Images cliquables", "content": "<p>Vous pouvez placer une image à l'intérieur d'une balise <code>&lt;a&gt;</code> pour la rendre cliquable.</p>" },
                { "id": "h3-6", "title": "Favicon", "content": "<p>L'icône qui apparaît dans l'onglet du navigateur se définit dans le <code>&lt;head&gt;</code>.</p>" },
                { "id": "h3-7", "title": "Audio et Vidéo", "content": "<p>HTML5 a introduit les balises <code>&lt;audio&gt;</code> et <code>&lt;video&gt;</code> natives.</p>" }
            ]
        },
        {
            "title": "Module 4: Tableaux et Formulaires",
            "lessons": [
                { "id": "h4-1", "title": "Tableaux basiques", "content": "<p>Utilisez <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (ligne), et <code>&lt;td&gt;</code> (cellule).</p>" },
                { "id": "h4-2", "title": "Entêtes de tableau", "content": "<p>Utilisez <code>&lt;th&gt;</code> pour les cellules d'entête.</p>" },
                { "id": "h4-3", "title": "Fusion de cellules", "content": "<p>Les attributs <code>rowspan</code> et <code>colspan</code> permettent de fusionner des cellules.</p>" },
                { "id": "h4-4", "title": "Formulaires", "content": "<p>La balise <code>&lt;form&gt;</code> enveloppe les éléments de formulaire.</p>" },
                { "id": "h4-5", "title": "Inputs texte", "content": "<p><code>&lt;input type='text'&gt;</code> est le champ de base.</p>" },
                { "id": "h4-6", "title": "Boutons radio et check", "content": "<p>Pour les choix multiples ou uniques.</p>" },
                { "id": "h4-7", "title": "Bouton de soumission", "content": "<p><code>&lt;button type='submit'&gt;</code> envoie le formulaire.</p>" }
            ]
        },
        {
            "title": "Module 5: HTML5 Sémantique",
            "lessons": [
                { "id": "h5-1", "title": "Pourquoi la sémantique ?", "content": "<p>Le code sémantique aide les moteurs de recherche et l'accessibilité.</p>" },
                { "id": "h5-2", "title": "Header et Footer", "content": "<p>Définissent l'entête et le pied de page du site ou d'une section.</p>" },
                { "id": "h5-3", "title": "Nav", "content": "<p>Pour les blocs de navigation principaux.</p>" },
                { "id": "h5-4", "title": "Article et Section", "content": "<p>Pour structurer le contenu de manière logique.</p>" },
                { "id": "h5-5", "title": "Aside", "content": "<p>Pour le contenu en barre latérale ou tangentiel.</p>" },
                { "id": "h5-6", "title": "Meta tags", "content": "<p>Informations importantes pour le navigateur et le SEO dans le head.</p>" },
                { "id": "h5-7", "title": "Accessibilité (ARIA)", "content": "<p>Rendre le web utilisable par tous.</p>" }
            ]
        }
    ]
};

const CSS_COURSE = {
    "id": "css-mastery",
    "title": "CSS3 Maîtrise",
    "description": "Donnez du style à vos pages. Flexbox, Grid et animations.",
    "icon": "css3",
    "modules": [
        {
            "title": "Module 1: Fondamentaux CSS",
            "lessons": [
                {
                    "id": "c1-1",
                    "title": "Introduction CSS",
                    "content": `
                        <h3>Qu'est-ce que CSS ?</h3>
                        <p><strong>CSS</strong> (Cascading Style Sheets) est le langage de design du web. Alors que HTML gère le "Fond" (structure), CSS gère la "Forme" (couleurs, polices, mise en page).</p>
                        
                        <div class="code-example">
                            <h4>Exemple :</h4>
                            <pre><code>/* Cible tous les paragraphes */
p {
    color: blue;
    font-size: 16px;
}</code></pre>
                        </div>
                    `
                },
                {
                    "id": "c1-2",
                    "title": "Syntaxe et Sélecteurs",
                    "content": `
                        <h3>La règle CSS</h3>
                        <p>Une règle CSS se compose d'un <strong>sélecteur</strong> et d'un <strong>bloc de déclaration</strong>.</p>
                        
                        <div class="code-example">
                            <pre><code>Sélecteur {
    Propriété: Valeur;
}</code></pre>
                        </div>

                        <h3>Où écrire le CSS ?</h3>
                        <ol>
                            <li><strong>Externe</strong> (Recommandé) : Dans un fichier <code>.css</code> lié.</li>
                            <li><strong>Interne</strong> : Dans une balise <code>&lt;style&gt;</code> dans le head.</li>
                            <li><strong>Inline</strong> (À éviter) : Directement dans l'attribut <code>style</code> de la balise.</li>
                        </ol>
                    `
                },
                // ... (Continuing the pattern)
                { "id": "c1-3", "title": "Sélecteurs simples", "content": "<p>Cibler par balise (ex: <code>div</code>), classe (ex: <code>.ma-classe</code>) ou ID (ex: <code>#mon-id</code>). Les classes sont réutilisables, les IDs doivent être uniques.</p>" },
                { "id": "c1-4", "title": "Couleurs", "content": "<p>CSS supporte les noms (<code>red</code>), l'hexadécimal (<code>#ff0000</code>), le RGB (<code>rgb(255,0,0)</code>) et le HSL.</p>" },
                { "id": "c1-5", "title": "Arrière-plans", "content": "<p><code>background-color</code> change la couleur de fond. <code>background-image</code> permet d'utiliser une image.</p>" },
                { "id": "c1-6", "title": "Bordures", "content": "<p>La syntaxe courte : <code>border: 1px solid black;</code> (Épaisseur, Style, Couleur).</p>" },
                { "id": "c1-7", "title": "La Cascade", "content": "<p>Si deux règles entrent en conflit, la plus spécifique ou la dernière déclarée gagne.</p>" }
            ]
        },
        // ... (Repeating structure for other CSS modules)
        {
            "title": "Module 2: Le Modèle de Boîte",
            "lessons": [
                { "id": "c2-1", "title": "Box Model expliqué", "content": "<p>Tout en CSS est une boîte. De l'intérieur vers l'extérieur : <strong>Content</strong>, <strong>Padding</strong>, <strong>Border</strong>, <strong>Margin</strong>.</p>" },
                { "id": "c2-2", "title": "Padding", "content": "<p>Le padding est l'espace vide à l'intérieur de la bordure, autour du contenu.</p>" },
                { "id": "c2-3", "title": "Margin", "content": "<p>La marge est l'espace vide à l'extérieur de la bordure, séparant l'élément des autres.</p>" },
                { "id": "c2-4", "title": "Dimensions", "content": "<p>Width (largeur) et Height (hauteur). Attention, par défaut le padding s'ajoute à la taille !</p>" },
                { "id": "c2-5", "title": "Box-sizing", "content": "<p>Utilisez <code>box-sizing: border-box;</code> pour inclure padding et border dans les dimensions totales. C'est beaucoup plus simple à gérer.</p>" },
                { "id": "c2-6", "title": "Display", "content": "<p><code>block</code> (prend toute la largeur), <code>inline</code> (reste dans le flux du texte), <code>inline-block</code> (mixte).</p>" },
                { "id": "c2-7", "title": "Overflow", "content": "<p>Gère ce qui se passe si le contenu dépasse la boîte : <code>visible</code>, <code>hidden</code>, <code>scroll</code>, <code>auto</code>.</p>" }
            ]
        },
        {
            "title": "Module 3: Typographie",
            "lessons": [
                { "id": "c3-1", "title": "Font-family", "content": "<p>Définit la police. Terminez toujours par une famille générique comme <code>sans-serif</code> ou <code>serif</code> en secours.</p>" },
                { "id": "c3-2", "title": "Font-size", "content": "<p>Unités courantes : <code>px</code> (fixe), <code>rem</code> (relatif à la racine), <code>em</code> (relatif au parent).</p>" },
                { "id": "c3-3", "title": "Font-weight", "content": "<p>L'épaisseur du texte : 400 (normal), 700 (bold).</p>" },
                { "id": "c3-4", "title": "Text-align", "content": "<p><code>left</code>, <code>center</code>, <code>right</code>, ou <code>justify</code>.</p>" },
                { "id": "c3-5", "title": "Text-decoration", "content": "<p>Utilisé souvent pour enlever le soulignement des liens : <code>text-decoration: none;</code>.</p>" },
                { "id": "c3-6", "title": "Line-height", "content": "<p>La hauteur de ligne. Un bon conseil : 1.5 pour une lecture confortable.</p>" },
                { "id": "c3-7", "title": "Google Fonts", "content": "<p>Importer facilement des milliers de polices gratuites via un lien dans le head.</p>" }
            ]
        },
        {
            "title": "Module 4: Flexbox",
            "lessons": [
                {
                    "id": "c4-1",
                    "title": "Intro Flexbox",
                    "content": `
                        <h3>La révolution de la mise en page</h3>
                        <p>Flexbox est conçu pour aligner des éléments dans une seule dimension (ligne ou colonne). C'est l'outil indispensable pour les mises en page modernes.</p>
                        <div class="code-example"><pre><code>.container {
    display: flex;
}</code></pre></div>
                    `
                },
                { "id": "c4-2", "title": "Flex-direction", "content": "<p>Définit l'axe principal : <code>row</code> (défaut, horizontal) ou <code>column</code> (vertical).</p>" },
                { "id": "c4-3", "title": "Justify-content", "content": "<p>Aligne le contenu sur l'axe principal. Valeurs : <code>flex-start</code>, <code>center</code>, <code>space-between</code>, <code>space-around</code>.</p>" },
                { "id": "c4-4", "title": "Align-items", "content": "<p>Aligne le contenu sur l'axe secondaire (croisé). Valeurs : <code>stretch</code>, <code>center</code>, <code>flex-start</code>.</p>" },
                { "id": "c4-5", "title": "Flex-wrap", "content": "<p>Par défaut, Flexbox essaie de tout faire tenir sur une ligne. <code>flex-wrap: wrap;</code> permet le retour à la ligne.</p>" },
                { "id": "c4-6", "title": "Gap", "content": "<p>La propriété magique <code>gap: 20px;</code> crée de l'espace entre les éléments flexibles sans les soucis de marges.</p>" },
                { "id": "c4-7", "title": "Flex-grow/shrink", "content": "<p><code>flex-grow: 1;</code> permet à un élément de grandir pour remplir l'espace vide.</p>" }
            ]
        },
        {
            "title": "Module 5: Avancé",
            "lessons": [
                { "id": "c5-1", "title": "Position", "content": "<p><code>relative</code> (par rapport à soi), <code>absolute</code> (par rapport au parent positionné), <code>fixed</code> (par rapport à l'écran), <code>sticky</code> (reste accroché).</p>" },
                { "id": "c5-2", "title": "Z-index", "content": "<p>Gère la profondeur. Un z-index plus élevé place l'élément au-dessus des autres (nécessite une position définie).</p>" },
                { "id": "c5-3", "title": "Pseudo-classes", "content": "<p><code>:hover</code> (au survol de la souris), <code>:active</code> (au clic), <code>:nth-child(2)</code> (le 2ème enfant).</p>" },
                { "id": "c5-4", "title": "Pseudo-éléments", "content": "<p><code>::before</code> et <code>::after</code> permettent d'insérer du contenu cosmétique avant ou après un élément.</p>" },
                { "id": "c5-5", "title": "Transitions", "content": "<p><code>transition: 0.3s;</code> lisse les changements de propriétés (ex: couleur au survol).</p>" },
                { "id": "c5-6", "title": "Media Queries", "content": "<p><code>@media (max-width: 768px) { ... }</code> permet d'appliquer du CSS uniquement sur mobile/tablette.</p>" },
                { "id": "c5-7", "title": "CSS Grid", "content": "<p>Le système de grille bidimensionnel le plus puissant. Pensez 'lignes et colonnes' en même temps.</p>" }
            ]
        }
    ]
};

const BOOTSTRAP_COURSE = {
    "id": "bootstrap-pro",
    "title": "Bootstrap Pro",
    "description": "Créez des sites responsives rapidement.",
    "icon": "bootstrap",
    "modules": [
        {
            "title": "Module 1: Débuter",
            "lessons": [
                {
                    "id": "b1-1",
                    "title": "Installation (CDN)",
                    "content": `
                        <h3>Démarrer avec Bootstrap</h3>
                        <p>Le moyen le plus simple est d'utiliser le CDN (Content Delivery Network). Copiez ces liens dans votre <code>head</code> :</p>
                        <div class="code-example"><pre><code>&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"&gt;</code></pre></div>
                    `
                },
                { "id": "b1-2", "title": "Le Container", "content": "<p><code>.container</code> (largeur fixe centrée avec breakpoints) ou <code>.container-fluid</code> (100% largeur) sont les enveloppes de base.</p>" },
                { "id": "b1-3", "title": "Le Système de Grille", "content": "<p>Le cœur de Bootstrap : 12 colonnes. <br><code>.row</code> contient des <code>.col-X</code>. <br>Exemple: deux colonnes égales = <code>.col-6</code> et <code>.col-6</code>.</p>" },
                { "id": "b1-4", "title": "Breakpoints", "content": "<p>Les infixes responsive : <code>col-md-6</code> signifie '6 colonnes à partir de Tablette (md)'. En dessous, ça empile (col-12 défaut).</p>" },
                { "id": "b1-5", "title": "Typographie", "content": "<p>Bootstrap embellit le texte par défaut. Classes utiles : <code>.display-1</code> pour des titres énormes, <code>.lead</code> pour des chapôs.</p>" },
                { "id": "b1-6", "title": "Couleurs", "content": "<p>Les couleurs sémantiques : <code>text-primary</code> (bleu), <code>text-success</code> (vert), <code>text-danger</code> (rouge), <code>text-warning</code> (jaune).</p>" }
            ]
        },
        {
            "title": "Module 2: Composants Base",
            "lessons": [
                { "id": "b2-1", "title": "Boutons", "content": "<p>Utilisez les classes <code>.btn .btn-primary</code>.</p>" },
                { "id": "b2-2", "title": "Groupes de boutons", "content": "<p>Regrouper des actions ensemble.</p>" },
                { "id": "b2-3", "title": "Badges", "content": "<p>Petits labels pour notifications ou statuts.</p>" },
                { "id": "b2-4", "title": "Alertes", "content": "<p>Messages de feedback utilisateur.</p>" },
                { "id": "b2-5", "title": "Cartes (Cards)", "content": "<p>Conteneurs flexibles pour contenu divers.</p>" },
                { "id": "b2-6", "title": "List Groups", "content": "<p>Listes stylées.</p>" }
            ]
        },
        // ... (Repeating pattern for other Bootstrap modules)
        {
            "title": "Module 3: Navigation",
            "lessons": [
                { "id": "b3-1", "title": "Navbar", "content": "<p>La barre de navigation responsive standard, qui s'effondre en menu burger sur mobile.</p>" },
                { "id": "b3-2", "title": "Navs et Tabs", "content": "<p>Navigation par onglets simple.</p>" },
                { "id": "b3-3", "title": "Breadcrumb", "content": "<p>Fil d'ariane pour indiquer la position dans le site.</p>" },
                { "id": "b3-4", "title": "Pagination", "content": "<p>Navigation entre plusieurs pages de résultats.</p>" },
                { "id": "b3-5", "title": "Dropdowns", "content": "<p>Menus déroulants activables au clic.</p>" },
                { "id": "b3-6", "title": "Offcanvas", "content": "<p>Menus latéraux glissants (Sidebar) très populaires sur mobile.</p>" }
            ]
        },
        {
            "title": "Module 4: Formulaires",
            "lessons": [
                { "id": "b4-1", "title": "Vue d'ensemble", "content": "<p>Ajoutez la classe <code>.form-control</code> à vos inputs pour un style instantané.</p>" },
                { "id": "b4-2", "title": "Form Control", "content": "<p>Styliser les inputs, textareas.</p>" },
                { "id": "b4-3", "title": "Select", "content": "<p><code>.form-select</code> pour les menus déroulants natifs stylisés.</p>" },
                { "id": "b4-4", "title": "Checks & Radios", "content": "<p><code>.form-check</code> pour des cases à cocher alignées.</p>" },
                { "id": "b4-5", "title": "Range", "content": "<p><code>.form-range</code> pour les glissières.</p>" },
                { "id": "b4-6", "title": "Validation", "content": "<p>Ajoutez <code>.is-valid</code> ou <code>.is-invalid</code> pour afficher des icônes et bordures colorées.</p>" }
            ]
        },
        {
            "title": "Module 5: Composants JS",
            "lessons": [
                { "id": "b5-1", "title": "Modal", "content": "<p>Fenêtres pop-up qui se superposent au contenu.</p>" },
                { "id": "b5-2", "title": "Carousel", "content": "<p>Diaporama d'images défilant automatiquement.</p>" },
                { "id": "b5-3", "title": "Accordion", "content": "<p>Panneaux repliables verticalement pour gagner de la place.</p>" },
                { "id": "b5-4", "title": "Toast", "content": "<p>Petites notifications effémères 'push' dans un coin.</p>" },
                { "id": "b5-5", "title": "Tooltips", "content": "<p>Info-bulles noires qui apparaissent au survol d'un élément.</p>" },
                { "id": "b5-6", "title": "Popovers", "content": "<p>Comme les tooltips, mais avec un titre et plus de contenu, activés au clic.</p>" }
            ]
        }
    ]
};

const COURSE_DATA = [HTML_COURSE, CSS_COURSE, BOOTSTRAP_COURSE];

// --- EXAMS DATA ---
const MODULES_EXAMS = {
    'html-basics': {
        title: 'Examen HTML - Fondamentaux',
        passingScore: 16, // 80% de 20
        questions: [
            {
                id: 1,
                type: 'qcm',
                question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
                options: ["<link>", "<a>", "<href>", "<url>"],
                correct: 1
            },
            {
                id: 2,
                type: 'qcm',
                question: "Quel attribut est requis pour une image accessible ?",
                options: ["src", "alt", "title", "href"],
                correct: 1
            },
            {
                id: 3,
                type: 'qcm',
                question: "Quelle balise définit le titre principal d'une page ?",
                options: ["<header>", "<title>", "<h1>", "<main>"],
                correct: 2
            },
            {
                id: 4,
                type: 'qcm',
                question: "Quelle balise HTML5 est utilisée pour définir une section de navigation ?",
                options: ["<navbar>", "<menu>", "<nav>", "<navigation>"],
                correct: 2
            },
            {
                id: 5,
                type: 'qcm',
                question: "Comment créer un commentaire en HTML ?",
                options: ["// commentaire", "/* commentaire */", "<!-- commentaire -->", "# commentaire"],
                correct: 2
            },
            {
                id: 6,
                type: 'qcm',
                question: "Quelle balise est utilisée pour créer une liste non ordonnée ?",
                options: ["<ol>", "<ul>", "<list>", "<li>"],
                correct: 1
            },
            {
                id: 7,
                type: 'qcm',
                question: "Quel attribut permet d'ouvrir un lien dans un nouvel onglet ?",
                options: ["target='_new'", "open='new'", "target='_blank'", "window='new'"],
                correct: 2
            },
            {
                id: 8,
                type: 'qcm',
                question: "Quelle balise HTML5 définit un contenu autonome indépendant ?",
                options: ["<section>", "<div>", "<article>", "<aside>"],
                correct: 2
            },
            {
                id: 9,
                type: 'pratique',
                question: "Quelle est la structure HTML5 minimale correcte ?",
                options: [
                    "<!DOCTYPE html><html><body></body></html>",
                    "<!DOCTYPE html><html><head></head><body></body></html>",
                    "<html><head></head><body></body></html>",
                    "<!DOCTYPE><html><body></body></html>"
                ],
                correct: 1
            },
            {
                id: 10,
                type: 'qcm',
                question: "Quelle balise est utilisée pour insérer une image ?",
                options: ["<image>", "<img>", "<picture>", "<photo>"],
                correct: 1
            },
            {
                id: 11,
                type: 'qcm',
                question: "Comment créer un lien vers une adresse email ?",
                options: ["<a href='email@example.com'>", "<a href='mailto:email@example.com'>", "<email to='email@example.com'>", "<a mail='email@example.com'>"],
                correct: 1
            },
            {
                id: 12,
                type: 'qcm',
                question: "Quelle balise HTML5 définit un pied de page ?",
                options: ["<bottom>", "<foot>", "<footer>", "<end>"],
                correct: 2
            },
            {
                id: 13,
                type: 'pratique',
                question: "Comment créer un tableau avec 2 colonnes et 2 lignes ?",
                options: [
                    "<table><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>",
                    "<table><row><col></col><col></col></row></table>",
                    "<table><td><td></td></td></table>",
                    "<grid><row><col></col></row></grid>"
                ],
                correct: 0
            },
            {
                id: 14,
                type: 'qcm',
                question: "Quelle balise crée un saut de ligne ?",
                options: ["<break>", "<br>", "<lb>", "<newline>"],
                correct: 1
            },
            {
                id: 15,
                type: 'qcm',
                question: "Quel est le rôle de la balise <meta charset='UTF-8'> ?",
                options: ["Définir la langue", "Définir l'encodage des caractères", "Définir le titre", "Définir le style"],
                correct: 1
            },
            {
                id: 16,
                type: 'pratique',
                question: "Comment créer un formulaire avec un champ texte et un bouton ?",
                options: [
                    "<form><input type='text'><button>Envoyer</button></form>",
                    "<form><text></text><submit></submit></form>",
                    "<input><button></button>",
                    "<form><field type='text'><send></send></form>"
                ],
                correct: 0
            },
            {
                id: 17,
                type: 'qcm',
                question: "Quelle balise définit un titre de niveau 2 ?",
                options: ["<h2>", "<title2>", "<heading2>", "<t2>"],
                correct: 0
            },
            {
                id: 18,
                type: 'qcm',
                question: "Comment créer une liste ordonnée ?",
                options: ["<list order>", "<ol>", "<ordered>", "<ul>"],
                correct: 1
            },
            {
                id: 19,
                type: 'pratique',
                question: "Quel code crée un lien qui ouvre dans un nouvel onglet ?",
                options: [
                    "<a href='page.html' target='_blank'>Lien</a>",
                    "<a href='page.html' new>Lien</a>",
                    "<link to='page.html' newtab>Lien</link>",
                    "<a href='page.html' open='new'>Lien</a>"
                ],
                correct: 0
            },
            {
                id: 20,
                type: 'qcm',
                question: "Quelle balise permet d'inclure du JavaScript ?",
                options: ["<js>", "<script>", "<javascript>", "<code>"],
                correct: 1
            },
            {
                id: 21,
                type: 'qcm',
                question: "Quel attribut est utilisé pour spécifier que l'utilisateur doit obligatoirement remplir un champ de formulaire ?",
                options: ["validate", "required", "mandatory", "check"],
                correct: 1
            },
            {
                id: 22,
                type: 'qcm',
                question: "Quelle balise sémantique est la plus appropriée pour le contenu principal et unique d'une page ?",
                options: ["<section>", "<div>", "<main>", "<article>"],
                correct: 2
            },
            {
                id: 23,
                type: 'qcm',
                question: "Que signifie l'acronyme HTML ?",
                options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of the above"],
                correct: 0
            },
            {
                id: 24,
                type: 'qcm',
                question: "Quelle balise est utilisée pour définir une barre de navigation ?",
                options: ["<nav>", "<navbar>", "<navigation>", "<menu>"],
                correct: 0
            },
            {
                id: 25,
                type: 'qcm',
                question: "Quel attribut de la balise <meta> permet de rendre le site 'responsive' (adapté au mobile) ?",
                options: ["viewport", "responsive", "mobile-friendly", "width"],
                correct: 0
            },
            {
                id: 26,
                type: 'qcm',
                question: "Quelle balise est utilisée pour regrouper des options dans un élément <select> ?",
                options: ["<optiongroup>", "<optgroup>", "<group>", "<options>"],
                correct: 1
            },
            {
                id: 27,
                type: 'qcm',
                question: "Comment définit-on une ancre pour faire un lien vers un endroit précis de la même page ?",
                options: ["href='#id'", "href='url#id'", "href='@id'", "href='id'"],
                correct: 0
            },
            {
                id: 28,
                type: 'qcm',
                question: "Quelle balise est utilisée pour afficher une vidéo ?",
                options: ["<media>", "<movie>", "<video>", "<visual>"],
                correct: 2
            },
            {
                id: 29,
                type: 'qcm',
                question: "Quel est le rôle de la balise <aside> ?",
                options: ["Contenu principal", "Barre latérale ou contenu tangentiel", "Pied de page", "Entête"],
                correct: 1
            },
            {
                id: 30,
                type: 'qcm',
                question: "Quel attribut permet de donner un nom unique à un élément HTML ?",
                options: ["class", "id", "name", "type"],
                correct: 1
            }
        ]
    },
    'css-mastery': {
        title: 'Examen CSS - Fondamentaux',
        passingScore: 16,
        questions: [
            {
                id: 1,
                type: 'qcm',
                question: "En CSS, quelle propriété change la couleur du texte ?",
                options: ["font-color", "text-color", "color", "background-color"],
                correct: 2
            },
            {
                id: 2,
                type: 'qcm',
                question: "Comment sélectionner tous les éléments d'une classe 'menu' en CSS ?",
                options: ["#menu", ".menu", "*menu", "menu"],
                correct: 1
            },
            {
                id: 3,
                type: 'qcm',
                question: "Quelle propriété CSS contrôle l'espacement entre les lettres ?",
                options: ["letter-space", "text-spacing", "letter-spacing", "char-spacing"],
                correct: 2
            },
            {
                id: 4,
                type: 'pratique',
                question: "Comment centrer un bloc horizontalement avec CSS ?",
                options: ["text-align: center", "margin: 0 auto", "align: center", "center: true"],
                correct: 1
            },
            {
                id: 5,
                type: 'qcm',
                question: "Quelle propriété CSS permet de créer des coins arrondis ?",
                options: ["corner-radius", "border-round", "border-radius", "round-corner"],
                correct: 2
            },
            {
                id: 6,
                type: 'qcm',
                question: "En CSS, comment rendre un élément invisible mais conservant son espace ?",
                options: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
                correct: 1
            },
            {
                id: 7,
                type: 'qcm',
                question: "Quelle propriété CSS permet de changer le curseur de la souris ?",
                options: ["mouse-style", "cursor", "pointer-type", "mouse-cursor"],
                correct: 1
            },
            {
                id: 8,
                type: 'pratique',
                question: "Comment définir une image de fond en CSS ?",
                options: [
                    "image: url('img.jpg')",
                    "background-image: url('img.jpg')",
                    "bg-image: url('img.jpg')",
                    "background: image('img.jpg')"
                ],
                correct: 1
            },
            {
                id: 9,
                type: 'qcm',
                question: "Quelle propriété CSS contrôle l'ordre d'empilement des éléments ?",
                options: ["layer", "z-index", "stack-order", "position-index"],
                correct: 1
            },
            {
                id: 10,
                type: 'qcm',
                question: "Comment lier une feuille de style CSS externe à une page HTML ?",
                options: [
                    "<style src='style.css'>",
                    "<link rel='stylesheet' href='style.css'>",
                    "<css href='style.css'>",
                    "<import src='style.css'>"
                ],
                correct: 1
            },
            {
                id: 11,
                type: 'pratique',
                question: "Comment créer une bordure de 2px solide rouge ?",
                options: [
                    "border: red 2px solid",
                    "border: 2px solid red",
                    "border-color: red; border-width: 2px",
                    "border: 2px red"
                ],
                correct: 1
            },
            {
                id: 12,
                type: 'qcm',
                question: "Quelle propriété change la taille de la police ?",
                options: ["text-size", "font-size", "size", "text-height"],
                correct: 1
            },
            {
                id: 13,
                type: 'qcm',
                question: "Comment sélectionner un élément avec l'ID 'header' ?",
                options: [".header", "#header", "*header", "header"],
                correct: 1
            },
            {
                id: 14,
                type: 'pratique',
                question: "Comment créer un padding de 10px sur tous les côtés ?",
                options: [
                    "padding: 10px all",
                    "padding: 10px",
                    "padding-all: 10px",
                    "padding: 10px 10px 10px 10px"
                ],
                correct: 1
            },
            {
                id: 15,
                type: 'qcm',
                question: "Quelle unité CSS est relative à la taille de la police parente ?",
                options: ["px", "em", "pt", "%"],
                correct: 1
            },
            {
                id: 16,
                type: 'qcm',
                question: "Comment rendre un texte en gras ?",
                options: ["text-weight: bold", "font-weight: bold", "text-style: bold", "bold: true"],
                correct: 1
            },
            {
                id: 17,
                type: 'pratique',
                question: "Comment créer un dégradé linéaire du haut vers le bas (rouge à bleu) ?",
                options: [
                    "background: linear-gradient(red, blue)",
                    "background: linear-gradient(to bottom, red, blue)",
                    "background-gradient: top red, bottom blue",
                    "gradient: vertical(red, blue)"
                ],
                correct: 1
            },
            {
                id: 18,
                type: 'qcm',
                question: "Quelle propriété contrôle l'espacement entre les lignes de texte ?",
                options: ["text-spacing", "line-height", "line-spacing", "text-height"],
                correct: 1
            },
            {
                id: 19,
                type: 'qcm',
                question: "Comment définir la position d'un élément en absolu ?",
                options: ["position: absolute", "display: absolute", "float: absolute", "position: fixed"],
                correct: 0
            },
            {
                id: 20,
                type: 'pratique',
                question: "Comment créer une ombre portée sur une boîte ?",
                options: [
                    "shadow: 5px 5px 10px black",
                    "box-shadow: 5px 5px 10px black",
                    "drop-shadow: 5px 5px 10px black",
                    "shadow-box: 5px 5px 10px black"
                ],
                correct: 1
            },
            {
                id: 21,
                type: 'qcm',
                question: "Quelle unité CSS est calculée par rapport à la taille de la police de l'élément racine (<html>) ?",
                options: ["rem", "em", "px", "vh"],
                correct: 0
            },
            {
                id: 22,
                type: 'qcm',
                question: "Quelle propriété CSS Grid permet de définir l'espacement entre les lignes et les colonnes ?",
                options: ["grid-spacing", "gap", "grid-margin", "cell-padding"],
                correct: 1
            },
            {
                id: 23,
                type: 'qcm',
                question: "Comment supprimer les puces d'une liste en CSS ?",
                options: ["list-style: none", "bullets: hidden", "text-decoration: none", "list-type: empty"],
                correct: 0
            },
            {
                id: 24,
                type: 'qcm',
                question: "Quelle pseudo-classe cible le premier enfant d'un élément parent ?",
                options: [":first-child", ":first", ":child(1)", ":start"],
                correct: 0
            },
            {
                id: 25,
                type: 'qcm',
                question: "Quelle propriété permet de changer la graisse (épaisseur) du texte ?",
                options: ["font-bold", "text-weight", "font-weight", "thickness"],
                correct: 2
            },
            {
                id: 26,
                type: 'qcm',
                question: "Quelle propriété est utilisée pour lisser le changement d'une propriété CSS sur une durée donnée ?",
                options: ["animation", "transition", "transform", "smooth"],
                correct: 1
            },
            {
                id: 27,
                type: 'qcm',
                question: "Que fait 'display: flex' ?",
                options: ["Rend l'élément invisible", "Active le mode de mise en page flexible pour les enfants", "Force l'élément à prendre toute la page", "Supprime les marges"],
                correct: 1
            },
            {
                id: 28,
                type: 'qcm',
                question: "Quelle propriété définit la transparence d'un élément ?",
                options: ["transparency", "filter", "opacity", "visible"],
                correct: 2
            },
            {
                id: 29,
                type: 'qcm',
                question: "Comment cibler un élément <p> au survol de la souris ?",
                options: ["p:hover", "p:active", "p:mouse", "p:over"],
                correct: 0
            },
            {
                id: 30,
                type: 'qcm',
                question: "Quelle propriété définit l'image d'arrière-plan ?",
                options: ["background-img", "bg-image", "background-image", "image"],
                correct: 2
            }
        ]
    },
    'bootstrap-pro': {
        title: 'Examen Bootstrap - Essentiels',
        passingScore: 16,
        questions: [
            {
                id: 1,
                type: 'qcm',
                question: "Quelle classe Bootstrap crée un conteneur responsive à largeur fixe ?",
                options: ["container-fluid", "container", "row", "col"],
                correct: 1
            },
            {
                id: 2,
                type: 'qcm',
                question: "Comment créer un bouton principal (bleu) avec Bootstrap ?",
                options: ["btn btn-main", "btn btn-primary", "button-primary", "btn-blue"],
                correct: 1
            },
            {
                id: 3,
                type: 'qcm',
                question: "Le système de grille Bootstrap est basé sur combien de colonnes ?",
                options: ["10", "12", "16", "24"],
                correct: 1
            },
            {
                id: 4,
                type: 'pratique',
                question: "Comment créer 3 colonnes égales dans une row Bootstrap ?",
                options: [
                    "<div class='row'><div class='col-4'></div><div class='col-4'></div><div class='col-4'></div></div>",
                    "<div class='row'><div class='col-3'></div><div class='col-3'></div><div class='col-3'></div></div>",
                    "<div class='grid-3'><div></div><div></div><div></div></div>",
                    "<div class='row'><div class='equal'></div><div class='equal'></div><div class='equal'></div></div>"
                ],
                correct: 0
            },
            {
                id: 5,
                type: 'qcm',
                question: "Quelle classe Bootstrap ajoute une ombre à une carte (card) ?",
                options: ["card-shadow", "shadow", "box-shadow", "card-effect"],
                correct: 1
            },
            {
                id: 6,
                type: 'qcm',
                question: "Comment créer un espacement vertical (margin top) de 3 unités en Bootstrap ?",
                options: ["mt-3", "margin-top-3", "spacing-3", "my-3"],
                correct: 0
            },
            {
                id: 7,
                type: 'qcm',
                question: "Quelle classe Bootstrap rend un tableau responsive ?",
                options: ["table-fluid", "table-responsive", "responsive-table", "table-mobile"],
                correct: 1
            },
            {
                id: 8,
                type: 'pratique',
                question: "Comment créer un bouton de taille large (lg) avec Bootstrap ?",
                options: [
                    "<button class='btn btn-primary btn-lg'>Bouton</button>",
                    "<button class='btn btn-primary large'>Bouton</button>",
                    "<button class='btn btn-big btn-primary'>Bouton</button>",
                    "<button class='btn-lg primary'>Bouton</button>"
                ],
                correct: 0
            },
            {
                id: 9,
                type: 'qcm',
                question: "Quelle classe cache un élément sur mobile uniquement ?",
                options: ["d-none d-md-block", "hidden-mobile", "d-mobile-none", "mobile-hide"],
                correct: 0
            },
            {
                id: 10,
                type: 'qcm',
                question: "Comment centrer du texte avec Bootstrap ?",
                options: ["center-text", "text-center", "align-center", "text-middle"],
                correct: 1
            },
            {
                id: 11,
                type: 'pratique',
                question: "Comment créer une alerte de type 'success' avec Bootstrap ?",
                options: [
                    "<div class='alert alert-success'>Message</div>",
                    "<div class='success-alert'>Message</div>",
                    "<alert type='success'>Message</alert>",
                    "<div class='message success'>Message</div>"
                ],
                correct: 0
            },
            {
                id: 12,
                type: 'qcm',
                question: "Quelle classe Bootstrap crée un badge ?",
                options: ["label", "badge", "tag", "chip"],
                correct: 1
            },
            {
                id: 13,
                type: 'qcm',
                question: "Comment créer un bouton avec contour (outline) ?",
                options: ["btn-border", "btn-outline-primary", "btn-line", "btn-empty"],
                correct: 1
            },
            {
                id: 14,
                type: 'pratique',
                question: "Comment créer un navbar Bootstrap de base ?",
                options: [
                    "<nav class='navbar navbar-expand-lg navbar-dark bg-dark'><div class='container'>Barre</div></nav>",
                    "<div class='navigation'>Mon Menu</div>",
                    "<navbar expand='lg'>Menu</navbar>",
                    "<nav class='bs-nav navbar-style'>Barre de navigation</nav>"
                ],
                correct: 0
            },
            {
                id: 15,
                type: 'qcm',
                question: "Quelle classe ajoute un padding de 2 unités sur tous les côtés ?",
                options: ["p-2", "padding-2", "pad-2", "space-2"],
                correct: 0
            },
            {
                id: 16,
                type: 'qcm',
                question: "Comment créer une colonne qui prend toute la largeur ?",
                options: ["col-full", "col-12", "col-100", "col-max"],
                correct: 1
            },
            {
                id: 17,
                type: 'pratique',
                question: "Comment aligner des éléments de formulaire sur une ligne ?",
                options: [
                    "<div class='row g-3 align-items-center'><div class='col-auto'><input class='form-control'></div></div>",
                    "<form class='form-inline'><input class='form-control'></form>",
                    "<form inline><input></form>",
                    "<div class='flex-row'><input></div>"
                ],
                correct: 0
            },
            {
                id: 18,
                type: 'qcm',
                question: "Quelle classe Bootstrap crée une liste sans style ?",
                options: ["list-none", "list-unstyled", "no-list", "plain-list"],
                correct: 1
            },
            {
                id: 19,
                type: 'qcm',
                question: "Comment ajouter une marge à droite de 4 unités (Bootstrap 5) ?",
                options: ["mr-4", "me-4", "margin-end-4", "right-4"],
                correct: 1
            },
            {
                id: 20,
                type: 'pratique',
                question: "Comment créer un groupe de boutons horizontal ?",
                options: [
                    "<div class='btn-group' role='group'><button class='btn'>A</button><button class='btn'>B</button></div>",
                    "<div class='button-group'><button>A</button></div>",
                    "<group type='button'>Action</group>",
                    "<div class='btns-row'><button>A</button></div>"
                ],
                correct: 0
            },
            {
                id: 21,
                type: 'qcm',
                question: "Quelle classe Bootstrap permet de transformer une liste en une barre de navigation horizontale ?",
                options: ["nav", "navbar-nav", "nav-inline", "list-inline"],
                correct: 1
            },
            {
                id: 22,
                type: 'qcm',
                question: "Comment créer un espacement interne (padding) en bas de 4 unités ?",
                options: ["pb-4", "padding-bottom-4", "pt-4", "ps-4"],
                correct: 0
            },
            {
                id: 23,
                type: 'qcm',
                question: "Quelle classe permet d'aligner du texte à droite ?",
                options: ["text-right", "text-end", "text-align-right", "align-end"],
                correct: 1
            },
            {
                id: 24,
                type: 'qcm',
                question: "Quelle classe Bootstrap 5 est utilisée pour une marge à gauche (start) ?",
                options: ["ml-", "ms-", "mg-l-", "left-"],
                correct: 1
            },
            {
                id: 25,
                type: 'qcm',
                question: "Quel composant Bootstrap est utilisé pour créer des panneaux repliables (accordéons) ?",
                options: ["collapse", "accordion", "dropdown", "modal"],
                correct: 1
            },
            {
                id: 26,
                type: 'qcm',
                question: "Quelle classe permet d'arrondir les bords d'un élément (cercle) ?",
                options: ["rounded", "rounded-circle", "circle", "border-radius"],
                correct: 1
            },
            {
                id: 27,
                type: 'qcm',
                question: "Comment créer une ligne qui utilise Flexbox dans Bootstrap ?",
                options: ["row", "d-flex", "flex-row", "grid"],
                correct: 0
            },
            {
                id: 28,
                type: 'qcm',
                question: "Quelle classe permet de créer un champ de formulaire avec un style Bootstrap ?",
                options: ["form-input", "form-control", "input-style", "bootstrap-input"],
                correct: 1
            },
            {
                id: 29,
                type: 'qcm',
                question: "Quelle classe permet d'ajouter une bordure subtile à un élément ?",
                options: ["border", "outline", "box-border", "stroke"],
                correct: 0
            },
            {
                id: 30,
                type: 'qcm',
                question: "Quelle classe permet de centrer un bloc d'élément possédant une largeur définie ?",
                options: ["mx-auto", "text-center", "center-block", "margin-center"],
                correct: 0
            }
        ]
    }
};

// --- SERVICES ---
const STORAGE_KEY_USERS = 'webacademy_users';
const STORAGE_KEY_SESSION = 'webacademy_session';

const authService = {
    register(username, email, password, role = 'student') {
        const users = this.getUsers();
        if (users.find(u => u.email === email)) {
            return { success: false, message: 'Cet email est déjà utilisé.' };
        }
        const newUser = { id: Date.now().toString(), username, email, password, role, progress: {} };
        users.push(newUser);
        this.saveUsers(users);
        this.login(email, password);
        return { success: true };
    },
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            const { password, ...sessionUser } = user;
            localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(sessionUser));
            window.dispatchEvent(new Event('auth-change'));
            return { success: true };
        }
        return { success: false, message: 'Email ou mot de passe incorrect.' };
    },
    logout() {
        localStorage.removeItem(STORAGE_KEY_SESSION);
        window.dispatchEvent(new Event('auth-change'));
    },
    getUser() {
        const session = localStorage.getItem(STORAGE_KEY_SESSION);
        return session ? JSON.parse(session) : null;
    },
    getUsers() {
        const users = localStorage.getItem(STORAGE_KEY_USERS);
        return users ? JSON.parse(users) : [];
    },
    saveUsers(users) {
        localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    },
    deleteUser(id) {
        let users = this.getUsers();
        users = users.filter(u => u.id !== id);
        this.saveUsers(users);
        return { success: true };
    },
    updateProgress(userId, courseId, progress) {
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            if (!user.progress) user.progress = {};
            user.progress[courseId] = progress;
            this.saveUsers(users);
            // Update session if it's the current user
            const currentUser = this.getUser();
            if (currentUser && currentUser.id === userId) {
                currentUser.progress = user.progress;
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
            }
        }
    },
    certifyUser(userId) {
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            user.certified = true;
            this.saveUsers(users);
            // Update session if it's the current user (unlikely for admin action, but good practice)
            const currentUser = this.getUser();
            if (currentUser && currentUser.id === userId) {
                currentUser.certified = true;
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
            }
            return { success: true };
        }
        return { success: false };
    },
    updateAttendance(userId, status) {
        const users = this.getUsers();
        const user = users.find(u => u.id === userId);
        if (user) {
            if (!user.attendance) user.attendance = [];
            const today = new Date().toLocaleDateString();
            const existing = user.attendance.find(a => a.date === today);
            if (existing) {
                existing.status = status;
            } else {
                user.attendance.push({ date: today, status: status });
            }
            this.saveUsers(users);

            const currentUser = this.getUser();
            if (currentUser && currentUser.id === userId) {
                currentUser.attendance = user.attendance;
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
            }
            return { success: true };
        }
        return { success: false };
    }
};

const examService = {
    submitExam(userId, courseId, answers) {
        const users = authService.getUsers();
        const user = users.find(u => u.id === userId);
        const examData = MODULES_EXAMS[courseId];

        if (user && examData) {
            let score = 0;
            examData.questions.forEach(q => {
                if (answers[q.id] == q.correct) score++;
            });

            if (!user.examSubmissions) user.examSubmissions = {};
            user.examSubmissions[courseId] = {
                date: new Date().toLocaleDateString(),
                answers: answers,
                score: score,
                total: examData.questions.length,
                status: 'pending'
            };
            authService.saveUsers(users);

            const currentUser = authService.getUser();
            if (currentUser && currentUser.id === userId) {
                if (!currentUser.examSubmissions) currentUser.examSubmissions = {};
                currentUser.examSubmissions[courseId] = user.examSubmissions[courseId];
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
            }
            return { success: true, score, total: examData.questions.length };
        }
        return { success: false };
    },
    validateExam(userId, courseId) {
        const users = authService.getUsers();
        const user = users.find(u => u.id === userId);
        if (user && user.examSubmissions && user.examSubmissions[courseId]) {
            user.examSubmissions[courseId].status = 'validated';

            if (!user.examResults) user.examResults = {};
            user.examResults[courseId] = {
                score: user.examSubmissions[courseId].score,
                total: user.examSubmissions[courseId].total,
                passed: user.examSubmissions[courseId].score >= MODULES_EXAMS[courseId].passingScore,
                date: new Date().toLocaleDateString()
            };

            if (user.examResults[courseId].passed) {
                if (!user.progress) user.progress = {};
                user.progress[courseId] = 100;
            }

            authService.saveUsers(users);

            const currentUser = authService.getUser();
            if (currentUser && currentUser.id === userId) {
                currentUser.examSubmissions = user.examSubmissions;
                currentUser.examResults = user.examResults;
                currentUser.progress = user.progress;
                localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(currentUser));
            }
            return { success: true };
        }
        return { success: false };
    }
};

const STORAGE_KEY_MESSAGES = 'webacademy_messages';
const messageService = {
    getMessages() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY_MESSAGES) || '[]');
    },
    send(from, toId, subject, body) {
        const messages = this.getMessages();
        messages.push({
            id: Date.now().toString(),
            from,
            toId,
            subject,
            body,
            date: new Date().toLocaleDateString()
        });
        localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
    },
    getMyMessages(userId) {
        return this.getMessages().filter(m => m.toId === userId).reverse();
    }
};

const courseService = {
    async getAllCourses() { return COURSE_DATA; },
    async getCourseById(id) { return COURSE_DATA.find(c => c.id === id); }
};

// --- PAGES ---
const Pages = {
    home() {
        return `
            <section class="hero">
                <div class="container">
                    <h1>Maîtrisez le <span class="text-accent">Développement Web</span></h1>
                    <p class="hero-subtitle">Apprenez HTML, CSS et Bootstrap avec plus de 100 cours détaillés et interactifs.</p>
                    <div class="hero-actions">
                        <a href="#courses" class="btn btn-primary">Commencer à apprendre</a>
                        <a href="#exercises" class="btn btn-outline">Voir les exercices</a>
                    </div>
                </div>
            </section>
        `;
    },

    login() {
        return `
            <div class="container auth-container">
                <div class="auth-card">
                    <h2>Connexion</h2>
                    <form id="login-form">
                        <div class="form-group"><label>Email</label><input type="email" id="email" required></div>
                        <div class="form-group"><label>Mot de passe</label><input type="password" id="password" required></div>
                        <div id="login-error" class="form-error"></div>
                        <button type="submit" class="btn btn-primary btn-block">Se connecter</button>
                        <p class="auth-footer"><a href="#register" class="text-accent">S'inscrire</a></p>
                    </form>
                </div>
            </div>
        `;
    },

    register() {
        return `
            <div class="container auth-container">
                <div class="auth-card">
                    <h2>Inscription</h2>
                    <form id="register-form">
                        <div class="form-group"><label>Nom</label><input type="text" id="username" required></div>
                        <div class="form-group"><label>Email</label><input type="email" id="email" required></div>
                        <div class="form-group"><label>Mot de passe</label><input type="password" id="password" required></div>
                        <div class="form-group">
                            <label>Type de compte</label>
                            <select id="role" class="form-control" style="width:100%; padding:0.8rem; background:var(--bg-input); border:1px solid var(--border-color); color:var(--text-main); border-radius:4px;">
                                <option value="student">Étudiant</option>
                                <option value="admin">Directeur</option>
                            </select>
                        </div>
                        <div id="register-error" class="form-error"></div>
                        <button type="submit" class="btn btn-primary btn-block">S'inscrire</button>
                        <p class="auth-footer"><a href="#login" class="text-accent">Se connecter</a></p>
                    </form>
                </div>
            </div>
        `;
    },

    async dashboard() {
        const user = authService.getUser();
        if (!user) { window.location.hash = 'login'; return ''; }

        // ADMIN DASHBOARD
        if (user.role === 'admin') {
            const allUsers = authService.getUsers().filter(u => u.role !== 'admin');
            const courses = await courseService.getAllCourses();

            const pendingExams = [];
            allUsers.forEach(u => {
                if (u.examSubmissions) {
                    Object.keys(u.examSubmissions).forEach(courseId => {
                        if (u.examSubmissions[courseId].status === 'pending') {
                            pendingExams.push({ userId: u.id, username: u.username, courseId, ...u.examSubmissions[courseId] });
                        }
                    });
                }
            });

            return `
                <div class="container dashboard-header">
                    <h1>Espace <span class="text-accent">Directeur</span></h1>
                    <p>Bienvenue, M. <strong>${user.username}</strong>.</p>
                </div>
                <div class="container">
                    <div class="dashboard-stats">
                        <div class="stat-card"><h3>${allUsers.length}</h3><p>Étudiants inscrits</p></div>
                        <div class="stat-card"><h3>${allUsers.filter(u => u.certified || Object.values(u.progress || {}).some(p => p >= 100)).length}</h3><p>Certifiés</p></div>
                        <div class="stat-card"><h3>Admin</h3><p>Mode</p></div>
                    </div>

                    <h2 class="section-title">Examens à Corriger</h2>
                    <div style="background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; margin-bottom: 3rem;">
                        <table style="width: 100%; border-collapse: collapse; color: var(--text-main);">
                            <thead style="background: rgba(255,255,255,0.05); text-align: left;">
                                <tr>
                                    <th style="padding: 1rem;">Étudiant</th>
                                    <th style="padding: 1rem;">Cours</th>
                                    <th style="padding: 1rem;">Date</th>
                                    <th style="padding: 1rem;">Score Auto</th>
                                    <th style="padding: 1rem;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${pendingExams.length > 0 ? pendingExams.map(ex => `
                                    <tr style="border-top: 1px solid var(--border-color);">
                                        <td style="padding: 1rem;">${ex.username}</td>
                                        <td style="padding: 1rem;">${ex.courseId}</td>
                                        <td style="padding: 1rem;">${ex.date}</td>
                                        <td style="padding: 1rem;">${ex.score}/${ex.total}</td>
                                        <td style="padding: 1rem;">
                                            <button class="btn btn-primary btn-sm validate-exam-btn" data-user-id="${ex.userId}" data-course-id="${ex.courseId}">Valider</button>
                                            <button class="btn btn-outline btn-sm view-exam-report-btn" data-user-id="${ex.userId}" data-course-id="${ex.courseId}">Rapport PDF</button>
                                        </td>
                                    </tr>
                                `).join('') : `<tr><td colspan="5" style="padding: 2rem; text-align: center;">Aucun examen en attente.</td></tr>`}
                            </tbody>
                        </table>
                    </div>

                    <h2 class="section-title">Gestion des Étudiants et Absences</h2>
                    <div style="background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; margin-bottom: 3rem;">
                        <table style="width: 100%; border-collapse: collapse; color: var(--text-main);">
                            <thead style="background: rgba(255,255,255,0.05); text-align: left;">
                                <tr>
                                    <th style="padding: 1rem;">Nom</th>
                                    <th style="padding: 1rem;">Absence</th>
                                    <th style="padding: 1rem;">Rapports</th>
                                    <th style="padding: 1rem;">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${allUsers.length > 0 ? allUsers.map(u => {
                const today = new Date().toLocaleDateString();
                const todayAttendance = u.attendance?.find(a => a.date === today);
                return `
                                    <tr style="border-top: 1px solid var(--border-color);">
                                        <td style="padding: 1rem;">${u.username}</td>
                                        <td style="padding: 1rem;">
                                            <span class="badge ${todayAttendance?.status === 'present' ? 'bg-success' : todayAttendance?.status === 'absent' ? 'bg-danger' : 'bg-secondary'}" style="padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.8em; color: white;">
                                                ${todayAttendance?.status === 'present' ? 'Présent' : todayAttendance?.status === 'absent' ? 'Absent' : 'Non marqué'}
                                            </span>
                                        </td>
                                        <td style="padding: 1rem;">
                                            ${Object.keys(u.examSubmissions || {}).filter(cid => u.examSubmissions[cid].status === 'validated').map(cid => `
                                                <button class="btn btn-link btn-sm view-exam-report-btn" data-user-id="${u.id}" data-course-id="${cid}" style="padding:0; margin-right:5px; font-size:0.8em; color:var(--accent-color);">${cid.split('-')[0].toUpperCase()}</button>
                                            `).join('') || '<small class="text-muted">Aucun</small>'}
                                        </td>
                                        <td style="padding: 1rem;">
                                            <button class="btn btn-success btn-sm mark-attendance-btn" data-id="${u.id}" data-status="present">Présent</button>
                                            <button class="btn btn-danger btn-sm mark-attendance-btn" data-id="${u.id}" data-status="absent">Absent</button>
                                            <button class="btn btn-primary btn-sm certify-user-btn" data-id="${u.id}" data-name="${u.username}" style="background-color: gold; border-color: gold; color: black;">Certifier</button>
                                            <button class="btn btn-outline btn-sm contact-user-btn" data-id="${u.id}" data-name="${u.username}">Contacter</button>
                                        </td>
                                    </tr>
                                `}).join('') : `<tr><td colspan="3" style="padding: 2rem; text-align: center;">Aucun étudiant inscrit.</td></tr>`}
                            </tbody>
                        </table>
                    </div>

                    <h2 class="section-title">Banque d'Examens (Sujets PDF)</h2>
                    <div class="course-grid" style="margin-bottom: 3rem;">
                        ${courses.map(course => `
                            <div class="course-card">
                                <div class="course-icon icon-${course.icon}"><span>${course.icon.substring(0, 1).toUpperCase()}</span></div>
                                <div class="course-content">
                                    <h3>Sujet : ${course.title}</h3>
                                    <p>Générer la version imprimable de l'examen.</p>
                                    <button class="btn btn-outline btn-sm download-exam-paper-btn" data-course-id="${course.id}">Télécharger Sujet PDF</button>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <h2 class="section-title">Certificats Délivrés</h2>
                    <div class="course-grid">
                         ${allUsers.filter(u => u.certified || Object.values(u.progress || {}).some(p => p >= 100)).map(u => `
                            <div class="course-card" style="border-color: gold;">
                                <div class="course-icon" style="color: gold;">🏆</div>
                                <div class="course-content">
                                    <h3>${u.username}</h3>
                                    <p>A complété le cursus Web Academy avec succès.</p>
                                    <button class="btn btn-primary btn-sm download-cert-btn-admin" data-username="${u.username}">Télécharger PDF</button>
                                    <button class="btn btn-outline btn-sm view-exam-report-btn" data-user-id="${u.id}" data-course-id="${Object.keys(u.examSubmissions || {}).find(cid => u.examSubmissions[cid].status === 'validated')}">Voir Rapport</button>
                                </div>
                            </div>
                         `).join('')}
                         ${allUsers.filter(u => u.certified || Object.values(u.progress || {}).some(p => p >= 100)).length === 0 ? '<p>Aucun certificat délivré pour le moment.</p>' : ''}
                    </div>
                </div>
            `;
        }
        // STUDENT DASHBOARD
        const courses = await courseService.getAllCourses();
        const myMessages = messageService.getMyMessages(user.id);
        const presenceCount = user.attendance ? user.attendance.filter(a => a.status === 'present').length : 0;
        const absenceCount = user.attendance ? user.attendance.filter(a => a.status === 'absent').length : 0;

        return `
            <div class="container dashboard-header">
                <h1>Mon <span class="text-accent">Espace</span></h1>
                <p>Bienvenue, <strong>${user.username}</strong>.</p>
            </div>
            <div class="container">
                <div class="row" style="display:flex; gap:2rem; flex-wrap:wrap;">
                    <div style="flex: 2;">
                        ${user.certified ? `
                        <div style="background: linear-gradient(135deg, #ffd700 0%, #daa520 100%); color: black; padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between;">
                            <div>
                                <h3 style="margin:0; font-weight:800;">Félicitations !</h3>
                                <p style="margin:0.5rem 0 0 0;">Vous avez obtenu votre Certificat Web Academy.</p>
                            </div>
                            <button class="btn btn-light" id="download-cert-btn" style="color:black; font-weight:bold;">⬇ Télécharger mon Certificat</button>
                        </div>
                        ` : ''}

                        <h2 class="section-title">Mon Assiduité</h2>
                        <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                            <div class="stat-card" style="flex: 1; border-left: 4px solid #2ec4b6;">
                                <h3 style="color: #2ec4b6;">${presenceCount}</h3>
                                <p>Présences</p>
                            </div>
                            <div class="stat-card" style="flex: 1; border-left: 4px solid #ff4757;">
                                <h3 style="color: #ff4757;">${absenceCount}</h3>
                                <p>Absences</p>
                            </div>
                        </div>

                        <h2 class="section-title">Mes Cours</h2>
                        <div class="course-list" style="margin-bottom: 3rem;">
                            ${courses.map(course => {
            const prog = (user.progress && user.progress[course.id]) || 0;
            return `
                                    <div class="course-item">
                                        <div class="course-info">
                                            <h4>${course.title} ${prog >= 100 ? '🏆' : ''}</h4>
                                            <div class="progress-bar"><div class="progress-fill" style="width: ${prog}%"></div></div>
                                        </div>
                                        <a href="#course/${course.id}" class="btn btn-primary btn-sm">${prog >= 100 ? 'Revoir' : 'Continuer'}</a>
                                    </div>
                                `}).join('')}
                        </div>

                        <h2 class="section-title" id="exam-center">Centre d'Examens</h2>
                        <div class="exam-center-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
                            ${courses.map(course => {
                const examResult = user.examResults ? user.examResults[course.id] : null;
                const submission = user.examSubmissions ? user.examSubmissions[course.id] : null;

                let statusHtml = '';
                let btnText = 'Lancer l\'Examen';
                let btnClass = 'btn-primary';

                if (submission && submission.status === 'pending') {
                    statusHtml = `<span style="color: #ff9f43; font-weight: bold;">En attente de correction... ⏳</span>`;
                    btnText = 'En attente';
                    btnClass = 'btn-secondary disabled';
                } else if (examResult) {
                    if (examResult.passed) {
                        statusHtml = `<span style="color: #2ec4b6; font-weight: bold;">Réussi (${examResult.score}/${examResult.total}) ✅</span>`;
                        btnText = 'Repasser';
                        btnClass = 'btn-outline';
                    } else {
                        statusHtml = `<span style="color: #e71d36; font-weight: bold;">Échec (${examResult.score}/${examResult.total})</span>`;
                        btnText = 'Réessayer';
                    }
                } else {
                    statusHtml = `<span class="text-muted">Non tenté</span>`;
                }

                return `
                                    <div class="exam-card" style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); border-left: 4px solid ${examResult?.passed ? '#2ec4b6' : submission?.status === 'pending' ? '#ff9f43' : 'var(--accent-color)'};">
                                        <h4 style="margin-bottom: 0.5rem;">Examen ${course.title}</h4>
                                        <p style="font-size: 0.9em; margin-bottom: 1rem;">${statusHtml}</p>
                                        <a href="${submission?.status === 'pending' ? '#' : '#exam/' + course.id}" class="btn ${btnClass} btn-sm" style="width: 100%; text-align: center;">${btnText}</a>
                                    </div>
                                `;
            }).join('')}
                        </div>
                    </div>
                    </div>

    <div style="flex: 1; min-width: 300px;">
        <h2 class="section-title">Ma Messagerie</h2>
        <div class="message-box" style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); max-height: 400px; overflow-y: auto;">
            ${myMessages.length > 0 ? myMessages.map(m => `
                                <div class="message-item" style="border-bottom: 1px solid var(--border-color); padding: 1rem 0;">
                                    <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                                        <strong>${m.subject}</strong>
                                        <small class="text-muted">${m.date}</small>
                                    </div>
                                    <p style="font-size:0.9em; color:var(--text-muted);">${m.body}</p>
                                    <small style="color:var(--accent-color);">De: ${m.from}</small>
                                </div>
                            `).join('') : '<p class="text-muted">Aucun message reçu.</p>'}
        </div>
    </div>
                </div>

    <div class="dashboard-stats" style="margin-top: 3rem;">
        <div class="stat-card"><h3>100+</h3><p>Leçons complètes</p></div>
        <div class="stat-card"><h3>${Object.values(user.progress || {}).filter(p => p >= 100).length}</h3><p>Certificats</p></div>
    </div>
            </div>
    `;
    },

    async courses() {
        const courses = await courseService.getAllCourses();
        return `
    <div class="container page-header">
                <h1>Nos <span class="text-accent">Cours</span></h1>
                <p>Des centaines de leçons pour maîtriser le web.</p>
            </div>
    <div class="container course-grid">
        ${courses.map(course => `
                    <div class="course-card">
                        <div class="course-icon icon-${course.icon}"><span>${course.icon.substring(0, 1).toUpperCase()}</span></div>
                        <div class="course-content">
                            <h3>${course.title}</h3>
                            <p>${course.description}</p>
                            <a href="#course/${course.id}" class="btn btn-outline btn-sm">Voir le programme</a>
                        </div>
                    </div>
                `).join('')}
    </div>
`;
    },

    exercises() {
        return `
    <div class="exercise-container">
                <div class="editor-pane">
                    <div class="editor-header">
                        <h3>Éditeur HTML/CSS</h3>
                        <div class="editor-actions"><button id="run-btn" class="btn btn-primary btn-sm">▶ Exécuter</button></div>
                    </div>
                    <div class="code-area">
                        <textarea id="html-code" placeholder="<!-- HTML -->\n<h1>Test</h1>"></textarea>
                        <textarea id="css-code" placeholder="/* CSS */\nh1 { color: red; }"></textarea>
                    </div>
                </div>
                <div class="preview-pane">
                    <div class="preview-header"><h3>Résultat</h3></div>
                    <iframe id="preview-frame" title="Preview"></iframe>
                </div>
            </div>
    `;
    },

    async lesson(courseId, lessonId) {
        const course = await courseService.getCourseById(courseId);
        if (!course) return `<div class="container text-center" style="padding: 4rem;"><h2>Pas trouvé</h2></div>`;
        if (!lessonId && course.modules[0]?.lessons[0]) lessonId = course.modules[0].lessons[0].id;

        const currentLesson = course.modules.flatMap(m => m.lessons).find(l => l.id === lessonId);
        if (!currentLesson) return `<div class="container text-center"><h2>Leçon non trouvée</h2></div>`;

        return `
    <div class="course-viewer">
                <aside class="course-sidebar">
                    <div class="sidebar-header"><a href="#courses" class="back-link">← Retour</a><h3>${course.title}</h3></div>
                    <div class="modules-list">
                        ${course.modules.map(module => `
                            <div class="module-item">
                                <h4 class="module-title">${module.title}</h4>
                                <ul class="lesson-list">
                                    ${module.lessons.map(lesson => `
                                        <li><a href="#course/${course.id}/lesson/${lesson.id}" class="lesson-link ${lesson.id === lessonId ? 'active' : ''}">${lesson.title}</a></li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                    <div style="padding: 1.5rem; border-top: 2px solid var(--accent-color); margin-top: 1rem;">
                        <a href="#exam/${course.id}" class="btn btn-primary" style="width: 100%; text-align: center; background: linear-gradient(135deg, var(--accent-color) 0%, #4361ee 100%);">
                            📝 Passer l'Examen
                        </a>
                        <p style="text-align: center; margin-top: 0.5rem; font-size: 0.85em; color: var(--text-muted);">Testez vos connaissances</p>
                    </div>
                </aside>
                <main class="lesson-content">
                    <div class="lesson-header"><h1>${currentLesson.title}</h1></div>
                    <div class="lesson-body text-content">
                        ${currentLesson.content}
                    </div>
                    <div class="lesson-navigation">
                         <button class="btn btn-outline" onclick="history.back()">Précédent</button>
                         <div class="nav-spacer"></div>
                         <p class="text-muted small">Leçon ${lessonId}</p>
                    </div>
                </main>
            </div>
`;
    },

    async exam(courseId) {
        const examData = MODULES_EXAMS[courseId];
        if (!examData) return `<div class="container text-center" style="padding: 4rem;"><h2>Examen non trouvé</h2><a href="#dashboard" class="btn btn-primary">Retour au Dashboard</a></div>`;

        return `
    <div class="container auth-container">
        <div class="auth-card" style="max-width: 900px;">
            <h2>📝 ${examData.title}</h2>
            <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 2rem; border-left: 4px solid var(--accent-color);">
                <p style="margin: 0;"><strong>Instructions:</strong></p>
                <ul style="margin: 0.5rem 0;">
                    <li>Répondez aux <strong>${examData.questions.length} questions</strong></li>
                    <li>Score minimum pour réussir: <strong>${examData.passingScore}/${examData.questions.length}</strong></li>
                    <li>Cliquez sur <strong>"Envoyer l'Examen"</strong> à la fin pour correction.</li>
                </ul>
            </div>
            <form id="exam-form" data-course-id="${courseId}">
                ${examData.questions.map((q, index) => `
                            <div class="question-block" style="margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-card); border-radius: var(--radius-md); text-align: left; border: 1px solid rgba(255,255,255,0.05);">
                                <p style="font-weight: bold; color: var(--accent-color); margin-bottom: 1rem;">Question ${index + 1} / ${examData.questions.length}</p>
                                <p style="font-size: 1.1em; margin-bottom: 1rem;"><strong>${q.question}</strong></p>
                                ${q.options.map((opt, i) => `
                                    <div style="margin-bottom: 0.75rem;">
                                        <label style="cursor: pointer; display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">
                                            <input type="radio" name="q${q.id}" value="${i}" required style="width: 18px; height: 18px;">
                                            <span>${opt}</span>
                                        </label>
                                    </div>
                                `).join('')}
                            </div>
                        `).join('')}
                <div style="position: sticky; bottom: 0; background: var(--bg-main); padding: 1.5rem 0; border-top: 2px solid var(--accent-color); margin-top: 2rem; z-index: 10;">
                    <button type="submit" class="btn btn-primary" style="width: 100%; font-size: 1.2em; padding: 1rem; background: linear-gradient(135deg, var(--accent-color) 0%, #4361ee 100%); font-weight: bold;">
                        🚀 Envoyer l'Examen au Directeur
                    </button>
                </div>
            </form>
        </div>
            </div>
    `;
    }
};

// --- APP LOGIC ---
const app = document.getElementById('app');
const authButtons = document.getElementById('auth-buttons');

function init() {
    window.addEventListener('hashchange', router);
    window.addEventListener('auth-change', updateAuthUI);
    updateAuthUI();
    router();
}

async function router() {
    const hash = window.location.hash.slice(1) || 'home';
    let content = '';

    if (hash.startsWith('course/')) {
        const parts = hash.split('/');
        const courseId = parts[1];
        const lessonId = parts[2] === 'lesson' ? parts[3] : null;
        content = await Pages.lesson(courseId, lessonId);
    } else if (hash.startsWith('exam/')) {
        const parts = hash.split('/');
        const courseId = parts[1];
        content = await Pages.exam(courseId);
    } else if (Pages[hash]) {
        const renderer = Pages[hash];
        content = typeof renderer === 'function' ? await renderer() : renderer;
    } else {
        content = Pages.home();
    }

    app.innerHTML = content;
    attachListeners(hash);
}

function attachListeners(hash) {
    if (hash === 'login') {
        const form = document.getElementById('login-form');
        if (form) form.addEventListener('submit', (e) => {
            e.preventDefault();
            const result = authService.login(document.getElementById('email').value, document.getElementById('password').value);
            if (result.success) window.location.hash = 'dashboard';
            else document.getElementById('login-error').innerText = result.message;
        });
    }
    if (hash === 'register') {
        const form = document.getElementById('register-form');
        if (form) form.addEventListener('submit', (e) => {
            e.preventDefault();
            const result = authService.register(
                document.getElementById('username').value,
                document.getElementById('email').value,
                document.getElementById('password').value,
                document.getElementById('role').value
            );
            if (result.success) window.location.hash = 'dashboard';
            else document.getElementById('register-error').innerText = result.message;
        });
    }
    if (hash.startsWith('exam/')) {
        const form = document.getElementById('exam-form');
        if (form) form.addEventListener('submit', (e) => {
            e.preventDefault();
            const courseId = form.getAttribute('data-course-id');
            const user = authService.getUser();
            const answers = {};

            MODULES_EXAMS[courseId].questions.forEach(q => {
                const selected = document.querySelector(`input[name = "q${q.id}"]: checked`);
                answers[q.id] = selected ? selected.value : null;
            });

            const result = examService.submitExam(user.id, courseId, answers);
            if (result.success) {
                alert(`Examen envoyé! Votre score préliminaire est de ${result.score}/${result.total}. Le directeur va maintenant valider votre examen.`);
                window.location.hash = 'dashboard';
            }
        });
    }
    if (hash === 'exercises') {
        const runBtn = document.getElementById('run-btn');
        if (runBtn) runBtn.addEventListener('click', () => {
            const html = document.getElementById('html-code').value;
            const css = document.getElementById('css-code').value;
            const frame = document.getElementById('preview-frame');
            if (frame) {
                const doc = frame.contentDocument || frame.contentWindow.document;
                doc.open();
                doc.write(`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`);
                doc.close();
            }
        });
    }
    if (hash === 'dashboard') {
        const user = authService.getUser();
        if (user && user.role === 'admin') {
            document.querySelectorAll('.delete-user-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
                        const id = e.target.getAttribute('data-id');
                        authService.deleteUser(id);
                        router();
                    }
                });
            });
            document.querySelectorAll('.contact-user-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const name = e.target.getAttribute('data-name');
                    const subject = prompt(`Sujet du message pour ${name}:`);
                    if (subject) {
                        const body = prompt(`Votre message pour ${name}:`);
                        if (body) {
                            messageService.send('Direction', id, subject, body);
                            alert('Message envoyé !');
                        }
                    }
                });
            });
            document.querySelectorAll('.mark-attendance-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const status = e.target.getAttribute('data-status');
                    authService.updateAttendance(id, status);
                    router();
                });
            });
            document.querySelectorAll('.validate-exam-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const userId = e.target.getAttribute('data-user-id');
                    const courseId = e.target.getAttribute('data-course-id');
                    examService.validateExam(userId, courseId);
                    alert('Examen validé avec succès !');
                    router();
                });
            });
            document.querySelectorAll('.certify-user-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.target.getAttribute('data-id');
                    const name = e.target.getAttribute('data-name');
                    if (confirm(`Voulez-vous officiellement certifier l'étudiant ${name} ?`)) {
                        authService.certifyUser(id);
                        alert(`Certificat délivré à ${name} !`);
                        router();
                    }
                });
            });
            document.querySelectorAll('.view-exam-report-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const userId = e.target.getAttribute('data-user-id');
                    const courseId = e.target.getAttribute('data-course-id');
                    openExamReport(userId, courseId);
                });
            });
            document.querySelectorAll('.download-cert-btn-admin').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const username = e.target.getAttribute('data-username');
                    openCertificate(username);
                });
            });
            document.querySelectorAll('.download-exam-paper-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const courseId = e.target.getAttribute('data-course-id');
                    openExamPaper(courseId);
                });
            });
        }
        if (user && user.certified) {
            const dlBtn = document.getElementById('download-cert-btn');
            if (dlBtn) dlBtn.addEventListener('click', () => openCertificate(user.username));
        }
    }
}

function openExamPaper(courseId) {
    const examData = MODULES_EXAMS[courseId];
    if (!examData) return;

    const paperWindow = window.open('', '_blank');
    paperWindow.document.write(`
        <html>
        <head>
            <title>Sujet d'Examen - ${examData.title}</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
                .paper-header { border-bottom: 3px solid #333; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end; }
                .paper-header h1 { margin: 0; font-size: 24px; text-transform: uppercase; }
                .student-info { margin-bottom: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .student-info div { border-bottom: 1px solid #333; padding: 10px 0; }
                .instructions { background: #eee; padding: 15px; border-radius: 5px; margin-bottom: 30px; font-size: 0.9em; border: 1px solid #ccc; }
                .question-box { margin-bottom: 25px; page-break-inside: avoid; }
                .question-title { font-weight: bold; margin-bottom: 10px; }
                .option { margin-left: 20px; display: flex; align-items: center; gap: 10px; margin-bottom: 5px; }
                .checkbox { width: 15px; height: 15px; border: 1px solid #333; display: inline-block; }
                .footer { margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px; display: flex; justify-content: space-between; font-size: 0.8em; color: #666; }
                @media print { .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="paper-header">
                <div>
                    <h1>EXAMEN : ${examData.title.toUpperCase()}</h1>
                    <p>Web Academy - Session 2026</p>
                </div>
                <div style="font-weight: bold; font-size: 1.2em;">Note : ........ / ${examData.questions.length}</div>
            </div>

            <div class="student-info">
                <div>NOM & PRÉNOM : ................................................................</div>
                <div>DATE : .................................................................................</div>
            </div>

            <div class="instructions">
                <strong>Consignes :</strong> Répondez aux questions suivantes en cochant la case correspondant à la bonne réponse. Une seule réponse est possible par question.
            </div>

            ${examData.questions.map((q, idx) => `
                <div class="question-box">
                    <div class="question-title">Question ${idx + 1} : ${q.question}</div>
                    ${q.options.map(opt => `
                        <div class="option">
                            <span class="checkbox"></span>
                            <span>${opt}</span>
                        </div>
                    `).join('')}
                </div>
            `).join('')}

            <div class="footer">
                <span>Plateforme Web Academy</span>
                <span>Page 1 / 1</span>
                <span>Directeur Pédagogique</span>
            </div>

            <div style="margin-top: 50px; text-align: center;" class="no-print">
                <button onclick="window.print()" style="padding: 10px 20px; background: #333; color: white; border: none; border-radius: 5px; cursor: pointer;">Imprimer le sujet (PDF)</button>
            </div>
        </body>
        </html>
    `);
    paperWindow.document.close();
}

function openExamReport(userId, courseId) {
    const users = authService.getUsers();
    const user = users.find(u => u.id === userId);
    const submission = user?.examSubmissions?.[courseId];
    const examData = MODULES_EXAMS[courseId];

    if (!submission || !examData) return;

    const reportWindow = window.open('', '_blank');
    reportWindow.document.write(`
        <html>
        <head>
            <title>Rapport d'Examen - ${user.username}</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; line-height: 1.6; }
                .report-header { border-bottom: 2px solid #2ec4b6; padding-bottom: 20px; margin-bottom: 30px; }
                .report-header h1 { color: #2ec4b6; margin: 0; }
                .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
                .info-item { background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #eee; }
                .info-label { font-size: 0.85em; color: #666; text-transform: uppercase; letter-spacing: 1px; }
                .info-value { font-size: 1.1em; font-weight: bold; }
                .question-box { margin-bottom: 20px; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
                .correct { border-left: 5px solid #2ec4b6; background: #f0fffd; }
                .incorrect { border-left: 5px solid #e71d36; background: #fff5f6; }
                .question-text { font-weight: bold; margin-bottom: 10px; }
                .answer-line { margin: 5px 0; }
                .score-total { font-size: 1.5em; font-weight: bold; color: #2ec4b6; text-align: right; border-top: 2px solid #eee; padding-top: 20px; }
                @media print { .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="report-header">
                <h1>Rapport d'Examen</h1>
                <p>Web Academy - Plateforme de Formation</p>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Étudiant</div>
                    <div class="info-value">${user.username}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Cours</div>
                    <div class="info-value">${examData.title}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Date de soumission</div>
                    <div class="info-value">${submission.date}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Statut</div>
                    <div class="info-value">${submission.status.toUpperCase()}</div>
                </div>
            </div>

            <h2>Détails des Réponses</h2>
            ${examData.questions.map((q, idx) => {
        const studentAnswerIdx = submission.answers[q.id];
        const isCorrect = studentAnswerIdx == q.correct;
        return `
                    <div class="question-box ${isCorrect ? 'correct' : 'incorrect'}">
                        <div class="question-text">${idx + 1}. ${q.question}</div>
                        <div class="answer-line"><strong>Réponse de l'étudiant :</strong> ${studentAnswerIdx !== null ? q.options[studentAnswerIdx] : '<em>Pas de réponse</em>'}</div>
                        <div class="answer-line"><strong>Réponse correcte :</strong> ${q.options[q.correct]}</div>
                    </div>
                `;
    }).join('')}

            <div class="score-total">
                Note Finale : ${submission.score} / ${submission.total} 
                (${Math.round((submission.score / submission.total) * 100)}%)
            </div>

            <div style="margin-top: 50px; text-align: center;" class="no-print">
                <button onclick="window.print()" style="padding: 10px 20px; background: #2ec4b6; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 1em;">Imprimer / Enregistrer en PDF</button>
            </div>
        </body>
        </html>
    `);
    reportWindow.document.close();
}

function openCertificate(username) {
    const certWindow = window.open('', '_blank');
    certWindow.document.write(`
        <html>
        <head>
            <title>Certificat - ${username}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; text-align: center; padding: 50px; background: #f0f0f0; }
                .cert-container { width: 800px; margin: 0 auto; padding: 50px; background: white; border: 10px solid #daa520; position: relative; }
                .header { color: #daa520; font-size: 50px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 5px; }
                .subheader { font-size: 20px; color: #555; margin-bottom: 50px; }
                .name { font-size: 40px; font-weight: bold; margin: 20px 0; border-bottom: 2px solid #ddd; display: inline-block; padding-bottom: 10px; }
                .body-text { font-size: 18px; line-height: 1.6; color: #333; margin-bottom: 60px; }
                .footer { display: flex; justify-content: space-between; margin-top: 50px; padding-top: 20px; border-top: 1px solid #eee; }
                .sig { text-align: center; }
                .sig-line { width: 200px; border-top: 1px solid #333; margin-bottom: 10px; }
                @media print {
                    body { background: white; padding: 0; }
                    .cert-container { border: 5px solid #daa520; width: 100%; box-sizing: border-box; }
                }
            </style>
        </head>
        <body>
            <div class="cert-container">
                <div class="header">Certificat</div>
                <div class="subheader">D'ACCOMPLISSEMENT</div>
                
                <p class="body-text">Ce document atteste que</p>
                <div class="name">${username}</div>
                <p class="body-text">a complété avec succès le cursus intensif<br><strong>Développement Web Frontend (HTML, CSS, Bootstrap)</strong><br>sur la plateforme Web Academy.</p>
                
                <div class="footer">
                    <div class="sig">
                        <div class="sig-line"></div>
                        <strong>Directeur Pédagogique</strong>
                    </div>
                    <div class="sig">
                        <div class="sig-line"></div>
                        <strong>Date: ${new Date().toLocaleDateString()}</strong>
                    </div>
                </div>
            </div>
            <script>window.print();</script>
        </body>
        </html>
    `);
    certWindow.document.close();
}

function updateAuthUI() {
    const user = authService.getUser();
    const authButtons = document.getElementById('auth-buttons');
    if (!authButtons) return;
    if (user) {
        authButtons.innerHTML = `<a href="#dashboard" class="btn btn-outline">Mon Espace</a><button id="logout-btn" class="btn btn-primary">Déconnexion</button>`;
        document.getElementById('logout-btn').addEventListener('click', () => { authService.logout(); window.location.hash = 'home'; });
    } else {
        authButtons.innerHTML = `<a href="#login" class="btn btn-outline">Connexion</a><a href="#register" class="btn btn-primary">S'inscrire</a>`;
    }
}

init();

