export type ProjectCategory = 'systems' | 'ai' | 'research' | 'web' | 'personal';
export type ProjectStatus = 'active' | 'completed' | 'wip';

export type Bilingual = { en: string; pt: string };
export type BilingualList = { en: string[]; pt: string[] };

export type Project = {
    slug: string;
    title: string;
    subtitle: Bilingual;
    year: string;
    category: ProjectCategory;
    status: ProjectStatus;
    featured: boolean;
    hasCaseStudy: boolean;
    stack: string[];
    role: Bilingual;
    description: Bilingual;
    highlights?: BilingualList;
    caseStudy?: {
        abstract: Bilingual;
        context: Bilingual;
        approach: Bilingual;
        architecture: Bilingual;
        whatIBuilt: Bilingual;
        results: Bilingual;
        reflection: Bilingual;
    };
    links?: {
        repo?: string;
        live?: string;
        paper?: string;
    };
};

export const projects: Project[] = [

    // ─────────────────────────────────────────────
    // 01. SPRB-BD  —  TCC / ITA
    // ─────────────────────────────────────────────
    {
        slug: 'sprb-bd',
        title: 'SPRB-BD',
        subtitle: {
            en: 'Brazilian Regional PNT system — a reference architecture for sovereign navigation infrastructure.',
            pt: 'Sistema de Posicionamento Regional Brasileiro — arquitetura de referência para um sistema de posicionamento regional brasileiro.',
        },
        year: '2026',
        category: 'systems',
        status: 'active',
        featured: true,
        hasCaseStudy: true,
        stack: ['Python', 'FastAPI', 'Apache Spark', 'Postgres', 'React'],
        role: {
            en: 'Architecture, implementation, validation, and paper',
            pt: 'Arquitetura, implementação, validação e artigo',
        },
        description: {
            en: 'A four-layer reference architecture for regional Positioning, Navigation, and Timing (PNT) systems, validated through 137 integration tests.',
            pt: 'Arquitetura de referência em quatro camadas para sistemas regionais de Posicionamento, Navegação e Tempo (PNT), validada por 137 testes de integração.',
        },
        highlights: {
            en: [
                '54 user stories · 137 integration tests · 100% passing',
                '4-layer reference architecture for regional PNT systems',
                'Undergraduate thesis + research paper in progress',
            ],
            pt: [
                '54 user stories · 137 testes de integração · 100% aprovados',
                'Arquitetura de referência em 4 camadas para sistemas regionais de PNT',
                'Trabalho de graduação + artigo científico em produção',
            ],
        },
        caseStudy: {
            abstract: {
                en: 'SPRB-BD is a prototype that implements a reference architecture for regional Positioning, Navigation, and Timing (PNT) systems. Built as part of a research effort at ITA, it explores how sovereign PNT infrastructure can reduce dependence on foreign GNSS while supporting traceability and reproducibility of PNT experiments. The system implements four layers — presentation, application, persistence, and analysis — validated through 137 integration tests in a controlled environment.',
                pt: 'O SPRB-BD é um protótipo que implementa uma arquitetura de referência para sistemas regionais de Posicionamento, Navegação e Tempo (PNT). Desenvolvido em um esforço de pesquisa no ITA, explora como infraestrutura soberana de PNT pode reduzir a dependência de GNSS estrangeiros, apoiando rastreabilidade e reprodutibilidade de experimentos. O sistema implementa quatro camadas — apresentação, aplicação, persistência e análise — validadas por 137 testes de integração em ambiente controlado.',
            },
            context: {
                en: 'PNT systems are critical infrastructure. Most of the world depends on foreign GNSS constellations, exposing services to risks of unavailability, interference, and degradation. Brazil does not have a sovereign regional PNT system. Designing one requires not only hardware and signal engineering, but also a software layer capable of handling telemetry, commands, coverage analysis, and reproducibility of experiments.',
                pt: 'Sistemas PNT são infraestrutura crítica. A maior parte do mundo depende de constelações GNSS estrangeiras, expondo serviços a riscos de indisponibilidade, interferência e degradação. O Brasil não possui um sistema regional soberano de PNT. Projetar um exige não só engenharia de hardware e sinal, mas também uma camada de software capaz de lidar com telemetria, comandos, análise de cobertura e reprodutibilidade de experimentos.',
            },
            approach: {
                en: 'The work defines a four-layer reference architecture (presentation, application, persistence, analysis) intended to be reusable by future regional PNT systems. Development followed Scrum in three 4-week sprints, delivering 54 user stories. Validation was conducted through 137 integration tests covering authentication, sessions, telemetry, commands, coverage, maps, and analytical queries with Apache Spark.',
                pt: 'O trabalho define uma arquitetura de referência em quatro camadas (apresentação, aplicação, persistência, análise) pensada para ser reutilizada por sistemas regionais de PNT futuros. O desenvolvimento seguiu Scrum em três sprints de quatro semanas, entregando 54 user stories. A validação foi conduzida por 137 testes de integração cobrindo autenticação, sessões, telemetria, comandos, cobertura, mapas e consultas analíticas com Apache Spark.',
            },
            architecture: {
                en: 'Two segments run simultaneously: a control segment (managing users, sessions, commands, and telemetry ingestion) and an analytical segment (processing coverage and location data with Spark). Data flows through a REST API into Postgres, with the analysis layer querying aggregated views. The presentation layer includes interactive maps for coverage visualization.',
                pt: 'Dois segmentos rodam simultaneamente: um segmento de controle (gerenciando usuários, sessões, comandos e ingestão de telemetria) e um segmento analítico (processando dados de cobertura e localização com Spark). Os dados fluem por uma API REST para o Postgres, com a camada analítica consultando visões agregadas. A camada de apresentação inclui mapas interativos para visualização de cobertura.',
            },
            whatIBuilt: {
                en: 'I contributed as an auditing student within a research team at ITA. I was responsible for the persistence and analysis layers: data modeling in Postgres, the analytical queries with Spark, and the integration between the application layer and the analysis segment. I also designed the test strategy (137 integration tests), ran the validation in a controlled environment, and authored the accompanying paper.',
                pt: 'Contribuí como aluna ouvinte em um time de pesquisa no ITA. Fui responsável pelas camadas de persistência e análise: modelagem de dados no Postgres, as consultas analíticas com Spark e a integração entre a camada de aplicação e o segmento analítico. Também desenhei a estratégia de testes (137 testes de integração), conduzi a validação em ambiente controlado e escrevi o artigo científico.',
            },
            results: {
                en: 'All 137 integration tests passed on a controlled environment (localhost) with both segments running simultaneously. Validation used synthetic data: 528 telemetry records and 338 location points. The prototype demonstrates the functional viability of the proposed architecture and establishes a base for future field validation. The work contributes to the development of national capabilities in satellite navigation systems.',
                pt: 'Todos os 137 testes de integração passaram em ambiente controlado (localhost), com os dois segmentos em execução simultânea. A validação utilizou dados sintéticos: 528 registros de telemetria e 338 pontos de localização. O protótipo demonstra a viabilidade funcional da arquitetura proposta e estabelece uma base para validações futuras em campo. O trabalho contribui para o desenvolvimento de capacidades nacionais em sistemas de navegação por satélite.',
            },
            reflection: {
                en: 'The hardest part was not the code — it was designing an architecture that could be reused by systems beyond this prototype. That forced every decision to be justified against a reference, not just against what worked today. I learned that reproducibility and traceability are architectural concerns, not afterthoughts.',
                pt: 'A parte mais difícil não foi o código — foi projetar uma arquitetura que pudesse ser reutilizada por sistemas além do protótipo. Isso obrigou cada decisão a ser justificada contra uma referência, e não só contra o que funcionava hoje. Aprendi que reprodutibilidade e rastreabilidade são preocupações arquiteturais, não detalhes de última hora.',
            },
        },
        links: {
            // paper: '...',  // adicionar quando publicado
        },
    },

    // ─────────────────────────────────────────────
    // 02. Camplana
    // ─────────────────────────────────────────────
    {
        slug: 'camplana',
        title: 'Camplana',
        subtitle: {
            en: 'Explainable AI for commission campaign planning.',
            pt: 'IA explicável para planejamento de campanhas de comissão.',
        },
        year: '2025',
        category: 'ai',
        status: 'wip',
        featured: true,
        hasCaseStudy: true,
        stack: ['Java', 'Spring', 'Python', 'gRPC', 'Vue', 'Tailwind', 'LangGraph', 'Docker', 'Postgres'],
        role: {
            en: 'Integration Engineer — Java ↔ Python',
            pt: 'Engenheira de Integração — Java ↔ Python',
        },
        description: {
            en: 'A platform that turns natural-language commission rules into executable Python, validated against real sales and HR data before any campaign is committed.',
            pt: 'Plataforma que transforma regras de comissão em linguagem natural em código Python executável, validado contra dados reais de vendas e RH antes da campanha ser levada adiante.',
        },
        highlights: {
            en: [
                'No number comes directly from the LLM — only validated code',
                'gRPC integration between Java and Python for low latency',
                'Backtest over real historical sales (Jul–Dec 2025)',
            ],
            pt: [
                'Nenhum número vem direto da LLM — apenas código validado',
                'Integração gRPC entre Java e Python para baixa latência',
                'Backtest sobre vendas históricas reais (jul–dez 2025)',
            ],
        },
        caseStudy: {
            abstract: {
                en: 'Camplana is a platform that uses explainable generative AI to plan commission campaigns. Managers describe a rule in natural language, review the extracted parameters, and simulate the financial impact on real sales and HR data before committing to the campaign. No number comes directly from the LLM — the model generates Python code that runs isolated and is validated against a deterministic calculation.',
                pt: 'Camplana é uma plataforma que usa IA generativa explicável para planejar campanhas de comissão. Gestores descrevem uma regra em linguagem natural, revisam os parâmetros extraídos e simulam o impacto financeiro sobre dados reais de vendas e RH antes de levar a campanha adiante. Nenhum número vem direto da LLM — o modelo gera código Python que roda isolado e é validado contra um cálculo determinístico.',
            },
            context: {
                en: 'Planning commission campaigns typically requires translating business rules into SQL, simulating financial impact, and validating against budget — a slow and error-prone process. Existing tools either require technical users or hide the logic behind a black box, making it hard for managers to trust the output.',
                pt: 'Planejar campanhas de comissão normalmente exige traduzir regras de negócio em SQL, simular impacto financeiro e validar contra orçamento — um processo lento e propenso a erro. Ferramentas existentes ou exigem usuários técnicos, ou escondem a lógica atrás de uma caixa-preta, dificultando a confiança do gestor no resultado.',
            },
            approach: {
                en: 'We modeled the problem as natural language → executable code translation, with a strict separation between generation and validation. The LLM never produces numbers directly; it produces Python that runs in isolation. Every result is cross-checked against a deterministic baseline before being shown to the user.',
                pt: 'Modelamos o problema como tradução de linguagem natural para código executável, com separação estrita entre geração e validação. A LLM nunca produz números diretamente; ela produz Python que roda isolado. Todo resultado é conferido contra um baseline determinístico antes de ser exibido ao usuário.',
            },
            architecture: {
                en: 'Java (Spring) backend with a dedicated Python microservice for the AI layer, communicating via gRPC to minimize latency. Front-end in Vue + Tailwind. AI orchestration with LangGraph, using OpenRouter and Gemini as interchangeable providers. Docker for local and production environments, Postgres for relational data.',
                pt: 'Backend Java (Spring) com microsserviço Python dedicado à camada de IA, comunicando via gRPC para minimizar latência. Front-end em Vue + Tailwind. Orquestração de IA com LangGraph, usando OpenRouter e Gemini como provedores intercambiáveis. Docker para ambientes local e produção, Postgres para dados relacionais.',
            },
            whatIBuilt: {
                en: 'I was responsible for the integration between the Java backend and the Python AI microservice. This included defining the gRPC contract, handling cross-language error propagation, and keeping type definitions synchronized between both sides. The main challenge was latency — every simulation round-trip had to stay under a few hundred milliseconds to feel interactive.',
                pt: 'Fui responsável pela integração entre o backend Java e o microsserviço de IA em Python. Isso incluiu definir o contrato gRPC, tratar propagação de erros entre linguagens e manter as definições de tipo sincronizadas entre os dois lados. O principal desafio foi a latência — cada round-trip de simulação precisava ficar abaixo de algumas centenas de milissegundos para parecer interativo.',
            },
            results: {
                en: 'The system runs on real sales and HR data, allowing managers to simulate campaigns in seconds before committing. The backtest mode applies the rule over historical sales (Jul–Dec 2025) and compares it against the baseline commission, giving a clear picture of cost and impact before the campaign is launched.',
                pt: 'O sistema roda sobre dados reais de vendas e RH, permitindo que gestores simulem campanhas em segundos antes de levá-las adiante. O modo backtest aplica a regra sobre vendas históricas (jul–dez 2025) e compara com a comissão baseline, dando um panorama claro de custo e impacto antes do lançamento da campanha.',
            },
            reflection: {
                en: 'I learned that "explainability" is not just about showing the answer — it is about showing the path. The hardest design decision was ensuring the LLM never generated numbers, only structure. That constraint forced a cleaner architecture and, in the end, a system that managers actually trust.',
                pt: 'Aprendi que "explicabilidade" não é só mostrar a resposta — é mostrar o caminho. A decisão de design mais difícil foi garantir que a LLM nunca gerasse números, apenas estrutura. Essa restrição forçou uma arquitetura mais limpa e, no fim, um sistema no qual os gestores realmente confiam.',
            },
        },
    },

    // ─────────────────────────────────────────────
    // 03. Adatrade
    // ─────────────────────────────────────────────
    {
        slug: 'adatrade',
        title: 'Adatrade',
        subtitle: {
            en: 'Foreign trade analytics and forecasting for Brazilian states.',
            pt: 'Análise e previsão de comércio exterior para estados brasileiros.',
        },
        year: '2025',
        category: 'research',
        status: 'completed',
        featured: true,
        hasCaseStudy: true,
        stack: ['Python', 'Prophet', 'React', 'TypeScript', 'NestJS', 'Postgres'],
        role: {
            en: 'Forecasting model + full-stack development',
            pt: 'Modelo de previsão + desenvolvimento full-stack',
        },
        description: {
            en: 'A web platform that structures Brazilian foreign trade data, with a forecasting model (Prophet/Meta) projecting exports and imports through 2027.',
            pt: 'Plataforma web que estrutura dados de comércio exterior brasileiro, com modelo de previsão (Prophet/Meta) projetando exportações e importações até 2027.',
        },
        highlights: {
            en: [
                'Forecasting model built with Meta Prophet',
                'Presented at PyDay by invitation of the professor',
                'Based on open data from MDIC (Brazilian Ministry of Trade)',
            ],
            pt: [
                'Modelo de previsão construído com Prophet (Meta)',
                'Apresentado no PyDay a convite do professor',
                'Baseado em dados abertos do MDIC',
            ],
        },
        caseStudy: {
            abstract: {
                en: 'Adatrade is a web platform that organizes and structures Brazilian foreign trade data, allowing detailed monitoring of how each state performs in international markets. The system is built on open data from the Ministry of Development, Industry, Trade and Services (MDIC), and includes a forecasting model (Prophet, by Meta) that projects exports and imports through 2026–2027.',
                pt: 'Adatrade é uma plataforma web que organiza e estrutura dados de comércio exterior brasileiro, permitindo o acompanhamento detalhado do desempenho de cada estado no mercado internacional. O sistema é construído sobre dados abertos do Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC), e inclui um modelo de previsão (Prophet, da Meta) que projeta exportações e importações até 2026–2027.',
            },
            context: {
                en: 'Brazilian foreign trade data is publicly available but hard to explore. Analysts, researchers, and state governments need to compare performance across regions and time, and to project future trends — but the raw datasets are dense, unstructured, and not designed for interactive analysis.',
                pt: 'Dados de comércio exterior brasileiro são públicos, mas difíceis de explorar. Analistas, pesquisadores e governos estaduais precisam comparar desempenho entre regiões e ao longo do tempo, e projetar tendências futuras — mas os datasets brutos são densos, desestruturados e não pensados para análise interativa.',
            },
            approach: {
                en: 'We ingested MDIC open data into a structured Postgres database, built an interactive React front-end for exploration, and added a forecasting layer using Prophet to project export and import volumes. The forecasting model was calibrated on historical series per state and validated against held-out periods.',
                pt: 'Ingerimos dados abertos do MDIC em um banco Postgres estruturado, construímos um front-end interativo em React para exploração, e adicionamos uma camada de previsão com Prophet para projetar volumes de exportação e importação. O modelo foi calibrado sobre séries históricas por estado e validado contra períodos separados.',
            },
            architecture: {
                en: 'NestJS backend serving aggregated queries over Postgres. React + TypeScript front-end with interactive charts. The forecasting model was developed in Python (Prophet) and integrated as a batch job that populates projection tables consumed by the API.',
                pt: 'Backend NestJS servindo consultas agregadas sobre Postgres. Front-end em React + TypeScript com gráficos interativos. O modelo de previsão foi desenvolvido em Python (Prophet) e integrado como job em lote que popula tabelas de projeção consumidas pela API.',
            },
            whatIBuilt: {
                en: 'I built the forecasting model with Prophet, defining the preprocessing pipeline, per-state calibration, and validation strategy. I also contributed to the front-end and to the data modeling that structures the MDIC datasets.',
                pt: 'Construí o modelo de previsão com Prophet, definindo o pipeline de pré-processamento, a calibração por estado e a estratégia de validação. Também contribuí no front-end e na modelagem de dados que estrutura os datasets do MDIC.',
            },
            results: {
                en: 'The forecasting model produced projections through 2026–2027 that were presented at PyDay by invitation of the professor — an external recognition of the work\'s quality. The platform is publicly usable and forms a base for further research on regional trade dynamics.',
                pt: 'O modelo de previsão produziu projeções até 2026–2027 que foram apresentadas no PyDay a convite do professor — um reconhecimento externo da qualidade do trabalho. A plataforma é publicamente utilizável e forma uma base para pesquisas futuras sobre dinâmica regional de comércio.',
            },
            reflection: {
                en: 'Time series forecasting is easy to get wrong and hard to validate. I learned to distrust pretty charts and to always compare against naive baselines before claiming a model works. Presenting at PyDay taught me how to communicate technical results to a non-specialist audience.',
                pt: 'Previsão de séries temporais é fácil de errar e difícil de validar. Aprendi a desconfiar de gráficos bonitos e a sempre comparar contra baselines ingênuos antes de afirmar que um modelo funciona. Apresentar no PyDay me ensinou a comunicar resultados técnicos para uma audiência não especialista.',
            },
        },
    },

    // ─────────────────────────────────────────────
    // 04. Kitsune Infrastructure
    // ─────────────────────────────────────────────
    {
        slug: 'kitsune',
        title: 'Kitsune Infrastructure',
        subtitle: {
            en: 'A distributed, load-balanced network environment on AWS.',
            pt: 'Ambiente de rede distribuído e balanceado na AWS.',
        },
        year: '2024',
        category: 'systems',
        status: 'completed',
        featured: true,
        hasCaseStudy: true,
        stack: ['AWS EC2', 'WireGuard', 'HAProxy', 'Nginx', 'Docker', 'PHP', 'React', 'Postgres'],
        role: {
            en: 'Infrastructure design and implementation',
            pt: 'Design e implementação de infraestrutura',
        },
        description: {
            en: 'A distributed AWS environment simulating production-grade infrastructure: load balancing, reverse proxy, VPN mesh, and a monitoring dashboard.',
            pt: 'Ambiente distribuído na AWS simulando infraestrutura de produção: load balancing, proxy reverso, malha VPN e dashboard de monitoramento.',
        },
        highlights: {
            en: [
                'Multi-node Docker cluster on AWS EC2',
                'HAProxy for load balancing and reverse proxy',
                'WireGuard VPN connecting all nodes',
            ],
            pt: [
                'Cluster Docker multi-nó em AWS EC2',
                'HAProxy para load balancing e proxy reverso',
                'VPN WireGuard conectando todos os nós',
            ],
        },
        caseStudy: {
            abstract: {
                en: 'Kitsune is an infrastructure project that simulates a secure, scalable network environment using AWS EC2, WireGuard VPN, SSH, HAProxy, Nginx, and Docker in a distributed architecture. A PHP + React dashboard provides real-time visibility into which server is handling each request and key operational metrics.',
                pt: 'Kitsune é um projeto de infraestrutura que simula um ambiente de rede seguro e escalável usando AWS EC2, VPN WireGuard, SSH, HAProxy, Nginx e Docker em arquitetura distribuída. Um dashboard em PHP + React fornece visibilidade em tempo real de qual servidor está tratando cada requisição e métricas operacionais principais.',
            },
            context: {
                en: 'Understanding how production infrastructure actually works requires building it. Reading about load balancing, VPNs, and reverse proxies is not the same as configuring them under real network constraints. This project was an exercise in closing that gap.',
                pt: 'Entender como infraestrutura de produção realmente funciona exige construí-la. Ler sobre load balancing, VPNs e proxy reverso não é o mesmo que configurá-los sob restrições reais de rede. Este projeto foi um exercício para fechar essa lacuna.',
            },
            approach: {
                en: 'We provisioned multiple EC2 instances and connected them through a WireGuard mesh, exposing a single entry point via HAProxy. Nginx handled reverse proxying per service. All services ran in Docker containers. A PHP + React dashboard queried each node for health and traffic data.',
                pt: 'Provisionamos múltiplas instâncias EC2 e as conectamos via malha WireGuard, expondo um ponto único de entrada via HAProxy. Nginx tratava o proxy reverso por serviço. Todos os serviços rodavam em containers Docker. Um dashboard em PHP + React consultava cada nó para dados de saúde e tráfego.',
            },
            architecture: {
                en: 'Client → HAProxy (load balancer) → Nginx (reverse proxy) → Docker containers distributed across EC2 nodes. WireGuard provides the private network between nodes. Postgres stores session and telemetry data used by the dashboard.',
                pt: 'Cliente → HAProxy (load balancer) → Nginx (proxy reverso) → containers Docker distribuídos entre nós EC2. WireGuard fornece a rede privada entre nós. Postgres armazena dados de sessão e telemetria usados pelo dashboard.',
            },
            whatIBuilt: {
                en: 'I was responsible for provisioning the EC2 nodes, configuring WireGuard between them, setting up HAProxy as the entry point, and building the dashboard that shows live traffic distribution across nodes.',
                pt: 'Fui responsável por provisionar os nós EC2, configurar o WireGuard entre eles, montar o HAProxy como ponto de entrada e construir o dashboard que mostra distribuição de tráfego ao vivo entre os nós.',
            },
            results: {
                en: 'The environment ran successfully with multiple nodes active simultaneously, load balanced through HAProxy, and full visibility from the dashboard. It demonstrated a working model of distributed infrastructure that could be extended with real monitoring and auto-scaling.',
                pt: 'O ambiente rodou com sucesso com múltiplos nós ativos simultaneamente, balanceados via HAProxy, e visibilidade completa pelo dashboard. Demonstrou um modelo funcional de infraestrutura distribuída que poderia ser estendido com monitoramento real e auto-scaling.',
            },
            reflection: {
                en: 'This was my first real contact with distributed infrastructure. I learned that the hard part is never the individual piece — it is the connections between them, and the failure modes that emerge only when everything runs together.',
                pt: 'Esse foi meu primeiro contato real com infraestrutura distribuída. Aprendi que a parte difícil nunca é a peça individual — são as conexões entre elas, e os modos de falha que só emergem quando tudo roda junto.',
            },
        },
    },

    // ─────────────────────────────────────────────
    // 05. Orbita
    // ─────────────────────────────────────────────
    {
        slug: 'orbita',
        title: 'Orbita',
        subtitle: {
            en: 'Multi-platform support system with intelligent triage and real-time chat.',
            pt: 'Sistema de atendimento multiplataforma com triagem inteligente e chat em tempo real.',
        },
        year: '2025',
        category: 'web',
        status: 'completed',
        featured: true,
        hasCaseStudy: true,
        stack: ['React Native', 'Next.js', 'NestJS', 'Socket.io', 'Prisma', 'Postgres', 'MongoDB', 'Docker', 'Expo'],
        role: {
            en: 'Full-stack developer — mobile, web, and real-time layer',
            pt: 'Desenvolvedora full-stack — mobile, web e camada em tempo real',
        },
        description: {
            en: 'A support platform combining mobile apps for customers and agents with a web admin panel: automated triage, multi-level routing, and real-time chat.',
            pt: 'Plataforma de atendimento que combina apps mobile para clientes e atendentes com painel web administrativo: triagem automatizada, roteamento multinível e chat em tempo real.',
        },
        highlights: {
            en: [
                'Two mobile apps (customer + agent) + web admin panel',
                'Rule-based triage routing to multi-level support teams',
                'Real-time chat with Socket.io + full interaction history',
            ],
            pt: [
                'Dois apps mobile (cliente + atendente) + painel web admin',
                'Triagem baseada em regras roteando para times multinível',
                'Chat em tempo real com Socket.io + histórico completo',
            ],
        },
        caseStudy: {
            abstract: {
                en: 'Orbita is a support platform that combines a mobile application for customers and agents with a complete web interface for administrators. It centralizes support through a structured chat system with rule-based triage, multi-level team routing, and full interaction history.',
                pt: 'Orbita é uma plataforma de atendimento que combina um aplicativo mobile para clientes e atendentes com uma interface web completa para administradores. Centraliza o atendimento por meio de um sistema de chat estruturado com triagem por regras, roteamento multinível de equipes e histórico completo de interações.',
            },
            context: {
                en: 'Multi-channel support creates rework, lost information, and slow escalation. Customers expect fast, contextual answers; teams need clear routing rules; administrators need visibility. Existing solutions either target only large enterprises or force teams into rigid workflows.',
                pt: 'Atendimento multicanal gera retrabalho, perda de informação e escalonamento lento. Clientes esperam respostas rápidas e contextuais; equipes precisam de regras claras de roteamento; administradores precisam de visibilidade. Soluções existentes ou miram apenas grandes empresas, ou forçam times em fluxos rígidos.',
            },
            approach: {
                en: 'We designed the flow around three roles — customer, agent, administrator — and a triage engine based on business rules and frequently asked questions. The engine routes each ticket to the most appropriate team based on group and support level. All interactions are logged and queryable end-to-end.',
                pt: 'Desenhamos o fluxo em torno de três papéis — cliente, atendente, administrador — e um motor de triagem baseado em regras de negócio e perguntas frequentes. O motor encaminha cada chamado para a equipe mais adequada com base em grupo e nível de suporte. Todas as interações são registradas e consultáveis de ponta a ponta.',
            },
            architecture: {
                en: 'NestJS backend with Prisma as ORM. Postgres for transactional data, MongoDB for chat history. Socket.io for real-time messaging. React Native (Expo) mobile apps for customers and agents. Next.js web panel for administrators. Docker for development and deployment.',
                pt: 'Backend NestJS com Prisma como ORM. Postgres para dados transacionais, MongoDB para histórico de chat. Socket.io para mensagens em tempo real. Apps mobile em React Native (Expo) para clientes e atendentes. Painel web em Next.js para administradores. Docker para desenvolvimento e deploy.',
            },
            whatIBuilt: {
                en: 'I worked across the stack: mobile app for customers, the real-time chat layer with Socket.io, and parts of the admin panel. I was also responsible for the data modeling that supports interaction history and routing rules.',
                pt: 'Trabalhei em toda a stack: aplicativo mobile para clientes, a camada de chat em tempo real com Socket.io e partes do painel administrativo. Também fui responsável pela modelagem de dados que suporta o histórico de interações e as regras de roteamento.',
            },
            results: {
                en: 'The platform was delivered as a complete academic capstone project, with all three interfaces functional and running simultaneously: customer mobile, agent mobile/web, and admin web. The triage engine correctly routed test scenarios to the appropriate teams and levels, and chat history was fully traceable.',
                pt: 'A plataforma foi entregue como projeto integrador acadêmico completo, com as três interfaces funcionais e rodando simultaneamente: mobile do cliente, mobile/web do atendente e web do administrador. O motor de triagem roteou corretamente os cenários de teste para as equipes e níveis apropriados, e o histórico de chat foi totalmente rastreável.',
            },
            reflection: {
                en: 'Building for three roles at once forced me to think about state synchronization and failure handling in ways I had not before. I learned that real-time systems are less about the happy path and more about what happens when a message gets lost.',
                pt: 'Construir para três papéis ao mesmo tempo me forçou a pensar em sincronização de estado e tratamento de falhas de formas que eu não tinha antes. Aprendi que sistemas em tempo real têm menos a ver com o caminho feliz e mais com o que acontece quando uma mensagem se perde.',
            },
        },
    },

    // ─────────────────────────────────────────────
    // 06. Adatech  (card only)
    // ─────────────────────────────────────────────
    {
        slug: 'adatech',
        title: 'Adatech',
        subtitle: {
            en: 'AI-generated customs registration descriptions.',
            pt: 'Descrições de registro aduaneiro geradas por IA.',
        },
        year: '2025',
        category: 'ai',
        status: 'completed',
        featured: false,
        hasCaseStudy: false,
        stack: ['Ollama', 'Python', 'FastAPI', 'Postgres', 'React', 'Node', 'TypeScript'],
        role: {
            en: 'AI pipeline + backend integration',
            pt: 'Pipeline de IA + integração backend',
        },
        description: {
            en: 'A system that automatically generates legally-compliant customs product descriptions from Part-Number, fiscal classification, manufacturer, and origin.',
            pt: 'Sistema que gera automaticamente descrições de produtos aduaneiros legalmente compatíveis a partir de Part-Number, classificação fiscal, fabricante e origem.',
        },
        highlights: {
            en: ['Local LLM via Ollama — no external API dependency'],
            pt: ['LLM local via Ollama — sem dependência de API externa'],
        },
    },

    // ─────────────────────────────────────────────
    // 07. Amparo  (card only)
    // ─────────────────────────────────────────────
    {
        slug: 'amparo',
        title: 'Amparo',
        subtitle: {
            en: 'A digital first-hug for new Catholics.',
            pt: 'Um primeiro abraço digital para novos católicos.',
        },
        year: '2026',
        category: 'personal',
        status: 'wip',
        featured: false,
        hasCaseStudy: false,
        stack: ['Next.js', 'TypeScript'],
        role: {
            en: 'Founder & developer',
            pt: 'Fundadora & desenvolvedora',
        },
        description: {
            en: 'A project for people newly converted to the Catholic faith who feel lost, alone, or overwhelmed at the start of the journey. Born from a personal experience.',
            pt: 'Projeto para pessoas recém-convertidas à fé católica que se sentem perdidas, sozinhas ou sobrecarregadas no início da jornada. Nasceu de uma experiência pessoal.',
        },
    },

    // ─────────────────────────────────────────────
    // 08. Vitral  (card only)
    // ─────────────────────────────────────────────
    {
        slug: 'vitral',
        title: 'Vitral',
        subtitle: {
            en: 'An independent digital magazine and bilingual publication curating high fashion through the lens of dark elegance. We provide an intellectual space where garment craftsmanship meets gothic literature and avant-garde art.',
            pt: 'Revista digital independente e publicação bilíngue que curate alta moda pela lente da elegância obscura. Um espaço intelectual onde o ofício da costura encontra a literatura gótica e a arte de vanguarda.',
        },
        year: '2026',
        category: 'personal',
        status: 'wip',
        featured: false,
        hasCaseStudy: false,
        stack: ['Ruby', 'Rails', 'Postgres', 'C'],
        role: {
            en: 'Founder & editor-in-chief & developer',
            pt: 'Fundadora & editora chefe & desenvolvedora',
        },
        description: {
            en: 'VITRAL is not a generalist magazine. We are a bilingual, high-fashion publication dedicated to the intellectual curation of dark elegance. We merge couture, gothic literature, and global mythology to celebrate fashion as an art form for the mind.',
            pt: 'VITRAL não é uma revista generalista. Somos uma publicação bilíngue de alta moda dedicada à curadoria intelectual da elegância obscura. Unimos alta costura, literatura gótica e mitologia global para celebrar a moda como forma de arte para a mente.',
        },
    },


    // ─────────────────────────────────────────────
    // 09. Polaris  (card only)
    // ─────────────────────────────────────────────
    {
        slug: 'polaris',
        title: 'Polaris',
        subtitle: {
            en: 'Personal productivity tracker.',
            pt: 'Rastreador pessoal de produtividade.',
        },
        year: '2026',
        category: 'personal',
        status: 'wip',
        featured: false,
        hasCaseStudy: false,
        stack: ['Python'],
        role: {
            en: 'Solo developer',
            pt: 'Desenvolvedora solo',
        },
        description: {
            en: 'A personal time-tracking tool for logging work, study, and project hours, with analytics and dashboards for productivity patterns. Built to solve my own gap at my internship.',
            pt: 'Ferramenta pessoal de registro de tempo para trabalho, estudo e projetos, com análises e dashboards de padrões de produtividade. Construída para resolver uma lacuna do meu próprio estágio.',
        },
    },
];

// Helpers
export function getProject(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
    return projects.filter((p) => p.category === category);
}