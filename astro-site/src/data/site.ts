export const site = {
  name: { en: 'Wu Jinsen', zh: '吴锦森' },
  title: {
    en: 'Wu Jinsen | Senior Java Architect · Beijing',
    zh: '吴锦森 | 资深 Java 架构师 · 北京',
  },
  description: {
    en: '14 years building Java backends, microservices, and data platforms. Tech lead experience across e-commerce, fintech, and SaaS in Beijing.',
    zh: '14 年 Java 后端与架构经验，微服务改造、数仓建设、DevOps 体系。北京，带过团队。',
  },
  email: '2998714655@qq.com',
  github: 'https://github.com/wujinsen',
  url: 'https://wujinsen.github.io',
  blog: 'https://wujinsen.github.io/wujinsen-blog',
  cnblogs: 'https://www.cnblogs.com/wujinsen',
  ogImage: 'https://wujinsen.github.io/og-cover.png',
} as const;

export const stats = [
  { num: '14+', label: { en: 'Years in production Java', zh: '生产环境 Java 年限' } },
  { num: '6', label: { en: 'Companies as tech lead', zh: '担任技术负责人公司数' } },
  { num: '3+', label: { en: 'Data platforms built', zh: '主导建设的数据平台' } },
  { num: { en: 'CN · EN', zh: '中 · 英' }, label: { en: 'Working languages', zh: '工作语言' } },
] as const;

export const trustedCompanies = ['马蜂窝', '自如', '阳光金科', '优品酷卖', '纵程科技'] as const;

export const quickFacts = [
  { key: { en: 'Location', zh: '所在地' }, value: { en: 'Beijing, China', zh: '中国 · 北京' } },
  { key: { en: 'Role', zh: '角色' }, value: { en: 'Java Architect / Tech Lead', zh: 'Java 架构师 / 技术负责人' } },
  { key: { en: 'Years of experience', zh: '工作年限' }, value: { en: '14+', zh: '14 年+' } },
  { key: { en: 'Open to', zh: '接受形式' }, value: { en: 'Full-time / Contract', zh: '全职 / 业务委托' } },
  { key: { en: 'Education', zh: '学历' }, value: { en: 'B.S. Hainan University', zh: '海南大学 · 本科' } },
  { key: { en: 'Blog', zh: '博客' }, value: { en: '/wujinsen-blog', zh: '/wujinsen-blog' }, href: site.blog },
  { key: { en: 'GitHub', zh: 'GitHub' }, value: { en: 'github.com/wujinsen', zh: 'github.com/wujinsen' }, href: site.github },
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
};

export const products: Product[] = [
  {
    name: '书山阅读',
    href: '#',
    image: '',
    imageAlt: 'Reading app',
    meta: { en: '2022 · Live · reading app', zh: '2022 · 在线 · 阅读 App' },
    description: {
      en: 'Led microservices migration for the company reading app and internal platforms. Unified auth, DevOps pipeline, and performance tuning across production services.',
      zh: '主导阅读 App 及内部平台微服务化改造，统一权限体系，优化 Jenkins 发布流程，持续进行 JVM 与 SQL 性能调优。',
    },
    tech: ['Java', 'Spring Cloud', 'MySQL', 'Redis', 'Kafka'],
  },
  {
    name: 'CRM / BI Platform',
    href: '#',
    image: '',
    imageAlt: 'BI dashboard',
    meta: { en: '2021 · Team lead · internal SaaS', zh: '2021 · 团队负责人 · 内部 SaaS' },
    description: {
      en: 'Built CRM, store patrol, and BI systems from scratch. Designed the team tech stack, led backend and mini-program delivery, and owned DevOps tooling.',
      zh: '从零搭建 CRM、巡店、BI 系统，主导技术选型与研发体系，带团队完成后端与小程序交付，独立维护 DevOps 工具链。',
    },
    tech: ['Spring Boot', 'Vue', 'MySQL', 'Redis', 'Jenkins'],
    reverse: true,
  },
  {
    name: 'Data Warehouse',
    href: '#',
    image: '',
    imageAlt: 'Data warehouse',
    meta: { en: '2019 · Tech lead · Hadoop stack', zh: '2019 · 技术负责人 · 数仓平台' },
    description: {
      en: 'Architected offline and real-time data warehouse layers. Built Hadoop/Hive pipelines, customized DataX for MongoDB, and established metrics governance.',
      zh: '负责数仓分层与离线/实时平台架构，搭建 HDP 离线集群，二次开发 DataX 支持 MongoDB 抽取，推动指标规范与平台化建设。',
    },
    tech: ['Hadoop', 'Hive', 'Flink', 'Kafka', 'DataX'],
  },
];

export const skillColumns = [
  {
    title: { en: 'Languages', zh: '编程语言' },
    items: ['Java', 'Scala', 'SQL', 'JavaScript', 'Vue'],
  },
  {
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
    title: { en: 'Data & Infra', zh: '数据与基础设施' },
    items: [
      'Hadoop · Hive · Flink',
      'Spark · DataX · Dolphin',
      'MySQL · Redis · MongoDB',
      'ClickHouse · ELK',
      'Jenkins · GitLab · Sonar',
    ],
  },
  {
    title: { en: 'Practices', zh: '工程实践' },
    items: [
      { en: 'Microservices migration', zh: '微服务改造' },
      { en: 'Data warehouse design', zh: '数仓架构设计' },
      { en: 'Team leadership', zh: '研发团队管理' },
      { en: 'DevOps & CI/CD', zh: 'DevOps 与 CI/CD' },
      { en: 'Performance tuning', zh: '性能调优' },
    ],
  },
] as const;
