export const enUS = {
    nav: {
        home: "Home",
        about: "About",
        academic: "Academic",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        cv: "Download CV"
    },
    home: {
        greeting: "< Raphaela Monteiro />",
        role: "Developer focused on building scalable and high-performance systems.",
        sub: "Architecture • Performance • Automation • AI • Infrastructure • Security • Data",
        tag: "Open to freelance projects and technical challenges that create real impact.",
        cta: "View Projects",
        contact: "Get in Touch",
    }, about: {
        title: "About Me",
        paragraphs: [
            "I am a Developer and Researcher focused on the intersection of Systems Architecture and Intelligent Computing. Currently, I work on High-Reliability projects involving Positioning Systems and Data Science.",

            "I view software as a mission-critical infrastructure where every decision impacts performance and integrity. My approach combines the agility of Full Stack development with the rigor of scientific investigation to solve complex problems.",

            "Whether architecting scalable applications or researching data integrity, my goal is to reduce complexity and ensure consistent results in environments where precision is non-negotiable.",

            "I am driven by technical excellence and a commitment to building solutions that bridge the gap between advanced research and practical, high-impact software engineering."
        ],
        skills: "Expertise",
        techstack: "Tech Stack",
        skillsMap: [
            {
                items: [
                    "System Architecture & Design Patterns",
                    "High-Reliability & Critical Software",
                    "AI Integration & Data Science",
                    "Clean Architecture & SOLID",
                    "Technical Documentation & Rigor"
                ]
            },
        ],
        extra: "Beyond technology, I enjoy…",
        hobbies: [
            {
                items: [
                    {
                        name: "Photography and attention to details",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Chess and other games",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Studying philosophy and history",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Exploring new places, cultures, and languages",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Studying philosophy and history",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Expressing myself through drawing and painting",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Gothic literature and science fiction",
                        image: "/images/hobbies/fotografia.jpg"
                    },
                    {
                        name: "Spending quality time with family and friends",
                        image: "/images/hobbies/fotografia.jpg"
                    },

                ]
            },
        ]
    },
    academic: {
        title: "Academic",
    },
    work: {
        title: "How I Can Help?",
        description: " Sou uma desenvolvedora fullstack apaixonada por dados, IA, segurança e infraestrutura. Adoro criar soluções elegantes e robustas, equilibrando profissionalismo com criatividade.",
    },
    projects: {
        title: "My Projects",
        viewProject: "View Project",
        viewCode: "View Code",
        items: [  // ← items diretamente dentro de projects
            {
                name: "AdraTrade",
                desc: "Uma plataforma de trading com análise de dados em tempo real", // Adicionei desc
                image: "/images/hobbies/fotografia.jpg",
                tags: ["React", "Node.js", "Trading API"], // Opcional
                github: "https://github.com/raphaela/adratrade", // Opcional
                live: "https://adratrade.com", // Opcional
                featured: true // Opcional
            },
            {
                name: "Chess and other games",
                desc: "Aplicativo de xadrez com multiplayer e IA",
                image: "/images/hobbies/fotografia.jpg",
                tags: ["Next.js", "Socket.io", "Chess.js"],
                github: "https://github.com/raphaela/chess-app",
                featured: false
            },
            {
                name: "Studying philosophy and history",
                desc: "Plataforma de estudos com resumos e flashcards",
                image: "/images/hobbies/fotografia.jpg",
                tags: ["React", "Firebase"],
                github: "https://github.com/raphaela/study-app"
            },
            {
                name: "Expressing myself through drawing and painting",
                desc: "Portfólio de arte digital e pinturas",
                image: "/images/hobbies/fotografia.jpg",
                tags: ["Next.js", "Framer Motion"],
                live: "https://art-portfolio.com",
                featured: true
            },
        ]
    },
    contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send"
    },
    footer: {
        rights: "© 2026 Raphaela Monteiro - All Rights Reserved"
    }
}