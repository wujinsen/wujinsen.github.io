import { site } from './site';

export const brandMeta = {
  title: {
    en: 'Wu Jinsen | Writing & building production Java',
    zh: '吴锦森 | 写作与构建生产级 Java',
  },
  description: {
    en: 'Essays on distributed systems, production stories, and backend architecture. Senior Java engineer in Beijing.',
    zh: '分布式系统、生产故事与后端架构随笔。北京资深 Java 工程师。',
  },
} as const;

export const brandStats = [
  { num: '14+', label: { en: 'Years in production Java', zh: '生产环境 Java 年限' } },
  { num: { en: 'VuePress', zh: 'VuePress' }, label: { en: 'Personal blog', zh: '个人博客' } },
  { num: '3D', label: { en: 'BioScope3D side lab', zh: 'BioScope3D 实验项目' } },
  { num: { en: 'CN · EN', zh: '中 · 英' }, label: { en: 'Writing languages', zh: '写作语言' } },
] as const;

export const brandFeatured = {
  href: site.blog,
  tag: { en: 'Featured · Architecture · Java', zh: '推荐 · 架构 · Java' },
  title: {
    en: 'Microservices migration without the keynote slides.',
    zh: '微服务改造：那些 keynote 里不会讲的事。',
  },
  dek: {
    en: 'What fourteen years of splitting monoliths in Beijing actually looks like: auth boundaries, release trains, and the week the whole cluster went quiet.',
    zh: '在北京做了十四年单体拆分之后，真实的样子：权限边界、发布列车，以及整个集群突然安静下来的那一周。',
  },
  byline: [
    { en: 'On moli-vuepress', zh: '发布于 moli-vuepress' },
    { en: 'Also on CNBlogs', zh: '博客园同步' },
  ],
  quote: {
    en: 'The hardest part was not the framework. It was convincing everyone that "done" means running in production, not merged to main.',
    zh: '最难的不是框架选型，而是让所有人接受：「完成」指在生产环境跑起来，而不是 merge 到 main。',
  },
} as const;

export const brandTopics = [
  {
    featured: true,
    name: { en: 'Distributed systems, honestly.', zh: '分布式系统，老实说。' },
    desc: {
      en: 'Trade-offs, postmortems, and the parts of CAP that do not fit in a slide. Written from production, not whiteboards.',
      zh: '权衡、复盘、以及 CAP 定理里 PPT 装不下的部分。写于生产环境，而非白板。',
    },
    meta: { en: 'Microservices · Kafka · Spring Cloud', zh: '微服务 · Kafka · Spring Cloud' },
  },
  {
    name: { en: 'Production stories.', zh: '来自生产环境的故事。' },
    desc: {
      en: 'Real incidents, real fixes, real shame. Stories you tell after the Slack channel quiets down.',
      zh: '真实的事故、真实的修复、真实的难堪。Slack 频道安静下来之后才敢讲的故事。',
    },
    meta: { en: 'Jenkins · JVM · SQL tuning', zh: 'Jenkins · JVM · SQL 调优' },
  },
  {
    name: { en: 'Data platforms.', zh: '数据平台。' },
    desc: {
      en: 'Hive layers, Flink pipelines, and metrics APIs that teams actually query on Monday morning.',
      zh: 'Hive 分层、Flink 链路，以及团队周一早上真的会查的指标 API。',
    },
    meta: { en: 'Hive · Flink · ClickHouse', zh: 'Hive · Flink · ClickHouse' },
  },
] as const;

export const brandEssays = [
  {
    href: site.blog,
    date: '2026 · 03',
    read: { en: 'Blog', zh: '博客' },
    cat: { en: 'Architecture', zh: '架构' },
    title: {
      en: 'Splitting a monolith when the business still ships weekly',
      zh: '业务仍周更时，如何拆分单体',
    },
    dek: {
      en: 'Bounded contexts, strangler fig, and the release process that survived the migration.',
      zh: '限界上下文、绞杀者模式，以及撑过迁移的发布流程。',
    },
  },
  {
    href: site.cnblogs,
    date: '2026 · 01',
    read: { en: 'CNBlogs', zh: '博客园' },
    cat: { en: 'DevOps', zh: 'DevOps' },
    title: {
      en: 'Cutting Jenkins deploy time on a legacy Java stack',
      zh: '在 legacy Java 栈上压缩 Jenkins 发布时间',
    },
    dek: {
      en: 'Parallel stages, artifact reuse, and saying no to manual smoke tests.',
      zh: '并行 stage、制品复用，以及对人工冒烟测试说 no。',
    },
  },
  {
    href: site.blog,
    date: '2025 · 11',
    read: { en: 'Blog', zh: '博客' },
    cat: { en: 'Data', zh: '数据' },
    title: {
      en: 'ODS to metrics API: a warehouse layer that teams use',
      zh: '从 ODS 到指标 API：团队真的会用的数仓分层',
    },
    dek: {
      en: 'Why we stopped at three layers and how Flink jobs got names people remember.',
      zh: '为什么停在三层，以及怎样给 Flink 任务起团队记得住的名字。',
    },
  },
  {
    href: site.blog,
    date: '2025 · 09',
    read: { en: 'Blog', zh: '博客' },
    cat: { en: 'Career', zh: '职业' },
    title: {
      en: 'Fourteen years of Java in Beijing. What stayed, what did not.',
      zh: '在北京写了十四年 Java。什么留下来，什么没有。',
    },
    dek: {
      en: 'Tech lead scope, team size, and the quiet work of keeping systems boring.',
      zh: '技术负责人边界、团队规模，以及让系统保持「无聊」的幕后工作。',
    },
  },
] as const;

export const brandBeliefs = [
  {
    title: { en: 'Boring beats clever, in production.', zh: '生产环境里，无聊总是赢过聪明。' },
    body: {
      en: 'A system anyone can change at 3 a.m. beats one that wins a Twitter thread.',
      zh: '一个让所有人凌晨三点都能放心修改的系统，比一个能在推特上引爆讨论的系统更有价值。',
    },
  },
  {
    title: { en: 'Specifics over slogans.', zh: '比起口号，我更信任细节。' },
    body: {
      en: 'One detailed war story beats ten generic best-practice posts. Truth lives in the detail.',
      zh: '一篇细节翔实的战记，胜过十篇泛泛而谈的最佳实践。真相只活在细节里。',
    },
  },
  {
    title: { en: 'Engineering is culture, not a stack.', zh: '工程是一种文化，不是技术栈。' },
    body: {
      en: 'The same Spring Boot project means different things in e-commerce, fintech, and internal SaaS. Code is the smaller half.',
      zh: '同一个 Spring Boot 项目在电商、金融与内部 SaaS 里是完全不同的两件事。代码只是较小的一半。',
    },
  },
] as const;

export const brandProjects = [
  {
    name: 'BioScope3D',
    href: 'https://wujinsen.github.io/bioscope3d/',
    mark: 'B',
    dek: {
      en: 'Interactive 3D gallery: cells, starships, robots, and worlds. A WebGL lab on GitHub Pages.',
      zh: '交互式 3D 画廊：细胞、星舰、机器人与世界。托管在 GitHub Pages 的 WebGL 实验。',
    },
    stats: { en: 'Personal · WebGL · Live', zh: '个人项目 · WebGL · 已上线' },
  },
  {
    name: 'Moli VuePress',
    href: site.blog,
    mark: 'M',
    dek: {
      en: 'Trilingual tech blog (CN / EN / JA) on VuePress. Essays on Java, data, and production.',
      zh: 'VuePress 三语技术博客（中 / 英 / 日）。Java、数据与生产环境相关文章。',
    },
    stats: { en: 'Blog · VuePress · moli-vuepress', zh: '博客 · VuePress · moli-vuepress' },
  },
  {
    name: 'CNBlogs',
    href: site.cnblogs,
    mark: '园',
    dek: {
      en: 'Long-running mirror for Chinese readers. Same voice, different home.',
      zh: '面向中文读者的长期镜像站点。同样的内容，不同的入口。',
    },
    stats: { en: 'Mirror · cnblogs.com/wujinsen', zh: '镜像 · cnblogs.com/wujinsen' },
  },
] as const;

export const brandPress = [
  { label: 'GitHub', href: site.github },
  { label: 'VuePress', href: site.blog },
  { label: 'CNBlogs', href: site.cnblogs },
  { label: 'BioScope3D', href: 'https://wujinsen.github.io/bioscope3d/' },
] as const;
