export const site = {
  name: { en: 'Wu Jinsen', zh: '吴锦森' },
  title: {
    en: 'Wu Jinsen | Java Architect',
    zh: '吴锦森 | Java 架构师',
  },
  description: {
    en: 'Fourteen years as a programmer—microservices, data platforms, and teams. Internet apps, management systems, and SaaS.',
    zh: '十四年程序员，微服务、数仓，带过团队。互联网 APP、管理系统与 SaaS。',
  },
  email: '2998714655@qq.com',
  github: 'https://github.com/wujinsen',
  url: 'https://wu-jinsen.com',
  blog: 'https://blog.wu-jinsen.com/',
  questionFlow: 'https://wu-jinsen.com/QuestionFlow/',
  streetCornerFood: 'https://scf.wu-jinsen.com/',
  moliCrm: 'https://moli-ui.wu-jinsen.com/',
  cnblogs: 'https://www.cnblogs.com/wujinsen',
  csdn: 'https://blog.csdn.net/u012638544',
  wechatName: { en: 'moli tech', zh: 'moli技术分享' },
  tuchong: 'https://wujinsen.tuchong.com',
  ogImage: 'https://wu-jinsen.com/og-cover.png',
} as const;

export const stats = [
  { num: '14+', label: { en: 'Years with Java', zh: 'Java 经验' } },
  { num: '6', label: { en: 'Teams led', zh: '带过团队' } },
  { num: '3+', label: { en: 'Data platforms built', zh: '搭建过的数仓' } },
  { num: { en: 'CN · EN', zh: '中 · 英' }, label: { en: 'Working languages', zh: '工作语言' } },
] as const;

export const quickFacts = [
  { key: { en: 'Role', zh: '角色' }, value: { en: 'Java Architect / Tech Lead / Full-Stack Engineer / Ops Engineer', zh: 'Java 架构师 / 技术负责人 / 全栈工程师 / 运维工程师' } },
  { key: { en: 'Years of experience', zh: '工作年限' }, value: { en: '14+', zh: '14 年+' } },
  { key: { en: 'Open to', zh: '接受形式' }, value: { en: 'Full-time / Contract', zh: '全职 / 业务委托' } },
  { key: { en: 'Education', zh: '学历' }, value: { en: 'B.S. Hainan University', zh: '海南大学 · 本科' } },
] as const;

export type Product = {
  name: string;
  href: string;
  image: string;
  imageAlt: string;
  meta: { en: string; zh: string };
  description: { en: string; zh: string };
  tech: string[];
  reverse?: boolean;
  external?: boolean;
};

export const products: Product[] = [
  {
    name: '茉莉 CRM',
    href: site.moliCrm,
    image: '/photos/moli-crm.jpg',
    imageAlt: '茉莉 CRM 管理系统',
    meta: { en: 'Personal · CRM admin · Live', zh: '个人项目 · CRM 管理 · 已上线' },
    description: {
      en: 'Moli-project-distribute is a distributed microservices stack built on RBAC and front/back separation—Spring Cloud and Spring Cloud Alibaba on the backend, with API gateway, service discovery and config, RPC/HTTP calls, auth, and persistence.',
      zh: '茉莉项目微服务（moli-project-distribute）是一套基于 RBAC 权限系统设计，前后端分离，后端使用 Spring Cloud 全家桶 + Spring Cloud Alibaba 构建的分布式微服务项目，涵盖统一网关、服务注册与配置、RPC/HTTP 服务调用、权限认证、数据持久化等常见企业级能力。',
    },
    tech: ['Vue', 'Element UI', 'Spring Cloud', 'Spring Cloud Alibaba'],
    external: true,
  },
  {
    name: 'BioScope3D',
    href: 'https://wu-jinsen.com/bioscope3d/',
    image: '/projects/bioscope3d-cover.svg',
    imageAlt: 'BioScope3D 3D gallery',
    meta: { en: 'Personal · 3D gallery · Live', zh: '个人项目 · 3D 画廊 · 已上线' },
    description: {
      en: 'Interactive 3D model gallery: cell biology, starships, robots, and planetary scenes. A side lab for WebGL exploration and immersive UI.',
      zh: '交互式 3D 模型画廊：细胞生物、星舰、机器人与行星场景。个人实验项目，探索 WebGL 与沉浸式界面。',
    },
    tech: ['WebGL', 'Three.js', 'TypeScript'],
    external: true,
    reverse: true,
  },
  {
    name: 'QuestionFlow',
    href: site.questionFlow,
    image: '',
    imageAlt: 'QuestionFlow exam system',
    meta: { en: 'Personal · Exam system · Live', zh: '个人项目 · 考试系统 · 已上线' },
    description: {
      en: 'Online exam and question-bank practice. Load question sets, run drills, and review answers in the browser.',
      zh: '在线考试与题库练习系统，支持加载题库、刷题练考与答案回顾，浏览器即用。',
    },
    tech: ['JavaScript', 'HTML', 'GitHub Pages'],
    external: true,
  },
  {
    name: '街角美食',
    href: site.streetCornerFood,
    image: '/projects/scf-cover.svg',
    imageAlt: '街角美食 Street Corner Food',
    meta: { en: 'Personal · Food & cities · Live', zh: '个人项目 · 街角寻味 · 已上线' },
    description: {
      en: 'Street-by-street food guides—how cities taste and breathe. Live weather, local flavors, and corner eats, starting with Haikou.',
      zh: '拐进街角寻味，看食物与城市如何一起呼吸。实况天气、本地风味与街角小馆，从海口出发。',
    },
    tech: ['Astro', 'TypeScript'],
    external: true,
    reverse: true,
  },
];

export const skillColumns = [
  {
    id: 'lang',
    title: { en: 'Languages', zh: '编程语言' },
    items: ['Java', 'Scala', 'SQL', 'JavaScript', 'Vue'],
  },
  {
    id: 'backend',
    title: { en: 'Backend', zh: '后端' },
    items: [
      'Spring Boot / Cloud',
      'Spring Cloud Alibaba',
      'Dubbo · Nacos',
      'MyBatis · MyBatis-Plus',
      'Kafka · RabbitMQ',
    ],
  },
  {
    id: 'data',
    title: { en: 'Data & Infra', zh: '数据与基础设施' },
    items: [
      '阿里云 · 腾讯云',
      'Linux · Shell',
      'Hadoop · Hive · Flink',
      'Spark · DataX · Dolphin',
      'MySQL · Redis · MongoDB',
      'ClickHouse · ELK',
      'Jenkins · GitLab · Sonar',
    ],
  },
  {
    id: 'practice',
    title: { en: 'Practices', zh: '工程实践' },
    items: [
      { en: 'Microservices migration', zh: '微服务改造' },
      { en: 'Data warehouse design', zh: '数仓架构设计' },
      { en: 'Team leadership', zh: '带过团队' },
      { en: 'DevOps & CI/CD', zh: 'DevOps 与 CI/CD' },
      { en: 'Solo ops & deploys', zh: '独立做运维和上线' },
      { en: 'Performance tuning', zh: '性能调优' },
    ],
  },
  {
    id: 'ai',
    title: { en: 'AI', zh: 'AI' },
    items: ['Claude', 'Codex', 'Cursor'],
  },
] as const;

