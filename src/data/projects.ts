import { Project } from "../types/project";

export const featuredProject: Project = {
  title: "PREDCRYPT — Sistem Prediksi Harga Cryptocurrency",
  description:
    "Sistem prediksi harga cryptocurrency berbasis web yang menggunakan Regresi Linier untuk menganalisis data historis dan menghasilkan prediksi harga.",
  image: "/predcrypt-screenshot.png",
  technologies: [
    "Python",
    "Scikit-learn",
    "Laravel",
    "PHP",
    "MySQL",
    "CoinGecko API",
    "Chart.js",
    "Linear Regression",
  ],
  github: "https://github.com/Pekesxyz/PREDCRYPT",
  demo: "https://predcrypt.page.gd",
  features: [
    "Data pasar Cryptocurrency",
    "Analisis harga historis",
    "Prediksi harga",
    "Visualisasi data",
    "Evaluasi MAE",
    "Evaluasi RMSE",
  ],
  featured: true,
};

// Proyek-proyek lainnya
export const otherProjects: Project[] = [
  {
    title: "Skilora Academy",
    description: "Platform kursus online modern untuk belajar Web Development, UI/UX Design, Flutter Mobile, dan 3D Art berbasis proyek nyata industri.",
    image: "/ss-skilora-2.png",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Pekesxyz/skilora-academy",
    demo: "https://skilora-academy-two.vercel.app/",
  },
  {
    title: "Online Shop",
    description: "Aplikasi e-commerce berbasis PHP & MySQL dengan fitur autentikasi, keranjang belanja, manajemen produk, dan dashboard admin yang responsif.",
    image: "/ss-online-shop.png",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Pekesxyz/online-shop",
    demo: "http://online-shop.great-site.net",
  },
  {
    title: "InvenTrack",
    description: "Aplikasi manajemen inventori barang dan mutasi kartu stok sederhana dengan tampilan yang modern dan responsif.",
    image: "/ss-inventrack.png",
    technologies: ["Laravel", "Vue 3", "Inertia.js", "Tailwind CSS"],
    github: "https://github.com/Pekesxyz/InvenTrack",
    demo: "https://inventrack.ifree.page",
  },
  {
    title: "Indoor Plants",
    description: "Landing page tanaman hias indoor yang modern dan responsif dengan desain yang bersih dan animasi yang halus.",
    image: "/ss-indoor-plants.png",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Pekesxyz/indoor-plants",
    demo: "https://pekesxyz.github.io/indoor-plants/",
  },
  {
    title: "Cafein",
    description: "Landing page kedai kopi modern yang responsif dengan desain yang menarik dan elegan, dibangun dengan HTML, CSS, dan JavaScript.",
    image: "/ss-cafein.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Pekesxyz/cafein",
    demo: "https://pekesxyz.github.io/cafein/",
  },
  {
    title: "Nusacode Academy",
    description: "Website landing page modern Nusacode Academy — Platform edukasi pemrograman dan akselerasi karier tech.",
    image: "/ss-nusacode-2.png",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Pekesxyz/nusacode-academy",
    demo: "https://nusacode-academy.vercel.app",
  },
];
