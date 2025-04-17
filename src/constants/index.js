import { headstarter,acm } from "../assets/images";
import {
    
    contact,
    css,
    risc,
    
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mysql,
    photoshop,
    nextjs,
    nodejs,
    figma,
    cpp,
    java,
    libgdx,
    fusion360,
    react,
    redux,
    illustrator,
    sigchi,
    pantry,
    netflix,
    translator,
    angrybirds,
    python,
    c,
    
    
    tailwindcss,
   
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: libgdx,
        name: "libGDX",
        type: "Game Development",
    },
    {
        imageUrl: fusion360,
        name: "Autodesk Fusion 360",
        type: "Design",
    },
    {
        imageUrl: illustrator,
        name: "Adobe Illustrator",
        type: "Design",
    },
    {
        imageUrl: photoshop,
        name: "Adobe Photoshop",
        type: "Design",
    }
];


export const experiences = [
    {
        title: "Software Engineering Fellowship",
        company_name: "Headstarter AI, Virtual",
        icon: headstarter,  // Make sure to import or define the icon
        iconBg: "#accbe1",
        date: "Jul 2024 - Aug 2024",
        points: [
            "Focused on enhancing problem-solving skills while building a personal portfolio and a fully functional inventory management system.",
            "Integrated APIs and leveraged Firebase for real-time database management and authentication.",
            "Technologies used: HTML, React, JavaScript, CSS, Firebase, NodeJS, GitHub, Next.js.",
            "Gained mentorship from industry experts and hands-on experience in building scalable web applications.",
        ],
    },
    {
        title: "Webmaster",
        company_name: "ACM Student Chapter, IIIT Delhi",
        icon: acm,  // Replace with your actual ACM icon import
        iconBg: "#d0f4de",
        date: "2023 - Present",
        points: [
            "Maintained and updated the ACM IIITD website, ensuring optimal performance and user engagement.",
            "Collaborated with design and technical teams to implement UI/UX improvements using React.js, Tailwind CSS, and GSAP.",
            "Led the development of responsive and accessible web components for college events and activities.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sarabjeetsingh1708',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sarabjeet-singh-a352802b0/',
    }
];

export const projects = [
    {
        iconUrl: sigchi,  // Replace with your actual icon import
        theme: 'btn-back-blue',
        name: 'ACM SIGCHI IIITD Website',
        description: 'Developed a responsive and animated website for the ACM SIGCHI IIITD chapter using React.js, Tailwind CSS, Vite, and GSAP.',
        link: 'https://sigchi.iiitd.ac.in/',  // Replace with your actual link
    },
    {
        iconUrl: pantry,
        theme: 'btn-back-green',
        name: 'Pantry Tracker',
        description: 'A web app that tracks pantry inventory, monitors expiration dates, and sends restocking reminders using Next.js and Firebase.',
        link: 'https://github.com/sarabjeetsingh1708/pantrytracker',  // Replace with your actual link
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-red',
        name: 'Netflix Clone',
        description: 'Created a responsive Netflix clone with a clean UI, animations, and adaptive layouts using HTML5, CSS3, and JavaScript.',
        link: 'https://github.com/sarabjeetsingh1708/netflixproject',  // Replace with your actual link
    },
    
    {
        iconUrl: translator,
        theme: 'btn-back-yellow',
        name: 'Language Translator',
        description: 'A web-based application that enables quick and accurate text translations using a public translation API.',
        link: 'https://github.com/sarabjeetsingh1708/language-translator',  // Replace with your actual link
    },
    {
        iconUrl: angrybirds,
        theme: 'btn-back-purple',
        name: 'Angry Birds Clone',
        description: 'A physics-based 2D game built using Java and LibGDX, incorporating bird abilities, power-ups, and level progression.',
        link: 'https://github.com/sarabjeetsingh1708/game',  // Replace with your actual link
    },
    {
        iconUrl: risc,  // Replace with actual icon import
        theme: 'btn-back-gray',
        name: 'RISC32I Assembler - Simulator',
        description: 'Built a three-pass assembler and simulator for RISC-V 32I architecture in Python with real-time memory/register visualization.',
        link: 'https://github.com/COsimulator/COproject',
    },
    {
        iconUrl: figma,  // Replace with actual icon import
        theme: 'btn-back-pink',
        name: 'Donation App Interface',
        description: 'Designed an app UI on Figma for donating food to people and animals in need, focusing on intuitive UX and emotional design.',
        link: 'https://www.figma.com/proto/kUFbxIketxPcwjeYNzVo6s/Hi-Fi?type=design&node-id=2-437&t=Qt0JfTosaGi98hnW-1&scaling=min-zoom&page-id=0%3A1',  // Replace with actual Figma link if shareable
    }
];