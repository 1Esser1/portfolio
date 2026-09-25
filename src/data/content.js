/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH
 *  Every piece of text on the site lives here. Edit this file only — you never
 *  need to touch the components to fix a date, add a project, or reword a line.
 *
 *  Items marked  // TODO:  are gaps I could not fill without inventing facts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Esser Ben Ahmed',
  initials: 'EB',
  title: 'Business Intelligence & ERP Engineer',
  // Short form for the nav bar, where the full title collides with the links.
  shortTitle: 'ERP-BI Engineer',
  // Rotates under the name in the hero.
  roles: [
    'Business Intelligence Engineer',
    'Full-Stack Developer',
    'Data & Analytics Engineer',
    'ERP & Systems Integration',
  ],
  location: 'Ariana Soghra, Tunisia',
  email: 'benahmedesser@gmail.com',
  phone: '+216 25 403 366',
  phoneHref: '+21625403366',
  github: 'https://github.com/1Esser1',
  githubHandle: '1Esser1',
  linkedin: 'https://www.linkedin.com/in/esser-ben-ahmed/',
  linkedinHandle: 'esser-ben-ahmed',
  cv: '/Esser_Ben_Ahmed_CV.pdf',
  headshot: '/esser-headshot.jpg',
  portrait: '/esser-portrait.jpg',
  available: 'Open to graduate roles — BI, Data, ERP & Software Engineering',

  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Advanced' },
    { name: 'French', level: 'Advanced' },
  ],

  intro:
    'I build the whole path a number travels: modelled in SQL, moved by an application I wrote, and landed in a dashboard someone actually makes a decision with.',

  about: [
    "I'm finishing a Business Intelligence & ERP engineering degree at ESPRIT, built around data analysis, SQL, data visualisation, systems integration and enterprise resource planning — with hands-on work in SAP and Oracle ERP.",
    'What I like is the full span of a data product. Two internships put me on the analytics side: a centralised Power BI + Python reporting system at Catharsis Consulting, then dashboards over 10+ KPIs backed by machine-learning models at TimSoft.',
    "My end-of-studies project pushed that further. At Attijari Bank I designed and built Nexus alone, end to end — a platform that uses AI to decide what a bank's IT department should work on next, then tracks how it actually gets delivered. React front end, Spring Boot API, MySQL model, security, and every integration.",
    "Outside the code, six years across AIESEC, Rotaract, IEEE CS and other organisations taught me the other half of the job: I've led 8+ teams and worked with 50+ people, run recruitment, and helped organise conferences from local up to the MEA regional level.",
  ],

  stats: [
    { value: '3', label: 'Engineering internships' },
    { value: '8+', label: 'Teams led' },
    { value: '50+', label: 'People managed' },
    { value: '6', label: 'Years in student orgs' },
  ],
}

export const experience = [
  {
    role: 'End-of-Studies Intern — Full-Stack Developer (PFE)',
    company: 'Attijari Bank',
    location: 'Tunisia',
    period: 'Feb 2026 — Jul 2026',
    current: false,
    summary:
      'Designed and built Nexus solo — an AI-powered IT work prioritisation and delivery platform for the bank\'s IT department.',
    bullets: [
      'Built the complete system end to end: React 19 SPA, Spring Boot 3 REST + WebSocket API, MySQL data model, security layer and every third-party integration.',
      'Automated task prioritisation using RICE, MoSCoW and Kano scoring, driven by a provider-agnostic LLM layer (Groq, Gemini, Mistral, self-hosted Ollama) with no vendor lock-in.',
      'Delivered live analytics — DORA DevOps metrics, per-project KPIs, sprint boards and SLA tracking — plus AI-generated multi-page management reports exportable to PDF.',
      'Integrated GitHub/GitLab OAuth with a manager push-approval workflow and per-project Jira sync, behind role-based access control across six roles.',
    ],
    stack: ['React 19', 'Spring Boot 3', 'MySQL', 'Spring Security', 'WebSocket', 'LLM APIs'],
  },
  {
    role: 'Data & Machine Learning Developer Intern',
    company: 'TimSoft',
    location: 'Tunisia',
    period: 'Jun 2025 — Aug 2025',
    current: false,
    summary:
      'Built the analytics and machine-learning layer for the company platform.',
    bullets: [
      'Built interactive dashboards from scratch to monitor and analyse 10+ key performance indicators.',
      'Integrated machine learning models to add predictive features and sharpen data-driven insight.',
    ],
    stack: ['Python', 'Machine Learning', 'Dashboards'],
  },
  {
    role: 'BI Engineer Intern',
    company: 'Catharsis Consulting',
    location: 'Tunisia',
    period: 'Jun 2024 — Aug 2024',
    current: false,
    summary:
      'Centralised scattered conference data into one reporting system leadership could act on.',
    bullets: [
      'Developed a centralised data system with Power BI and Python to aggregate and analyse conference-related data.',
      'Designed interactive Power BI dashboards tracking participant engagement, registration trends and session popularity.',
      'Delivered actionable insight that fed directly into event planning and decision-making.',
    ],
    stack: ['Power BI', 'Python', 'Data Modelling'],
  },
]

export const projects = [
  {
    id: 'nexus',
    name: 'Nexus',
    tagline: 'AI-Powered IT Work Prioritization & Delivery Platform',
    context: 'End-of-studies project (PFE) · Internship at Attijari Bank, Tunisia',
    role: 'Solo full-stack developer — design, frontend, backend, database, integrations',
    status: 'Completed',
    featured: true,
    summary:
      "A web platform that helps a bank's IT department decide what to work on next — and how to deliver it. Requests flow in from IT and business teams, get scored and prioritised by AI using recognised product-management frameworks, then move through planning, execution and delivery tracking in one tool.",
    stack: [
      'React 19',
      'Vite',
      'Spring Boot 3',
      'MySQL',
      'Spring Security (JWT)',
      'WebSocket / STOMP',
      'LLM APIs',
    ],
    highlights: [
      'RICE · MoSCoW · Kano AI scoring',
      'DORA DevOps metrics',
      'Jira + GitHub/GitLab sync',
      'EN / FR / AR with RTL',
    ],
    detail: [
      {
        heading: 'AI prioritisation & planning',
        points: [
          'Automatic task scoring with RICE, MoSCoW and Kano models, backed by pluggable LLM providers (Groq, Gemini, Mistral and self-hosted Ollama).',
          'AI-generated project plans — "workshops" — that break a task into estimated, ordered subtasks, with a two-plan model comparing the AI plan against a manager\'s manual plan.',
          'AI-generated multi-page management reports (executive summary, priority ranking, sprint, SLA, DevOps), exportable to PDF.',
        ],
      },
      {
        heading: 'Delivery & analytics',
        points: [
          'Per-project productivity dashboards and custom KPIs: completion, velocity, cycle time, on-time delivery and effort adherence.',
          'DORA DevOps metrics — lead time, deployment frequency, change-failure rate and MTTR — at both individual and department level.',
          'Sprint board, team workload view, and SLA/deadline tracking.',
        ],
      },
      {
        heading: 'Integrations & governance',
        points: [
          'GitHub/GitLab OAuth integration with a manager push-approval workflow for source changes.',
          'Jira integration with per-project mapping, so each project syncs to its own board.',
          'Role-based access control across six roles, plus an admin console for user management, AI-provider configuration and secure password reset.',
        ],
      },
      {
        heading: 'Collaboration',
        points: [
          'Real-time messaging over WebSocket/STOMP with reactions, attachments and department announcements.',
          'Video meetings and calls via Jitsi, with scheduling, calendar integration and reminders.',
          'A dedicated portal for non-IT staff (business and HR) to submit and track requests, with notifications and personal notes.',
          'Full English / French / Arabic localisation with automatic translation and RTL support.',
        ],
      },
      {
        heading: 'Technical highlights',
        points: [
          'Architecture: decoupled SPA + REST API, a real-time layer over STOMP/WebSocket, and stateless JWT auth with BCrypt-hashed credentials behind @PreAuthorize role gates.',
          'Security-first: admin password resets never expose plaintext (server-side BCrypt with one-time temporary passwords); signed JWTs also gate the embedded video rooms.',
          'Extensible AI layer: a provider-agnostic service lets the same features run on cloud LLMs or a self-hosted model — no vendor lock-in.',
          'Data & reporting: a MySQL/JPA domain model driving live analytics (DORA, KPIs, workload) and AI-assisted narrative reporting.',
        ],
      },
    ],
  },
  {
    id: 'uk-dashboard',
    name: 'AIESEC UK Dashboard',
    tagline: 'OGX performance tracker — from spreadsheet to scoreboard',
    context: 'AIESEC in the UK — national exchange operation',
    role: 'Solo full-stack developer',
    status: 'Live',
    featured: false,
    links: {
      live: 'https://dashboard-uk.vercel.app/',
      repo: 'https://github.com/1Esser1/UK-Dashboard',
    },
    demo: 'uk-dashboard',
    summary:
      "AIESEC UK's national exchange funnel lived in a 7,500-row Google Sheet. This dashboard turns it into a live scoreboard: SU → APL → ACC → APD → RE → CO, per Local Committee, per programme, per period — with national ranking and goal tracking for all 13 LCs.",
    stack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Express', 'Prisma', 'Google Sheets API'],
    detail: [
      {
        heading: 'What it shows',
        points: [
          'Overview: national totals with period-over-period growth and progress toward the national APD target.',
          'National Ranking: every LC ranked across the whole funnel, sortable by stage, with a green → red rank-tier gradient.',
          'LC Dashboard: rank badges and Plan / Done / %Ach / Prior / %GRW goal cards for each funnel stage, filterable by LC, month and programme.',
        ],
      },
      {
        heading: 'How it works',
        points: [
          'A Google Sheets sync service feeds a Prisma data model, so the dashboard updates as the team works in the sheet.',
          'Express API with an admin login (JWT in an httpOnly cookie) and a sync-status page that can trigger a manual sync.',
          'React + TypeScript front end with Recharts, deployed on Vercel.',
        ],
      },
    ],
  },
  {
    id: 'aiesec-automation',
    name: 'AIESEC Attraction Automation & EXPA Analytics',
    tagline: 'Zero-touch sign-up pipeline + live recruitment dashboards',
    context: 'AIESEC Bardo, Tunisia',
    role: 'Builder — automation & analytics',
    status: 'Delivered',
    featured: false,
    summary:
      'Removed the manual step between "candidate fills the form" and "candidate has an AIESEC account", then built the reporting layer on top so the team could see where recruitment was actually leaking.',
    stack: ['Google Apps Script', 'Google Sheets', 'EXPA Data', 'Dashboards'],
    detail: [
      {
        heading: 'What I built',
        points: [
          'A Google Apps Script pipeline in Google Sheets that automatically creates an AIESEC account for a candidate as soon as the attraction form is submitted.',
          'Analytics dashboards fed by real-time EXPA data to measure recruitment performance broken down by status and stage.',
        ],
      },
    ],
  },
  {
    id: 'ecommerce-ops',
    name: 'E-Commerce Operations Platform',
    tagline: 'Role-based management interface across the full product lifecycle',
    context: 'Client project',
    role: 'Developer',
    status: 'In progress',
    featured: false,
    summary:
      'A management interface that coordinates work between every role in the company, and follows a product from creation all the way to delivery — raw materials, suppliers and delivery staff included.',
    // TODO: add your tech stack for this one, e.g. ['React', 'Node.js', 'PostgreSQL']
    stack: [],
    detail: [
      {
        heading: 'What it does',
        points: [
          'Coordinates and routes work between the different roles inside the company.',
          'Tracks a product across its whole lifecycle: creation → raw materials → suppliers → delivery.',
        ],
      },
    ],
  },
  {
    id: 'delivery-app',
    name: 'Local Delivery Management App',
    tagline: 'Order intake and tracking for a one-person delivery business',
    context: 'Client project — my hometown',
    role: 'Developer',
    status: 'In progress',
    featured: false,
    summary:
      'Built for a single-operator delivery company in the small town I come from. It takes orders, manages them end to end, and keeps the conversation around each order in one place instead of scattered across phone calls.',
    // TODO: add your tech stack for this one.
    stack: [],
    detail: [
      {
        heading: 'What it does',
        points: [
          'Order intake and full end-to-end order management for a single operator.',
          'Comment threads attached to each order, so customer context lives with the order.',
        ],
      },
    ],
  },
  {
    id: 'ogx-search-hub',
    name: 'OGX Search Hub',
    tagline: 'Central search over every IR partner and opportunity',
    context: 'AIESEC in the UK — Entity Support Team',
    role: 'OGX Data Master',
    status: 'In progress',
    featured: false,
    summary:
      'As OGX Data Master on the UK Entity Support Team, I own the entity\'s data projects — including a search hub that centralises every international relations partner and opportunity in one searchable place.',
    // TODO: add your tech stack for this one.
    stack: [],
    detail: [
      {
        heading: 'What I own',
        points: [
          'A search hub covering every IR partner and every opportunity available to the entity.',
          'Data projects for the Entity Support Team as OGX Data Master.',
        ],
      },
    ],
  },
  {
    id: 'anime-store',
    name: 'Anime Store E-Commerce',
    tagline: 'Full-featured storefront and management back office',
    context: 'Client project',
    role: 'Developer',
    status: 'In progress',
    featured: false,
    summary:
      'A second e-commerce build, carrying the same depth of management features as the operations platform — storefront plus the back office that runs it.',
    // TODO: add your tech stack and the specific feature list you want to show.
    stack: [],
    detail: [],
  },
]

/**
 * Demo videos (1–4 min). Drop the .mp4 + poster in /public/demos and flip
 * `status` to 'ready'. Chapters are [seconds, label] and become seek buttons.
 */
export const demos = [
  {
    id: 'uk-dashboard',
    project: 'AIESEC UK Dashboard',
    title: 'From spreadsheet to scoreboard',
    summary:
      "A walk through the live OGX tracker: national totals, period and programme filters, the 13-LC ranking, and the per-LC view each team uses to check where they stand.",
    status: 'ready',
    src: '/demos/uk-dashboard.mp4',
    poster: '/demos/uk-dashboard-poster.jpg',
    duration: '1:43',
    links: {
      live: 'https://dashboard-uk.vercel.app/',
      repo: 'https://github.com/1Esser1/UK-Dashboard',
    },
    chapters: [
      [0, 'The problem'],
      [13, 'Overview'],
      [21, 'Period filters'],
      [37, 'Programmes'],
      [49, 'National ranking'],
      [61, 'LC dashboard'],
      [79, 'Live today'],
    ],
  },
  {
    id: 'nexus',
    project: 'Nexus',
    title: 'AI prioritisation, end to end',
    summary:
      'From a request coming in, to AI scoring with RICE · MoSCoW · Kano, to the generated plan, sprint board and DORA metrics.',
    status: 'soon',
    note: 'Walkthrough in production',
  },
  {
    // TODO: name + one-line pitch for the upcoming project.
    id: 'next',
    project: 'Next project',
    title: 'Something new is being built',
    summary: 'The next build is underway. Its demo lands here when it ships.',
    status: 'soon',
    note: 'In development',
  },
]

export const leadership = [
  {
    org: 'AIESEC',
    place: 'Bardo, Tunisia',
    period: 'Oct 2022 — Present',
    current: true,
    roles: ['Head of Recruitment', 'OCVP', 'HR Manager', 'Organising Committee'],
    points: [
      'Led 8+ teams and worked with 50+ people across recruitment, events and exchange programmes.',
      'Part of the organising committee for conferences at local, national and MEA regional level.',
      'As OC President for recruitment, ran campaigns for OCP end to end — application management, candidate engagement and promotional activity.',
      'Contributed to international exchange programmes, congresses, conferences and hackathons.',
    ],
  },
  {
    org: 'AIESEC in the UK',
    place: 'Entity Support Team',
    period: 'Current',
    current: true,
    roles: ['OGX Data Master'],
    points: [
      "Responsible for the entity's data projects, including the OGX Search Hub covering every IR partner and opportunity.",
      'Built the OGX performance dashboard that ranks all 13 Local Committees across the national exchange funnel.',
    ],
  },
  {
    org: 'Rotaract Club',
    place: 'Tunisia',
    period: '2021 — 2023',
    current: false,
    roles: ['Vice President of Human Resources', 'Head of Personal & Professional Development', 'Member'],
    points: [
      'Joined as a member, became Head of Personal & Professional Development, then was promoted to Vice President of Human Resources.',
      'Created training environments across first aid, marketing, Photoshop and other tracks.',
      'Organised events, training sessions and initiatives supporting youth development and community engagement.',
    ],
  },
  {
    org: 'IEEE Computer Society',
    place: 'Student Branch',
    period: '2020 — 2024',
    current: false,
    roles: ['Treasurer'],
    points: ['Managed the branch treasury alongside tech and community activities.'],
  },
  {
    org: 'JCI · Microsoft Student Club · ACM',
    place: 'Tunisia',
    period: '2020 — 2024',
    current: false,
    roles: ['Active Member'],
    points: [
      'Active across multiple student organisations in tech, leadership and community projects.',
      'Gained experience in teamwork, networking and project participation across international and professional associations.',
    ],
  },
]

export const skills = [
  {
    group: 'Business Intelligence & Data',
    icon: 'chart',
    items: [
      'Power BI',
      'Data Analysis',
      'Data Visualisation',
      'KPI Design',
      'Dashboarding',
      'Machine Learning',
      'DORA Metrics',
    ],
  },
  {
    group: 'ERP & Business Systems',
    icon: 'layers',
    items: [
      'SAP',
      'Oracle ERP',
      'Systems Integration',
      'Business Process Optimisation',
      'Jira',
    ],
  },
  {
    group: 'Languages',
    icon: 'code',
    items: ['Python', 'Java', 'SQL', 'JavaScript', 'C#', 'C', 'Objective-C'],
  },
  {
    group: 'Backend',
    icon: 'server',
    items: [
      'Spring Boot 3',
      'Spring Security (JWT)',
      '.NET',
      'REST APIs',
      'WebSocket / STOMP',
    ],
  },
  {
    group: 'Frontend',
    icon: 'browser',
    items: ['React 19', 'Vite', 'HTML & CSS', 'i18n (EN / FR / AR + RTL)'],
  },
  {
    group: 'Databases',
    icon: 'database',
    items: ['MySQL', 'Microsoft SQL Server', 'JPA / Hibernate'],
  },
  {
    group: 'AI & Automation',
    icon: 'spark',
    items: [
      'LLM APIs (Groq, Gemini, Mistral)',
      'Ollama (self-hosted)',
      'Google Apps Script',
    ],
  },
  {
    group: 'Tools',
    icon: 'tool',
    items: ['Git', 'GitHub', 'GitLab', 'Xcode', 'Jitsi'],
  },
]

export const education = [
  {
    school: 'ESPRIT — École Supérieure Privée d\'Ingénierie et de Technologie',
    degree: "Bachelor's in Business Intelligence Engineering",
    period: 'Sept 2023 — Jun 2026',
    place: 'Tunisia',
  },
  {
    school: 'Université SESAME',
    degree: 'Preparatory Cycle in Computer Science',
    period: 'Dec 2021 — Jun 2023',
    place: 'Tunisia',
  },
  {
    school: 'École Hexagone',
    degree: 'Preparatory Cycle in Computer Science',
    period: 'Sept 2021 — Dec 2021',
    place: 'Paris, France',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'demos', label: 'Demos' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
