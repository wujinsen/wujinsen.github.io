import { site } from './site';

export const brandMeta = {
  title: {
    en: 'Wu Jinsen | Java backend notes',
    zh: '吴锦森 | Java 后端笔记',
  },
  description: {
    en: 'Backend architecture, microservices, and data platforms. Published on VuePress, CNBlogs, and CSDN.',
    zh: '后端架构、微服务与数仓。发布于 VuePress、博客园与 CSDN。',
  },
} as const;

export const brandStats = [
  { num: '14+', label: { en: 'Years with Java', zh: 'Java 经验' } },
  { num: { en: 'VuePress', zh: 'VuePress' }, label: { en: 'Main blog', zh: '主博客' } },
  { num: '3D', label: { en: 'BioScope3D lab', zh: 'BioScope3D 实验' } },
  { num: { en: 'CN · EN', zh: '中 · 英' }, label: { en: 'Working languages', zh: '工作语言' } },
] as const;

export const brandFeatured = {
  href: site.blog,
  tag: { en: 'Architecture · Java', zh: '架构 · Java' },
  title: {
    en: 'Monolith splits, release trains, and the week the cluster went quiet.',
    zh: '单体拆分、发布列车，以及集群突然安静下来的那一周。',
  },
  dek: {
    en: 'Fourteen years in e-commerce, fintech, and internal SaaS backends. Auth boundaries, Jenkins pipelines, and what "done" actually means.',
    zh: '十四年电商、金融与内部 SaaS 后端。权限边界、Jenkins 流水线，以及什么叫「真的做完」。',
  },
  byline: [
    { en: 'blog.wu-jinsen.com', zh: 'blog.wu-jinsen.com' },
    { en: 'CNBlogs', zh: '博客园' },
    { en: 'CSDN', zh: 'CSDN' },
  ],
  quote: {
    en: 'Done means running live, not merged to main.',
    zh: '做完是指线上跑起来，不是 merge 到 main。',
  },
} as const;

export const brandTopics = [
  {
    featured: true,
    name: { en: 'Microservices and boundaries', zh: '微服务与边界' },
    desc: {
      en: 'Spring Cloud splits, Kafka wiring, and the release checklist that survived a migration.',
      zh: 'Spring Cloud 拆分、Kafka 接线，以及撑过迁移的发布清单。',
    },
    meta: { en: 'Spring Cloud · Dubbo · Kafka', zh: 'Spring Cloud · Dubbo · Kafka' },
  },
  {
    name: { en: 'Ops & debugging', zh: '运维与排障' },
    desc: {
      en: 'Jenkins speed-ups, JVM tuning, SQL plans, and postmortems worth filing.',
      zh: 'Jenkins 提速、JVM 调优、SQL 执行计划，以及值得存档的复盘。',
    },
    meta: { en: 'Jenkins · JVM · MySQL', zh: 'Jenkins · JVM · MySQL' },
  },
  {
    name: { en: 'Data platforms', zh: '数据平台' },
    desc: {
      en: 'Hive layers, Flink jobs, and metrics APIs the business queries on Monday.',
      zh: 'Hive 分层、Flink 任务，以及业务周一真的会查的指标 API。',
    },
    meta: { en: 'Hive · Flink · ClickHouse', zh: 'Hive · Flink · ClickHouse' },
  },
] as const;

export const brandWritingLinks = [
  {
    href: site.blog,
    source: { en: 'VuePress', zh: 'VuePress' },
    title: { en: 'blog.wu-jinsen.com', zh: 'blog.wu-jinsen.com' },
  },
  {
    href: site.cnblogs,
    source: { en: 'CNBlogs', zh: '博客园' },
    title: { en: 'cnblogs.com/wujinsen', zh: 'cnblogs.com/wujinsen' },
  },
  {
    href: site.csdn,
    source: { en: 'CSDN', zh: 'CSDN' },
    title: { en: 'blog.csdn.net/u012638544', zh: 'blog.csdn.net/u012638544' },
  },
  {
    source: { en: 'WeChat', zh: '微信公众号' },
    title: { en: site.wechatName.en, zh: site.wechatName.zh },
  },
  {
    href: site.tuchong,
    source: { en: 'Tuchong', zh: '图虫' },
    title: { en: 'wujinsen.tuchong.com', zh: 'wujinsen.tuchong.com' },
  },
] as const;

export const brandBeliefs = [
  {
    title: { en: 'Prefer boring systems that stay up.', zh: '线上更倾向「无聊」的系统。' },
    body: {
      en: 'If the on-call engineer can patch it at 3 a.m. without a runbook novel, the design is working.',
      zh: '如果值班同事凌晨三点不用翻长篇 runbook 就能改，说明设计是对的。',
    },
  },
  {
    title: { en: 'Write with specifics.', zh: '写具体细节。' },
    body: {
      en: 'One incident with timestamps beats a list of best practices. Names, configs, and what you rolled back.',
      zh: '一条带时间线的故障记录，胜过十条最佳实践。写清配置、回滚了什么。',
    },
  },
  {
    title: { en: 'Stack is context, not identity.', zh: '技术栈是上下文，不是人设。' },
    body: {
      en: 'The same Spring Boot codebase behaves differently in e-commerce, fintech, and internal SaaS teams.',
      zh: '同一个 Spring Boot 项目在电商、金融与内部 SaaS 团队里，运行方式完全不同。',
    },
  },
] as const;

export { sideProjects as brandProjects } from './projects';

export const brandPress = [
  { label: 'GitHub', href: site.github },
  { label: 'VuePress', href: site.blog },
  { label: 'CNBlogs', href: site.cnblogs },
  { label: 'CSDN', href: site.csdn },
  { label: 'WeChat', href: '/#blog' },
  { label: 'Tuchong', href: site.tuchong },
  { label: 'BioScope3D', href: 'https://wu-jinsen.com/bioscope3d/' },
  { label: 'QuestionFlow', href: site.questionFlow },
  { label: 'Street Corner Food', href: site.streetCornerFood },
  { label: 'Moli CRM', href: site.moliCrm },
] as const;
