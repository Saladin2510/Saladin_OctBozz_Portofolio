import {
  youtube,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  aftereffects,
  photoshop,
  ilustrator,
  blender,
  threejs,
  word,
  ppt,
  excel,
  web1,
  web2,
  web3,
  web4,
  web5,
  web6,
  linkedIn,
  github,
  instagram,
  google,
  dokcil,
  pmr,
  mapsi,
  osn,
  spensaa,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "youtube",
    icon: youtube,
    link: "http://www.youtube.com/@Octiano_Ch4231"
  },
  {
    title: "LinkedIn",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/saladin-octiano-bonanza-b927bb346/",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/saladin_0ctiano_bonanza/",

  },
  {
    title: "Github",
    icon: github,
    link: "https://github.com/Saladin2510",
  },
  {
    title: "Sites",
    icon: google,
    link: "https://sites.google.com/view/saladin-octiano-bonanza",
  }
];

const technologies = [

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "after affects",
    icon: aftereffects,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "ilustrator",
    icon: ilustrator,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "word",
    icon: word,
  },
  {
    name: "ppt",
    icon: ppt,
  },
  {
    name: "excel",
    icon: excel,
  },
];

const experiences = [
  {
    title: "Dokcil | Puskesmas Ajibarang I",
    company_name: "SD Ajibarang Wetan",
    icon: dokcil,
    iconBg: "#383E56",
    date: "Oktober - November 2019",
    points: [
      "Mengikuti Kegiatan pembinaan Dokter Kecil untuk siswa SD dan MI wilayah Kerja Puskesmas Ajibarang I "
    ],
  },
  {
    title: "MAPSI TIKI SD | tingkat Kecamatan",
    company_name: "SD Ajibarang Wetan",
    icon: mapsi,
    iconBg: "#E6DEDD",
    date: "September 2019",
    points: [
      "Mengikuti perlombaan Mata Pelajaran Agama Islam dan Seni Islami Sekolah Dasar (MAPSI SD) XXII Cabang Teknologi Informasi dan Komunikasi Islami (TIKI) diselenggarakan pada tanggal 14 September 2019 di Kecamatan meraih Juara I dan di Kabupaten meraih Harapan 2.",
    ],
  },
  {
    title: "Jumbara PMR SD | PMI Kabupaten",
    company_name: "SD Ajibarang Wetan",
    icon: pmr,
    iconBg: "#383E56",
    date: "Desember 2019",
    points: [
      "Mengikuti perlombaan Jumpa Bakti Gembira (JUMBARA) PMR IV Palang Merah Indonesia Kabupaten Banyumas Cabang PMR Game diselenggarakan pada tanggal 21 Desember 2019 meraih Juara 3.",
    ],
  },
  {
    title: "OSN IPA SD | tingkat Kabupaten",
    company_name: "SD Ajibarang Wetan",
    icon: osn,
    iconBg: "#E6DEDD",
    date: "Januari 2020",
    points: [
      "Mengikuti perlombaan Olimpiade Sains Nasional (OSN) Ilmu Pengetahuan Alam (IPA) yang diselenggarakan pada tanggal 28 Januari 2020.",
    ],
  },
  {
    title: "Sekretaris OSIS | SMP N 1 Ajibarang",
    company_name: "SMP Negeri 1 Ajibarang",
    icon: spensaa,
    iconBg: "#383E56",
    date: "2021 - 2023",
    points: [
      "Bergabung menjadi anggota OSIS pengurus harian dengan jabatan sekretaris selama 2 periode.",
    ],
  },
];


const projects = [
  {
    name: "Vektor My Face",
    description:
      "Ini adalah vektor dari wajah saya, dibuat di Adobe Ilustrator.",
    tags: [
      {
        name: "Adobe Ilustrator",
        color: "brown-text-gradient",
      },
      {
        name: "Pinterest",
        color: "red-text-gradient",
      },
    ],
    image: web4,
    icon: ilustrator,
    source_code_link: "https://pin.it/4Vb9IQ2SD",
    source_web_link: "https://pin.it/4Vb9IQ2SD"
  },
  {
    name: "Log In Site",
    description:
      "Log in Page yang memakai local storage dari DOM (Document Object Model).",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: web2,
    icon: github,
    source_code_link: "https://github.com/Saladin2510/Login_Site",
    source_web_link: "https://saladin2510.github.io/Login_Site/",
  },
  {
    name: "Aku Jawa Kamu Jawa",
    description:
      "Sebuah projek sekolah website yang menyediakan game-game seru.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: web3,
    icon: github,
    source_code_link: "https://github.com/Saladin2510/Aku_Jawa-Kamu_Jawa",
    source_web_link: "https://saladin2510.github.io/Aku_Jawa-Kamu_Jawa/zildan/home.html",
  },
  {
    name: "ARTS Official",
    description:
      "Sebuah projek sekolah bersama kolaborator, website yang menjual makanan secara online.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: web5,
    icon: github,
    source_code_link: "https://github.com/ALFADHANI284/arts.com",
    source_web_link: "https://arts.akld.xyz/"
  },
  {
    name: "RasaKita",
    description:
      "Desain Figma penugasan sekolah, sebuah toko roti yang bernama RasaKita.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: web6,
    icon: figma,
    source_code_link: "https://www.figma.com/design/Q46m2tXuXUoIGFvVARNNQ7/RasaKita?node-id=0-1&p=f&t=nzeehv5tF40BGkG7-0",
    source_web_link: "https://www.figma.com/proto/Q46m2tXuXUoIGFvVARNNQ7/RasaKita?node-id=1-3&t=lEF14QzEyBIwSBdZ-0&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3"
  },
  {
    name: "kuru-ring",
    description:
      "Website pertama yang saya buat!, ini mengenai kuru-kuru kuru-ring yang legendaris.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
    ],
    image: web1,
    icon: github,
    source_code_link: "https://github.com/Saladin2510/kuru-kuru-ring",
    source_web_link: "https://saladin2510.github.io/kuru-kuru-ring/indeks.html"
  },

];

export { services, experiences, technologies, projects };
