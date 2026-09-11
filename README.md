# Portfolio — Ferhat Mohamed Yassine

Site web portfolio personnel (HTML / CSS / JavaScript pur, sans framework).

## Structure des fichiers

```
Portfolio/
├── index.html                        ← Structure de la page (sections)
├── css/
│   └── style.css                     ← Tous les styles (couleurs en haut du fichier)
├── js/
│   └── app.js                        ← Menu, langue FR/EN, animations
├── img/
│   ├── hero-bg.jpg                   ← Image de fond de l'accueil
│   └── profile.jpg                   ← Photo de profil (section À propos)
├── CV_Ferhat_Mohamed_Yassine.pdf     ← CV téléchargeable
└── README.md                         ← Ce fichier
```

## Comment modifier

| Je veux changer...            | Fichier            | Où                                    |
|-------------------------------|--------------------|----------------------------------------|
| Les couleurs du site          | `css/style.css`    | Section « 1. VARIABLES DE COULEURS »   |
| L'image de fond de l'accueil  | `img/hero-bg.jpg`  | Remplacer le fichier (garder le nom)   |
| Ma photo                      | `img/profile.jpg`  | Remplacer le fichier (garder le nom)   |
| Un texte affiché              | `index.html`       | + la traduction dans `js/app.js` (i18n)|
| Ajouter un projet             | `index.html`       | Copier un bloc `project-item`          |
| Le CV                         | Remplacer le PDF   | Garder le même nom de fichier          |

## Tester en local

Double-cliquer sur `index.html` — le site s'ouvre dans le navigateur.

## Déploiement (GitHub Pages)

1. Créer un repo GitHub nommé `Portfolio`
2. Y pousser tout le contenu de ce dossier
3. Settings → Pages → Branch `main` → dossier `/ (root)` → Save
4. Le site sera en ligne sur : `https://yassine-website.github.io/Portfolio/`
