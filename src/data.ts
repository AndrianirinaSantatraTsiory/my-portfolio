export const profile = {
  firstName: "Santatra Tsiory",
  lastName: "ANDRIANIRINA",
  role: "Développeur fullstack - Data scientist",
  lead: "Je conçois des applications web complètes, de l’API Java Spring Boot à l’interface React, et j’y intègre l’IA pour automatiser et assister les utilisateurs. J'ai aussi une compétence en data science pour analyser les données et aider à décider.",
  email: "andrianirinasantatratsiory@gmail.com",
  phone: "+261 34 96 309 68",
  city: "Antananarivo, Madagascar",
  github: "https://github.com/AndrianirinaSantatraTsiory",
  kaggle: "https://www.kaggle.com/santatraandrianirina",
  cv: "https://drive.google.com/file/d/1UlNouCV_CBmiK1YuE3aqKhEkRinnxmLa/view?usp=drive_link",
  codingame: "https://www.codingame.com/certification/Nr9MvkTo_mkkdcZiS0Ip3Q",
  about:
    "Développeur fullstack diplômé d'un Master professionnel en Génie Logiciel et Base de Données, je construis des applications de bout en bout : API Java et Spring Boot côté serveur, interfaces React et TypeScript côté client, bases PostgreSQL ou MySQL. J'ajoute à ce socle une compétence en data science (Python, analyse, automatisation, Power BI) et en intégration d'IA dans les applications (Spring AI, RAG, OCR). Je m'entraîne aussi à l'algorithmique sur CodinGame et HackerRank.",
};

export const experiences = [
  { period: "Juil. 2026 – Sept. 2026", title: "Consultant développeur", org: "MCB",
    text: "Amélioration et optimisation de scripts Python qui génèrent automatiquement des rapports Excel, orchestrés avec Dollar Universe.",
    tags: ["Python", "Excel", "Dollar Universe"] },
  { period: "Juin 2025 – Nov. 2025", title: "Développeur fullstack", org: "ARATO",
    text: "Conception et développement d'une plateforme web d'assistance comptable, du frontend React (TypeScript) au backend Spring Boot et PostgreSQL, avec intégration d'un assistant IA (Spring AI, RAG, OCR).",
    tags: ["React", "TypeScript", "Spring Boot", "Spring AI", "PostgreSQL", "RAG", "OCR"] },
  { period: "Sept. 2023 – Nov. 2023", title: "Stagiaire développeur Odoo", org: "Chocolaterie Robert",
    text: "Développement de modules Odoo sur mesure pour gérer les stocks de la chocolaterie.",
    tags: ["Odoo", "Python"] },
  { period: "Sept. 2022 – Nov. 2022", title: "Stagiaire développeur mobile", org: "DGI (Direction Générale des Impôts)",
    text: "Réalisation de l'application mobile « Anjarahetrako » avec Java et Android Studio.",
    tags: ["Java", "Android Studio"] },
];

export const skills = [
  { name: "Java", level: 85 },
  { name: "Spring Boot", level: 80 },
  { name: "Python", level: 70 },
  { name: "React", level: 55 },
  { name: "TypeScript", level: 55 },
];

export const stack = [
  { label: "Backend", items: ["Java", "Spring Boot", "Spring AI"] },
  { label: "Frontend", items: ["React", "TypeScript"] },
  { label: "Bases de données", items: ["PostgreSQL", "MySQL"] },
  { label: "Data science & IA", items: ["Python", "Anaconda", "Power BI", "Spring AI", "RAG", "OCR"] },
  { label: "Automatisation & BPMN", items: ["Camunda", "Odoo"] },
  { label: "Outils", items: ["IntelliJ IDEA", "VS Code", "Android Studio", "Git", "Docker"] },
];

export const education = [
  { year: "2026", title: "Formations Data Science", where: "Kaggle Learn", link: "https://www.kaggle.com/santatraandrianirina" },
  { year: "2025", title: "Master professionnel en Génie Logiciel et Base de Données", where: "École Nationale d'Informatique, Fianarantsoa" },
  { year: "2024", title: "Certificat « Résolution de problèmes avec Java »", where: "CodinGame", link: "https://www.codingame.com/certification/Nr9MvkTo_mkkdcZiS0Ip3Q" },
  { year: "2023", title: "Licence professionnelle en Génie Logiciel et Base de Données", where: "École Nationale d'Informatique, Fianarantsoa" },
  { year: "2019", title: "Baccalauréat série C, mention Bien", where: "Lycée Présentation de Marie, Manakara" },
];

export const languages = [
  { name: "Français", level: 4 },
  { name: "Anglais", level: 3 },
];

const dev = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const simple = "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons";

export const logos: Record<string, string> = {
  Java: `${dev}/java/java-original.svg`, "Spring Boot": `${dev}/spring/spring-original.svg`,
  Python: `${dev}/python/python-original.svg`, React: `${dev}/react/react-original.svg`,
  TypeScript: `${dev}/typescript/typescript-original.svg`, PostgreSQL: `${dev}/postgresql/postgresql-original.svg`,
  MySQL: `${dev}/mysql/mysql-original.svg`, Docker: `${dev}/docker/docker-original.svg`,
  Git: `${dev}/git/git-original.svg`, "IntelliJ IDEA": `${dev}/intellij/intellij-original.svg`,
  "VS Code": `${dev}/vscode/vscode-original.svg`, "Android Studio": `${dev}/androidstudio/androidstudio-original.svg`,
  Anaconda: `${dev}/anaconda/anaconda-original.svg`,
  Odoo: `${simple}/odoo.svg`,
  Camunda: `${simple}/camunda.svg`,
  "Power BI": `${simple}/powerbi.svg`,
  "Spring AI": `${dev}/spring/spring-original.svg`,
};

export const services = [
  { icon: "React", title: "Développement fullstack", text: "Applications web de bout en bout : API REST Java et Spring Boot, interfaces React et TypeScript, bases PostgreSQL ou MySQL." },
  { icon: "Python", title: "Data science et automatisation", text: "Analyse de données en Python, scripts et rapports Excel automatiques, tableaux de bord Power BI et workflows Camunda." },
  { icon: "Spring AI", title: "Intégration d'IA dans vos applications", text: "Assistants intelligents, RAG et OCR branchés sur vos données via Spring AI, intégrés directement dans votre application." },
];

/* Pour mettre de vraies captures : ajoutez les fichiers dans /public et listez-les dans "images" (1 à 3). */
export const projects = [
  { name: "Assistant comptable intelligent", org: "ARATO", year: "2025", variant: "chat", images: ["assistant_comptable_AI.png", "photo.png"],
    text: "Une plateforme fullstack qui assiste les équipes comptables grâce à l'IA : interface React, API Spring Boot, base PostgreSQL, avec RAG et OCR pour interroger et lire les documents.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "RAG", "OCR"], link: "" },
  { name: "Gestion de stocks Odoo", org: "Chocolaterie Robert", year: "2023", variant: "stock", images: ["odoo_dash.png", "odoo_product.png", "odoo_product_detail.png"],
    text: "Des modules Odoo sur mesure pour suivre les stocks de matières premières.",
    tags: ["Python", "Odoo"], link: "" },
  { name: "Rapports Excel automatisés", org: "MCB", year: "2026", variant: "report", images: [] as string[],
    text: "Des scripts Python optimisés qui produisent les rapports Excel sans intervention manuelle.",
    tags: ["Python", "Excel"], link: "" },
  { name: "Anjarahetrako", org: "DGI", year: "2022", variant: "phone", images: [] as string[],
    text: "Une application mobile Android développée pour la Direction Générale des Impôts.",
    tags: ["Java", "Android Studio"], link: "" },
];