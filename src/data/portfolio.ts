export type SkillGroup = {
  heading: string
  items: string[]
}

export type Project = {
  title: string
  description: string
  stack: string[]
  githubUrl: string
  demoUrl: string
}

export type WritingPost = {
  title: string
  summary: string
  href: string
  label: string
}

export type Certification = {
  code: string
  name: string
  issuer: string
  status: 'earned' | 'in-progress'
  url?: string
}

export type Testimonial = {
  quote: string
  author: string
  role: string
  company: string
}

export const profile = {
  name: 'Gaurav Sharma',
  role: 'Software Engineer · Backend Systems · AI Integration',
  intro:
    'I build production-grade backend systems and AI-powered platforms at Telusko — from modular Python/FastAPI services serving 50,000+ learners to real-time pub-sub engines processing 20M+ messages in production.',
  phone: '+91 9523849635',
  social: [
    { label: 'GitHub', href: 'https://github.com/Gaurav560' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/gaurav4044' },
    { label: 'X', href: 'https://x.com/1809157Gaurav' },
    { label: 'Email', href: 'mailto:heygaurav54@gmail.com' },
  ],
}

export const aboutParagraphs: string[] = [
  'I\'m a Software Engineer at Telusko building full-stack production systems — from a modular Python/FastAPI LMS serving 50,000+ learners across 40+ courses, to a real-time pub-sub quiz engine that has processed 20M+ messages and handled single-day peaks of 1M+ messages in production.',
  'AI integration is central to my current work. I\'ve shipped AlienCoach, an AI learning platform with GPT-4 function calling, OpenAI Whisper speech-to-text, Google TTS, and stateful JDBC ChatMemory — building context-aware tutoring and automated technical interview systems that go beyond simple completions.',
  'I work across the full backend stack — Java/Spring Boot, Python/FastAPI, Node.js/Express — with deep experience in PostgreSQL schema design, Redis caching, distributed real-time messaging via Ably WebSockets, and cloud infrastructure on AWS. Docker, ECR, and CI/CD pipelines are part of my daily workflow.',
  'I invest in the engineering community. As an early adopter of the Spring AI ecosystem since early 2024, I published tutorials before the GA release that reached a wide audience in the Spring community. I continue writing on Java, Spring Boot, and distributed systems to share hard-won production insights.',
]

export const skillGroups: SkillGroup[] = [
  {
    heading: 'Languages',
    items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    heading: 'Backend & Frameworks',
    items: ['Spring Boot', 'Spring AI', 'FastAPI', 'Express.js', 'Spring Security', 'Hibernate', 'asyncpg'],
  },
  {
    heading: 'AI / ML',
    items: ['OpenAI API', 'GPT Function Calling', 'Whisper STT', 'Google TTS', 'RAG Pipelines', 'pgvector', 'Prompt Engineering', 'MCP'],
  },
  {
    heading: 'Databases',
    items: ['PostgreSQL', 'Redis', 'pgvector', 'Schema Design', 'Data Caching'],
  },
  {
    heading: 'Cloud & DevOps',
    items: ['AWS EC2 / S3 / RDS', 'ECS / ECR / App Runner', 'CloudWatch', 'Docker', 'CI/CD', 'Bunny.net CDN'],
  },
  {
    heading: 'Real-time & Messaging',
    items: ['Ably Pub/Sub', 'WebSockets', 'Low Latency Systems', 'Concurrent Programming', 'Virtual Threads'],
  },
  {
    heading: 'Security & APIs',
    items: ['JWT', 'OAuth2', 'REST APIs', 'Swagger / OpenAPI', 'Microservices', 'JVM Tuning'],
  },
]

export const projects: Project[] = [
  {
    title: 'Telusko LMS',
    description:
      'Architected the company\'s flagship LMS as a modular monolith with REST APIs built to support 50,000+ users across 40+ live, recorded, and hybrid courses. Engineered the video streaming layer on Bunny.net CDN with multi-region edge caching (Singapore, US, EU), hosting 700+ videos served across 9+ countries. Integrated Razorpay with webhook-based reconciliation for domestic and international payments.',
    stack: ['Python', 'FastAPI', 'asyncpg', 'PostgreSQL', 'Bunny.net CDN', 'Razorpay'],
    githubUrl: 'https://github.com/Gaurav560',
    demoUrl: 'https://telusko.com',
  },
  {
    title: 'AlienCoach — AI Learning Platform',
    description:
      'Production AI learning platform serving 1,000+ AI-generated courses with personalized YouTube recommendations via OpenAI function calling and stateful JDBC ChatMemory for context-aware tutoring. Shipped an in-platform AI interview module integrating OpenAI Whisper (STT) and Google TTS, automating real-time technical assessments with conversational feedback. Integrated 4+ third-party APIs and exposed 20+ RESTful endpoints with Swagger/OpenAPI.',
    stack: ['Java', 'Spring Boot', 'Spring AI', 'OpenAI API', 'PostgreSQL', 'Docker', 'AWS App Runner'],
    githubUrl: 'https://github.com/Gaurav560',
    demoUrl: 'https://aliencoach.com',
  },
  {
    title: 'AlienTux — Real-time Quiz Platform',
    description:
      'Engineered a real-time pub-sub quiz platform on the async event loop, supporting 1,000+ concurrent users (80% mobile traffic) with millisecond response times and a Redis sorted-set leaderboard. Processed 20M+ real-time messages through the Ably pub-sub layer in production, with single-day peaks reaching 1M+ messages. Resolved a 64 KB Ably WebSocket payload limit by batching leaderboard updates into 350-user chunks.',
    stack: ['JavaScript', 'Express.js', 'Ably', 'Redis', 'PostgreSQL', 'Node.js'],
    githubUrl: 'https://github.com/Gaurav560',
    demoUrl: 'https://alientux.com',
  },
]

export const writingPosts: WritingPost[] = [
  {
    title: 'Spring AI in Production: Early Patterns Before GA',
    summary:
      'Early-adopter tutorials published before the Spring AI GA release in 2024, covering RAG pipelines, function calling, and agent workflows — widely read across the Spring community.',
    href: 'https://unlogged.io/blog',
    label: 'Spring AI',
  },
  {
    title: 'Building Real-time WebSocket Systems in Java',
    summary:
      'A deep-dive implementation guide covering WebSocket architecture, concurrency patterns, and production lessons from building a platform that handles 20M+ messages. Reached 7.5k+ views.',
    href: 'https://unlogged.io/blog',
    label: 'WebSockets',
  },
  {
    title: 'Virtual Threads, JDK Releases & the Modern Java Backend',
    summary:
      'Coverage of JDK ecosystem changes — virtual threads, structured concurrency, and JVM tuning — and their practical impact on building high-throughput, low-latency backend services.',
    href: 'https://unlogged.io/blog',
    label: 'Java',
  },
]

export const certifications: Certification[] = [
  {
    code: 'CLF-C02',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'earned',
  },
  {
    code: 'SAA-C03',
    name: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    status: 'in-progress',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'Gaurav has a rare combination of speed and depth. He shipped the AlienCoach AI platform end-to-end — GPT integration, interview module, CI/CD — with the kind of ownership you rarely see. His backend work directly shapes how Telusko delivers learning at scale.',
    author: 'Navin Reddy',
    role: 'Founder',
    company: 'Telusko',
  },
  {
    quote:
      'Working with Gaurav on AlienTux was a masterclass in real-time systems under pressure. He diagnosed and fixed a WebSocket payload bottleneck that was blocking our entire launch — in hours, with zero drama. Calm, precise, and genuinely collaborative.',
    author: 'Priya Mehta',
    role: 'Frontend Engineer',
    company: 'Telusko',
  },
  {
    quote:
      'Gaurav\'s Spring AI tutorials were the clearest early material in the ecosystem — practical examples running in production before most people had even heard of the library. That kind of initiative and curiosity is exactly what the Java community needs more of.',
    author: 'Arjun Kapoor',
    role: 'Senior Java Developer',
    company: 'Independent',
  },
]
