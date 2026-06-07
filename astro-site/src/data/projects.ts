import { site } from './site';

export type SideProject = {
  title: { en: string; zh: string };
  href?: string;
  static?: boolean;
  mark: string;
  image?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'contain';
  /** Opens full-size QR in a dialog; keeps card thumbnail at 16:9 like peers */
  qrExpand?: boolean;
  dek?: { en: string; zh: string };
  stats?: { en: string; zh: string };
};

export const blogCards: SideProject[] = [
  {
    title: { en: 'Personal blog', zh: '个人博客' },
    href: site.blog,
    mark: 'M',
    image: '/photos/pikaqiu.jpg',
    imageAlt: 'Detective Pikachu',
    dek: {
      en: 'blog.wu-jinsen.com · VuePress',
      zh: 'blog.wu-jinsen.com · VuePress',
    },
  },
  {
    title: { en: 'CNBlogs', zh: '博客园' },
    href: site.cnblogs,
    mark: '园',
    image: '/photos/137552159.jpg',
    imageAlt: 'CNBlogs',
    dek: {
      en: 'CNBlogs · wujinsen',
      zh: '博客园 · wujinsen',
    },
  },
  {
    title: { en: 'CSDN', zh: 'CSDN' },
    href: site.csdn,
    mark: 'C',
    dek: {
      en: 'blog.csdn.net/u012638544',
      zh: 'blog.csdn.net/u012638544',
    },
  },
  {
    title: { en: 'WeChat', zh: '微信公众号' },
    static: true,
    mark: '微',
    image: '/photos/wechat-moli-qr.png',
    imageAlt: 'WeChat Official Account QR code for moli tech sharing',
    imageFit: 'contain',
    qrExpand: true,
    dek: {
      en: 'moli tech · tap to enlarge',
      zh: 'moli技术分享 · 点击放大扫码',
    },
  },
];

export const photoCards: SideProject[] = [
  {
    title: { en: 'Tuchong', zh: '图虫' },
    href: site.tuchong,
    mark: '摄',
    image: '/photos/wukong.jpg',
    imageAlt: 'Goku figure photography',
    dek: { en: 'Right eye on the world', zh: '右眼看世界' },
  },
];

export const sideProjects: SideProject[] = [
  {
    title: { en: 'Moli CRM', zh: '茉莉 CRM' },
    href: site.moliCrm,
    mark: 'C',
    image: '/photos/moli-crm.jpg',
    imageAlt: 'Moli CRM admin dashboard preview',
    dek: {
      en: 'moli-project-distribute: RBAC microservices on Spring Cloud Alibaba.',
      zh: '茉莉项目微服务（moli-project-distribute）：RBAC、Spring Cloud Alibaba 分布式微服务。',
    },
    stats: { en: 'Personal · Live', zh: '个人项目 · 已上线' },
  },
  {
    title: { en: 'BioScope3D', zh: 'BioScope3D' },
    href: 'https://wu-jinsen.com/bioscope3d/',
    mark: 'B',
    image: '/projects/bioscope3d-cover.svg',
    imageAlt: 'BioScope3D cell watercolor preview',
    dek: {
      en: 'WebGL gallery: cells, starships, robots. Personal lab on GitHub Pages.',
      zh: 'WebGL 画廊：细胞、星舰、机器人。GitHub Pages 上的个人实验。',
    },
    stats: { en: 'Personal · Live', zh: '个人项目 · 已上线' },
  },
  {
    title: { en: 'QuestionFlow', zh: 'QuestionFlow' },
    href: site.questionFlow,
    mark: 'Q',
    dek: {
      en: 'Online exam and question-bank practice on GitHub Pages.',
      zh: '在线考试与题库练习系统，部署于 GitHub Pages。',
    },
    stats: { en: 'Personal · Live', zh: '个人项目 · 已上线' },
  },
  {
    title: { en: 'Street Corner Food', zh: '街角美食' },
    href: site.streetCornerFood,
    mark: '食',
    image: '/projects/scf-cover.svg',
    imageAlt: 'Street Corner Food corner map motif',
    dek: {
      en: 'Food, weather, and city corners—starting with Haikou.',
      zh: '街角寻味、实况天气与城市故事，从海口出发。',
    },
    stats: { en: 'Personal · Live', zh: '个人项目 · 已上线' },
  },
  {
    title: { en: 'Moli VuePress', zh: 'Moli VuePress' },
    href: site.blog,
    mark: 'M',
    image: '/photos/pikaqiu.jpg',
    imageAlt: 'Detective Pikachu',
    dek: {
      en: 'Built with VuePress; docs written in Markdown. CN / EN / JA.',
      zh: '基于 VuePress 构建，使用 Markdown 撰写文档。中 / 英 / 日。',
    },
    stats: { en: 'Blog · blog.wu-jinsen.com', zh: '博客 · blog.wu-jinsen.com' },
  },
  {
    title: { en: 'CNBlogs', zh: 'CNBlogs' },
    href: site.cnblogs,
    mark: '园',
    image: '/photos/137552159.jpg',
    imageAlt: 'CNBlogs',
    dek: {
      en: 'CNBlogs profile for Chinese readers.',
      zh: '博客园个人主页。',
    },
    stats: { en: 'CNBlogs · wujinsen', zh: '博客园 · wujinsen' },
  },
];
