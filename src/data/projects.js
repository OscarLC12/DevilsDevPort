import cms1 from "../assets/projects/case-management/1.png";
import cms2 from "../assets/projects/case-management/2.png";
import cms3 from "../assets/projects/case-management/3.png";
import cms4 from "../assets/projects/case-management/4.png";
import cms5 from "../assets/projects/case-management/5.png";
import cms6 from "../assets/projects/case-management/6.png";
import cms7 from "../assets/projects/case-management/7.png";
import cms8 from "../assets/projects/case-management/8.png";

import m1 from "../assets/projects/mobile/mobile1.jpeg";
import m2 from "../assets/projects/mobile/mobile2.jpeg";
import m3 from "../assets/projects/mobile/mobile3.jpeg";
import m4 from "../assets/projects/mobile/mobile4.jpeg";
import m5 from "../assets/projects/mobile/mobile5.jpeg";

import p1 from "../assets/projects/pdf/pdf1.png";

import d1 from "../assets/projects/dreamers/dreamers1.png";
import d2 from "../assets/projects/dreamers/dreamers2.png";
import d3 from "../assets/projects/dreamers/dreamers3.png";
import d4 from "../assets/projects/dreamers/dreamers4.png";
import d5 from "../assets/projects/dreamers/dreamers5.png";
// Si después agregas más imágenes por proyecto, impórtalas aquí igual.

export const projects = [
  {
    id: "case-management",
    title: "Case Management System",
    subtitle: "React + .NET · Admin dashboard",
    desc: "Enterprise-style case tracking, client records, reminders, billing and documents.",
    tags: ["React", ".NET", "SQL Server", "JWT"],
    cover: cms1,               // ✅ preview en la tarjeta
    gallery: [cms1, cms2, cms3, cms4, cms5, cms6, cms7, cms8],     // ✅ imágenes para el popup
  },
  {
    id: "mobile-client-app",
    title: "Mobile Client App",
    subtitle: "Flutter · Android/iOS",
    desc: "Mobile experience with secure auth, case status, document upload and notifications.",
    tags: ["Flutter", "iOS", "Android", "API"],
    cover: m1,
    gallery: [m1, m2, m3, m4, m5],
  },
  {
    id: "pdf-automation",
    title: "PDF Forms Automation",
    subtitle: "PDF.js Express · Autofill",
    desc: "Autofill & save legal PDF forms from database data with precise field mapping.",
    tags: ["PDF.js", ".NET", "Data Mapping", "Storage"],
    cover: p1,
    gallery: [p1],
  },
  {
    id: "dreamers-landing",
    title: "Dreamers Landing",
    subtitle: "Web · React",
    desc: "A landing page for a community of dreamers, featuring user stories and resources.",
    tags: ["React", "Tailwind CSS", "API"],
    cover: d1,
    gallery: [d1, d2, d3, d4, d5],
  },
  {
    id: "devops",
    title: "Infrastructure & DevOps",
    subtitle: "Servers · SSL · Monitoring",
    desc: "Secure deployment, backups, monitoring, HTTPS/SSL, and scalable environments.",
    tags: ["IIS", "Linux", "SSL", "Monitoring"],
    cover: null,
    gallery: [],
  },
];

