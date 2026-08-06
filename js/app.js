/* ═══════════════════════════════════════════════════════════════
   APP.JS — Portfolio Ferhat Mohamed Yassine
   ---------------------------------------------------------------
   SOMMAIRE :
     1. Dictionnaire de traductions FR / EN
     2. Fonction de changement de langue
     3. Menu hamburger (mobile)
     4. Barre de navigation au scroll + bouton retour en haut
     5. Animations d'apparition au scroll
   ═══════════════════════════════════════════════════════════════ */

/* ── 1. TRADUCTIONS ──
   Chaque clé correspond à un attribut data-i18n dans index.html.
   Pour modifier un texte : change-le ICI (dans les 2 langues)
   ET dans index.html (texte français par défaut). */
const i18n = {
  fr: {
    nav_home:"Accueil", nav_interests:"Intérêts", nav_skills:"Compétences", nav_projects:"Projets", nav_about:"À propos", nav_contact:"Contact",
    badge:"Étudiant à La Cité collégiale · Ottawa",
    hello:"Bonjour,", myname:"Je m'appelle",
    cta_projects:"Portfolio", cta_cv2:"CV 📄",
    int_t:"Intérêts",
    int_sub:"Je consacre beaucoup de temps à mes études et à l'informatique, mais je crois aussi à l'équilibre entre travail et vie personnelle. Voici ce qui me passionne.",
    int1_t:"Programmation",
    int1_p:"Depuis mes premières lignes de code à l'université, la programmation est devenue bien plus qu'un métier : c'est un plaisir quotidien. Résoudre un problème difficile après des heures d'essais reste l'une de mes plus grandes satisfactions.",
    int2_t:"Football",
    int2_p:"Je joue au football depuis mon plus jeune âge. C'est pour moi la meilleure façon de rester actif tout en cultivant l'esprit d'équipe et les amitiés. Quand je ne joue pas, je suis les grands matchs à la télévision.",
    int3_t:"Découvertes",
    int3_p:"Quitter l'Algérie pour m'installer au Canada a été une grande aventure. J'aime découvrir de nouvelles cultures, de nouveaux endroits et rencontrer des gens de tous horizons — Ottawa est parfaite pour ça.",
    int4_t:"Image & Photo",
    int4_p:"Ma passion pour le traitement d'image dépasse le cadre académique : je m'intéresse à la photographie numérique, à la vision par ordinateur et à la manière dont les algorithmes « voient » le monde.",
    skills_t1:"Mes", skills_t2:"Compétences",
    skills_sub:"Un profil en construction, aligné sur ma formation : développement logiciel, bases de données et technologies web.",
    sk1_t:"Moderne",
    sk1_p:"C++17/20, RAII, smart pointers, STL, CMake et programmation orientée objet.",
    sk2_p:"Scripting, résolution de problèmes et développement d'outils.",
    sk3_p:"Interfaces graphiques avec Qt Creator et Qt Designer.",
    sk4_t:"Traitement d'Image",
    sk4_p:"PSNR, critères de Linfoot, saillance visuelle Itti-Koch, filtres de Gabor.",
    sk5_t:"Bases de Données",
    sk5_p:"MySQL, modélisation relationnelle et requêtes SQL — formation en cours.",
    sk6_t:"Outils",
    sk6_p:"Git, GitHub, Linux, GCC/Clang, CMake, VS Code.",
    proj_t1:"Projets", proj_t2:"Récents",
    proj_sub:"Des projets concrets alliant théorie et pratique.",
    p1_tag:"Projet de Recherche · Traitement d'Image",
    p1_t:"Modélisation du Bruit Perceptible",
    p1_p:"Implémentation de deux approches pour mesurer le bruit dans les images numériques : métriques mathématiques (PSNR, MSE, critères de Linfoot) et modèle perceptuel du Système Visuel Humain (carte de saillance d'Itti-Koch, pyramides gaussiennes, filtres de Gabor, 42 cartes de propriétés). Projet complet avec documentation détaillée.",
    p_link:"Voir le projet",
    p3_tag:"Développement Logiciel",
    p3_t:"Application Qt C++",
    p3_st:"Interface Graphique de Traitement d'Image",
    p3_p:"Interface graphique développée avec Qt permettant de charger des images PPM/PNM, d'appliquer les algorithmes PSNR et de saillance, et de visualiser les résultats en temps réel.",
    about_t1:"À propos", about_t2:"de moi",
    about_st:"Étudiant en Informatique @ La Cité collégiale",
    about_p1:"Je suis étudiant en informatique à La Cité collégiale, à Ottawa. Après une formation universitaire en informatique en Algérie, j'ai choisi de poursuivre mon parcours au Canada pour me rapprocher de l'un des écosystèmes technologiques les plus dynamiques du pays.",
    about_p2:"C'est en travaillant sur mes premiers projets de traitement d'image que j'ai découvert ma passion pour le développement logiciel. Depuis, je n'ai jamais cessé d'apprendre : C++, Python, bases de données, web — chaque cours et chaque projet est une occasion de progresser.",
    edu1:"Études collégiales en cours · Informatique",
    edu2_t:"Université Abbes Laghrour Khenchela",
    edu2:"Formation universitaire en informatique · Algérie",
    cta_github:"Mon GitHub", cta_cv:"Télécharger mon CV",
    contact_t1:"Me", contact_t2:"Contacter",
    contact_sub:"N'hésitez pas à me joindre pour toute opportunité ou collaboration.",
    c_phone:"Téléphone", c_addr:"Adresse",
    footer_sub:"Étudiant en informatique à La Cité collégiale, Ottawa",
    footer_c:"© 2026 Ferhat Mohamed Yassine. Tous droits réservés."
  },
  en: {
    nav_home:"Home", nav_interests:"Interests", nav_skills:"Skills", nav_projects:"Projects", nav_about:"About", nav_contact:"Contact",
    badge:"Student at La Cité collégiale · Ottawa",
    hello:"Hello,", myname:"My name is",
    cta_projects:"Portfolio", cta_cv2:"Resume 📄",
    int_t:"Interests",
    int_sub:"While I dedicate a lot of my time to my studies and computer science, I believe in a healthy work-life balance. Here is what I'm passionate about.",
    int1_t:"Programming",
    int1_p:"Ever since my first lines of code at university, programming has become much more than a career path: it's a daily pleasure. Solving a hard problem after hours of trying remains one of my greatest satisfactions.",
    int2_t:"Soccer",
    int2_p:"I've been playing soccer since a young age. It's the best way for me to stay active while nurturing teamwork and friendships. When I'm not playing, I follow the big games on TV.",
    int3_t:"Discovering",
    int3_p:"Leaving Algeria to settle in Canada was a great adventure. I love discovering new cultures, new places and meeting people from all walks of life — Ottawa is perfect for that.",
    int4_t:"Image & Photo",
    int4_p:"My passion for image processing goes beyond academics: I'm interested in digital photography, computer vision and how algorithms \"see\" the world.",
    skills_t1:"My", skills_t2:"Skills",
    skills_sub:"A growing profile aligned with my studies: software development, databases and web technologies.",
    sk1_t:"Modern",
    sk1_p:"C++17/20, RAII, smart pointers, STL, CMake and object-oriented programming.",
    sk2_p:"Scripting, problem solving and tool development.",
    sk3_p:"Graphical interfaces with Qt Creator and Qt Designer.",
    sk4_t:"Image Processing",
    sk4_p:"PSNR, Linfoot criteria, Itti-Koch visual saliency, Gabor filters.",
    sk5_t:"Databases",
    sk5_p:"MySQL, relational modeling and SQL queries — currently studying.",
    sk6_t:"Tools",
    sk6_p:"Git, GitHub, Linux, GCC/Clang, CMake, VS Code.",
    proj_t1:"Recent", proj_t2:"Projects",
    proj_sub:"Concrete projects combining theory and practice.",
    p1_tag:"Research Project · Image Processing",
    p1_t:"Perceptual Noise Modeling",
    p1_p:"Implementation of two approaches to measure noise in digital images: mathematical metrics (PSNR, MSE, Linfoot criteria) and a perceptual model of the Human Visual System (Itti-Koch saliency map, Gaussian pyramids, Gabor filters, 42 feature maps). Complete project with detailed documentation.",
    p_link:"View project",
    p3_tag:"Software Development",
    p3_t:"Qt C++ Application",
    p3_st:"Image Processing GUI",
    p3_p:"Graphical interface built with Qt to load PPM/PNM images, apply PSNR and saliency algorithms, and view results in real time.",
    about_t1:"About", about_t2:"me",
    about_st:"Computer Science Student @ La Cité collégiale",
    about_p1:"I am a computer science student at La Cité collégiale in Ottawa. After university studies in computer science in Algeria, I chose to continue my journey in Canada, close to one of the country's most dynamic tech ecosystems.",
    about_p2:"Working on my first image processing projects is where I discovered my passion for software development. Since then I've never stopped learning: C++, Python, databases, web — every course and project is a chance to grow.",
    edu1:"Current college studies · Computer Science",
    edu2_t:"Abbes Laghrour University of Khenchela",
    edu2:"University studies in Computer Science · Algeria",
    cta_github:"My GitHub", cta_cv:"Download my Resume",
    contact_t1:"Contact", contact_t2:"Me",
    contact_sub:"Feel free to reach out for any opportunity or collaboration.",
    c_phone:"Phone", c_addr:"Address",
    footer_sub:"Computer Science student at La Cité collégiale, Ottawa",
    footer_c:"© 2026 Ferhat Mohamed Yassine. All rights reserved."
  }
};

/* ── 2. CHANGEMENT DE LANGUE ──
   Parcourt tous les éléments ayant un attribut data-i18n et remplace
   leur texte par la traduction. Le choix est sauvegardé (localStorage). */
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  // Met en surbrillance le bouton actif (FR ou EN)
  document.getElementById('btnFr').classList.toggle('active', lang === 'fr');
  document.getElementById('btnEn').classList.toggle('active', lang === 'en');
  try { localStorage.setItem('lang', lang); } catch(e) {}
}
// Au chargement : restaurer la langue choisie précédemment
try { if (localStorage.getItem('lang') === 'en') setLang('en'); } catch(e) {}

/* ── 3. MENU HAMBURGER (mobile) ── */
const hamburger   = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_items  = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const headerEl    = document.getElementById('header');
const headerBg    = document.querySelector('.header.container');

// Ouvrir / fermer le menu au clic sur le hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
// Fermer le menu quand on clique sur un lien
menu_items.forEach(item => item.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobile_menu.classList.remove('active');
}));

/* ── 4. NAVIGATION AU SCROLL + BOUTON RETOUR EN HAUT ──
   En haut de page : barre transparente, texte blanc (sur la photo).
   Après 200px de scroll : barre blanche, texte foncé. */
const backTop = document.getElementById('backTop');
headerEl.classList.add('on-hero'); // état initial

document.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    headerBg.style.backgroundColor = 'rgba(255,255,255,0.97)';
    headerBg.style.boxShadow = '0 2px 14px rgba(15,23,42,0.08)';
    headerEl.classList.add('scrolled');
    headerEl.classList.remove('on-hero');
  } else {
    headerBg.style.backgroundColor = 'transparent';
    headerBg.style.boxShadow = 'none';
    headerEl.classList.remove('scrolled');
    headerEl.classList.add('on-hero');
  }
  // Afficher le bouton ↑ après 500px de défilement
  backTop.classList.toggle('show', window.scrollY > 500);
});

/* ── 5. ANIMATIONS D'APPARITION AU SCROLL ──
   IntersectionObserver détecte quand un élément .reveal entre dans
   l'écran et lui ajoute la classe .visible (transition CSS). */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); // animer une seule fois
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
