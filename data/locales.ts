// data/locales.ts

export type Dict = {
    nav: {
        home: string; about: string; services: string;
        projects: string; contact: string; cv: string;
    };
    home: {
        title: string; role: string; tag: string;
        cta: string; contact: string;
        status: string;
    };
    about: {
        log: string;
        title: string;
        paragraphs: string[];
        stats: { value: string; label: string }[];
        tech: string;
        skills: string;
        skillsMap: { title: string; description: string }[];
        research: string;
        researchMap: string[];
        extra: string;
        hobbies: { name: string; image: string }[];
        academiaTitle: string;
        academia: { title: string; course: string; institute: string; date: string }[];
    };
    projects: { title: string; viewProject: string; viewCode: string };
    work: { title: string; subtitle: string; services: { title: string; description: string }[] };
    contact: { title: string; name: string; email: string; message: string; send: string };
    footer: { rights: string };
};

const en: Dict = {
    nav: {
        home: "HOME", about: "ABOUT", services: "SERVICES",
        projects: "PROJECTS", contact: "CONTACT", cv: "Download CV",
    },
    home: {
        title: "I build software for complex problems.",
        role: "At the intersection of software engineering, intelligent systems, and aerospace computing, I explore how complex problems can be transformed into more reliable and efficient systems.",
        tag: "I build to understand. I investigate to build better.",
        cta: "Explore my work",
        contact: "Let's work together",
        status: "Software Developer"
    },
    about: {
        log: "SYS_USER // OVERVIEW",
        title: "WHO'S BEHIND THE CODE?",
        paragraphs: [
            "I'm a software developer fascinated by complex systems. I enjoy understanding how different areas of computing connect to build reliable, efficient, and well-designed software.",
            "My interests include software architecture, intelligent systems, artificial intelligence, and aerospace computing as an application domain. I'm also deepening my knowledge of embedded systems, low-level programming, and software for safety-critical applications.",
            "I believe the best solutions come from combining solid engineering, research, and continuous learning. That curiosity shapes the projects I build, the technologies I explore, and the way I approach every new challenge.",
        ],
        stats: [
            { value: "3+", label: "Years of Practice" },
            { value: "5+", label: "Key Projects" },
            { value: "15+", label: "Tech Stack" },
            { value: "B2", label: "Upper-Intermediate English" },
        ],
        tech: "TECH STACK",
        skills: "What I Value",
        skillsMap: [
            { title: "Critical Thinking", description: "I believe every good solution starts with a deep understanding of the problem." },
            { title: "Quality Engineering", description: "Clean code, sustainable architectures, and technical decisions that remain valuable over time." },
            { title: "Continuous Learning", description: "I'm constantly exploring new areas of computing to expand the way I think and build software." },
        ],
        research: "Research Interests",
        researchMap: [
            "Software Architecture", "Critical Systems", "Intelligent Systems",
            "Aerospace Computing", "Embedded Systems", "Artificial Intelligence",
        ],
        extra: "WHEN I'M NOT CODING:",
        hobbies: [
            { name: "Photography and noticing the details", image: "/hobbies/photo.png" },
            { name: "Story-driven games and immersive worlds", image: "/hobbies/game.png" },
            { name: "Exploring philosophy, history, and a little bit of everything", image: "/hobbies/learn.png" },
            { name: "Traveling and discovering new places", image: "/hobbies/travel.png" },
            { name: "Cooking and experimenting with new recipes", image: "/hobbies/cook.png" },
            { name: "Exploring and appreciating art", image: "/hobbies/art.png" },
            { name: "Connecting with the tech community and meeting new people", image: "/hobbies/events.png" },
            { name: "Sharing knowledge through talks and conversations", image: "/hobbies/teach.png" },
        ],
        academiaTitle: "Education",
        academia: [
            {
                title: "Graduation Degree", course: "Systems Analysis and Development",
                institute: "Fatec - Prof. Jessen Vidal", date: "01/2024 - 02/2026"
            },
            {
                title: "Technical Degree", course: "Systems Development",
                institute: "ETEC - Machado de Assis", date: "01/2022 - 01/2023"
            },
        ],
    },
    projects: {
        title: "My Projects",
        viewProject: "View Project",
        viewCode: "View Code",
    },
    work: {
        title: "Solutions & Services",
        subtitle: "How I can add value to your business or project?",
        services: [
            { title: "Web Applications", description: "Development of modern and responsive applications with a focus on performance, scalability, and user experience." },
            { title: "System Architecture", description: "Design and structuring of applications using best practices such as Clean Architecture and design patterns, ensuring maintainability." },
            { title: "APIs & Integrations", description: "Building and integrating APIs to connect systems, automate processes, and structure efficient data flows." },
            { title: "Automation & Data", description: "Solutions that leverage automation and data processing to optimize workflows and support decision-making." },
            { title: "Technical Consulting", description: "Analysis and guidance to improve the structure, performance, and organization of existing projects." },
        ],
    },
    contact: {
        title: "Get in Touch",
        name: "Name", email: "Email", message: "Message", send: "Send",
    },
    footer: {
        rights: "© 2026 Raphaela Monteiro - All rights reserved.",
    },
};

const pt: Dict = {
    nav: {
        home: "INÍCIO", about: "SOBRE", services: "SERVIÇOS",
        projects: "PROJETOS", contact: "CONTATO", cv: "Baixar Currículo",
    },
    home: {
        title: "Construo software para problemas complexos.",
        role: "Entre engenharia de software, sistemas inteligentes e computação aeroespacial, exploro como transformar problemas complexos em sistemas mais confiáveis e eficientes.",
        tag: "Construo para entender. Investigo para construir melhor.",
        cta: "Explorar meu trabalho",
        contact: "Trabalhe comigo",
        status: "Desenvolvedora de Software",
    },
    about: {
        log: "SYS_USER // VISAO_GERAL",
        title: "QUEM ESTÁ POR TRÁS DO CÓDIGO?",
        paragraphs: [
            "Sou desenvolvedora de software e tenho curiosidade por sistemas complexos. Gosto de entender como diferentes áreas da computação se conectam para construir software confiável, eficiente e bem estruturado.",
            "Meus interesses passam por arquitetura de software, sistemas inteligentes e inteligência artificial, além da computação aeroespacial como área de aplicação. Também venho aprofundando meus estudos em sistemas embarcados, programação de baixo nível e software para aplicações críticas.",
            "Acredito que boas soluções nascem da combinação entre engenharia sólida, pesquisa e aprendizado contínuo. É essa curiosidade que guia meus projetos, estudos e a forma como encaro novos desafios.",
        ],
        stats: [
            { value: "3+", label: "Anos de Prática" },
            { value: "5+", label: "Projetos" },
            { value: "15+", label: "Tecnologias" },
            { value: "B2", label: "Inglês Intermediário-Avançado" },
        ],
        tech: "TECNOLOGIAS",
        skills: "O que eu valorizo",
        skillsMap: [
            { title: "Pensamento Crítico", description: "Entender profundamente um problema antes de buscar uma solução." },
            { title: "Engenharia de Qualidade", description: "Código legível, arquiteturas sustentáveis e decisões que continuam fazendo sentido no futuro." },
            { title: "Evolução Contínua", description: "Estou sempre estudando novas áreas da computação para ampliar minha forma de pensar e construir software." },
        ],
        research: "Interesses de Pesquisa",
        researchMap: [
            "Arquitetura de Software", "Sistemas Críticos", "Sistemas Inteligentes",
            "Computação Aeroespacial", "Sistemas Embarcados", "Inteligência Artificial",
        ],
        extra: "QUANDO NÃO ESTOU PROGRAMANDO:",
        hobbies: [
            { name: "Fotografia e atenção aos detalhes", image: "/hobbies/photo.png" },
            { name: "Jogos focados em histórias e mundos imersivos", image: "/hobbies/game.png" },
            { name: "Explorar filosofia, história e um pouco de tudo", image: "/hobbies/learn.png" },
            { name: "Viajar e descobrir novos lugares", image: "/hobbies/travel.png" },
            { name: "Cozinhar e experimentar novas receitas", image: "/hobbies/cook.png" },
            { name: "Explorar e apreciar diferentes formas de arte", image: "/hobbies/art.png" },
            { name: "Participar da comunidade tech e conhecer novas pessoas", image: "/hobbies/events.png" },
            { name: "Compartilhar conhecimento em palestras e conversas", image: "/hobbies/teach.png" },
        ],
        academiaTitle: "Formação Acadêmica",
        academia: [
            {
                title: "Graduação", course: "Análise e Desenvolvimento de Sistemas",
                institute: "Fatec - Prof. Jessen Vidal", date: "01/2024 - 02/2026"
            },
            {
                title: "Curso Técnico", course: "Desenvolvimento de Sistemas",
                institute: "ETEC - Machado de Assis", date: "01/2022 - 01/2023"
            },
        ],
    },
    projects: {
        title: "Meus Projetos",
        viewProject: "Ver Projeto",
        viewCode: "Ver Código",
    },
    work: {
        title: "Soluções & Serviços",
        subtitle: "Como posso agregar valor ao seu negócio ou projeto?",
        services: [
            { title: "Sites e Presença Digital", description: "Criação de sites modernos e rápidos que funcionam perfeitamente no celular. Ideal para negócios locais que querem passar profissionalismo e atrair novos clientes." },
            { title: "Estruturação de Sistemas", description: "Organizo e desenvolvo aplicações de forma estruturada, garantindo que seu sistema funcione bem hoje e continue eficiente no futuro." },
            { title: "Integrações e Automações", description: "Desenvolvimento de ferramentas personalizadas para organizar seu negócio, automatizar tarefas repetitivas e economizar seu tempo." },
            { title: "Dados e Otimização", description: "Uso dados para melhorar desempenho, identificar oportunidades e ajudar na tomada de decisões." },
            { title: "Consultoria Técnica", description: "Ajudo a melhorar sistemas existentes, trazendo mais organização, performance e clareza." },
        ],
    },
    contact: {
        title: "Entre em Contato",
        name: "Nome", email: "Email", message: "Mensagem", send: "Enviar",
    },
    footer: {
        rights: "© 2026 Raphaela Monteiro - Todos os direitos reservados.",
    },
};

export const locales: Record<'en' | 'pt', Dict> = { en, pt };
export type Locale = keyof typeof locales;