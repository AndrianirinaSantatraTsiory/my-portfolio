export const profile = {
  firstName: "Santatra Tsiory",
  lastName: "ANDRIANIRINA",
  role: "Développeur backend & Data scientist",
  email: "andrianirinasantatratsiory@gmail.com",
  phone: "+261 34 96 309 68",
  city: "Antananarivo, Madagascar",
  github: "https://github.com/AndrianirinaSantatraTsiory",
  kaggle: "https://www.kaggle.com/santatraandrianirina",
  cv: "/CV_Santatra_Tsiory_Andrianirina.pdf",
  codingame: "https://www.codingame.com/certification/Nr9MvkTo_mkkdcZiS0Ip3Q",
  about:
    "Diplômé d'un Master professionnel en Génie Logiciel et Base de Données, je construis des applications solides autour de l'écosystème Java. Je résous des problèmes d'algorithmique sur CodinGame et HackerRank, et j'ajoute la data science à mon travail pour automatiser et analyser.",
};

export const experiences = [
  { period: "Juil. 2026 – Sept. 2026", title: "Consultant développeur", org: "MCB",
    text: "Amélioration et optimisation de scripts Python qui génèrent automatiquement des rapports Excel, orchestrés avec Dollar Universe.",
    tags: ["Python", "Excel", "Dollar Universe"] },
  { period: "Juin 2025 – Nov. 2025", title: "Développeur web", org: "ARATO",
    text: "Développement d'une plateforme intelligente d'assistance comptable avec React (TypeScript), Spring Boot, Spring AI et PostgreSQL.",
    tags: ["React", "TypeScript", "Spring Boot", "Spring AI", "PostgreSQL"] },
  { period: "Sept. 2023 – Nov. 2023", title: "Stagiaire développeur Odoo", org: "Chocolaterie Robert",
    text: "Développement de modules Odoo pour gérer les stocks de la chocolaterie.",
    tags: ["Odoo", "Python"] },
  { period: "Sept. 2022 – Nov. 2022", title: "Stagiaire développeur mobile", org: "DGI (Direction Générale des Impôts)",
    text: "Réalisation de l'application mobile « Anjarahetrako » avec Java et Android Studio.",
    tags: ["Java", "Android Studio"] },
];

export const skills = [
  { name: "Java", level: 90 },
  { name: "Spring Boot", level: 82 },
  { name: "Python", level: 70 },
  { name: "React", level: 55 },
  { name: "TypeScript", level: 55 },
];

export const stack = [
  { label: "Bases de données", items: ["MySQL", "PostgreSQL"] },
  { label: "Automatisation & BPMN", items: ["Camunda"] },
  { label: "Outils", items: ["IntelliJ IDEA", "VS Code", "Android Studio", "Git", "Docker", "Power BI", "Anaconda"] },
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
/* Logos : devicon (CDN). Si un logo est introuvable, une pastille avec les initiales s'affiche. */
export const logos: Record<string, string> = {
  Java: `${dev}/java/java-original.svg`, "Spring Boot": `${dev}/spring/spring-original.svg`,
  Python: `${dev}/python/python-original.svg`, React: `${dev}/react/react-original.svg`,
  TypeScript: `${dev}/typescript/typescript-original.svg`, PostgreSQL: `${dev}/postgresql/postgresql-original.svg`,
  MySQL: `${dev}/mysql/mysql-original.svg`, Docker: `${dev}/docker/docker-original.svg`,
  Git: `${dev}/git/git-original.svg`, "IntelliJ IDEA": `${dev}/intellij/intellij-original.svg`,
  "VS Code": `${dev}/vscode/vscode-original.svg`, "Android Studio": `${dev}/androidstudio/androidstudio-original.svg`,
  Anaconda: `${dev}/anaconda/anaconda-original.svg`, Odoo: "", Camunda: "", "Power BI": "", "Spring AI": `${dev}/spring/spring-original.svg`,
};

export const services = [
  { icon: "Java", title: "Développement backend", text: "API REST Java et Spring Boot, bases PostgreSQL ou MySQL, architecture propre et testable." },
  { icon: "Python", title: "Data et automatisation", text: "Scripts Python, rapports Excel automatiques, tableaux de bord Power BI et workflows Camunda." },
  { icon: "React", title: "Intégration web et IA", text: "Interfaces React et TypeScript branchées sur vos API, avec des fonctions d'IA via Spring AI." },
];

/* Pour mettre une vraie capture : ajoutez le fichier dans /public/projects et renseignez "image". */
export const projects = [
  { name: "Assistant comptable intelligent", org: "ARATO", year: "2025", variant: "chat", image: "",
    text: "Une plateforme web qui assiste les équipes comptables grâce à l'IA.",
    tags: ["React", "TypeScript", "Spring Boot", "PostgreSQL"], link: "" },
  { name: "Anjarahetrako", org: "DGI", year: "2022", variant: "phone", image: "",
    text: "Une application mobile Android développée pour la Direction Générale des Impôts.",
    tags: ["Java", "Android Studio"], link: "" },
  { name: "Rapports Excel automatisés", org: "MCB", year: "2026", variant: "report", image: "",
    text: "Des scripts Python optimisés qui produisent les rapports Excel sans intervention manuelle.",
    tags: ["Python"], link: "" },
  { name: "Gestion de stocks Odoo", org: "Chocolaterie Robert", year: "2023", variant: "stock", image: "",
    text: "Des modules Odoo sur mesure pour suivre les stocks de matières premières.",
    tags: ["Python"], link: "" },
];
