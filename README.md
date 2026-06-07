# 个人网站 · 高保真 UI · 全部方案

> 面向：10+ 年 Java 工程师，定位东京，求职目标 = 欧美企业 + 日本企业 + 中文圈影响力

---

## 文件总览

### 主线 1：极简商务风（Vercel / Linear / Stripe 风）
全部使用同一套设计语言（黑白克制、Inter 字体、卡片化），通过**模块组合 + 内容编排**的差异，分化出三个目标完全不同的版本。

| 文件 | 定位 | 一句话 |
|------|------|--------|
| [`v1-minimal.html`](./v1-minimal.html) | **中性 · 平衡版** | 简历 + 作品 + 博客全都顾到，最稳妥的"全能型"个人主页 |
| [`v1a-brand.html`](./v1a-brand.html) | **个人品牌版** | 创作者主页，主推 Newsletter 订阅，强调观点与影响力 |
| [`v1b-jobseeker.html`](./v1b-jobseeker.html) | **求职版** | 求职诉求全公开，CTA 是「下载简历 + 预约面试」 |

### 主线 2：中国现代互联网风（即刻 / 飞书 / Ant Design 风）
| 文件 | 定位 |
|------|------|
| [`v2-chinese.html`](./v2-chinese.html) | 中文 IP 个人品牌站，渐变蓝紫主色，含微信/知乎/即刻多平台触点 |

> 所有页面均为单文件 HTML，零依赖，双击即开。全部支持 **EN / 中** 双语切换（右上角胶囊按钮 + URL `?lang=zh` 参数 + localStorage 记忆）。

---

## 三个极简商务风变体的核心差异

| 维度 | **v1-minimal · 中性版** | **v1a-brand · 个人品牌** | **v1b-jobseeker · 求职** |
|------|--------------------------|---------------------------|----------------------------|
| **核心问题它在回答** | 「我是谁、我做过什么」 | 「我相信什么、我在思考什么」 | 「为什么应该立刻雇我」 |
| **主 CTA** | Get in touch | **Subscribe (Newsletter)** | **Download CV + Schedule a call** |
| **首屏第一行** | "Senior Java Engineer building distributed systems…" | "I write about what production teaches you when no one's watching." | **"Available from April 2026"** 顶部绿灯横幅 + 大字 |
| **核心数据** | 年限 / 微服务数 / 产品 / 语言 | **订阅数 / 文章数 / GitHub Stars / 演讲数** | **¥4.2B/day / 99.99% uptime / 8 人团队 / 云成本-38%** |
| **字体氛围** | Inter（中性） | **Inter + Fraunces serif（编辑部 / 杂志感）** | Inter（更紧凑、信息密集） |
| **签名色** | 黑白 + hover 蓝 | **墨红 #c1432e**（一抹手写感的作者色） | **品牌蓝 #2563eb**（信任 / 专业） |
| **独家模块** | Trusted by / Quick facts | **Featured essay 大字号 / What I believe 信条墙 / On stage & podcasts / Featured in 媒体墙 / Newsletter 订阅表单** ×2 | **Top status banner 顶部档期条 / Availability card 一览卡 / What I'm looking for 三栏诉求 / Impact 量化战绩 / 详细 Work experience 时间线 / References 推荐信 ×3 / 预约面试日历 mock / Quick facts 表格** |
| **作品集呈现** | 3 个完整卡片，中等权重 | 缩为「Also building」次要佐证位 | 缩为「Selected projects」简短证据位 |
| **博客呈现** | 4 篇文字列表 | **Featured essay 大块 + 写作分类 + 4 篇文章网格 + 信条墙 + 演讲 + 媒体墙** | 不展示（求职页不分流注意力） |
| **联系方式** | 居中三按钮 | 文末大字 Newsletter 订阅 | 「Schedule a 30-min intro call」+ 真实可点击的时间槽 mock |

---

## 方案 A · 个人品牌版（v1a-brand）

### 设计理念
"**Show up like an author, not an applicant.**"  
当一个工程师同时是创作者，主页要传达的不是「我可以被雇佣」，而是「跟着我能学到东西、值得订阅我的思考」。这一版彻底**反求职化** —— 没有「找工作」字样，没有 quick facts，没有 visa status。取而代之的是：

- **手写感的 logo 印章**（墨红色 W 章）
- **大号 Fraunces 衬线斜体的 hero 短句**：像一本独立杂志的卷首语
- **作者简介行**（头像 + 名字 + "read by 2,400+ engineers weekly"）—— 直接复刻 Substack / Medium / Bear Blog 的作者陈列
- **首屏顶部就有订阅表单** + 文末有更大的订阅 CTA（两次转化机会）
- **Featured essay 模块**：把一篇代表作做成杂志大跨页式的特别展示，含 pull quote 黑色卡片
- **What I write about 主题分类**（3 大主题 + 文章数）
- **What I believe 信条墙**：3 条工程信条 + 罗马数字 i. ii. iii.，墨黑底配红字
- **On stage & podcasts**：演讲 / 播客经历，日期 + 标题 + 场地分栏
- **Featured in 媒体墙**：HN / Java Weekly / InfoQ / dev.to / 掘金 / The Changelog 等
- **No tracking, no ads** 的 footer 声明（独立创作者的态度）

### 适用场景
- 你在中长期目标里把"个人影响力"当作和"职位 title"同等重要的资产
- 你已经在写 Newsletter / Substack / 公众号，想用主页转化订阅
- 你想被欧美科技社区（HN / dev.to / The Pragmatic Engineer 圈）注意到
- 投欧美顶级技术公司（Stripe / Vercel / Datadog / GitHub）时挂在签名 / LinkedIn —— 招聘官第一眼判断「这人有 voice、有 ownership」
- 也很适合做**会议演讲者主页** / **Podcast 嘉宾介绍页**

---

## 方案 B · 求职版（v1b-jobseeker）

### 设计理念
"**Remove every reason to not call me.**"  
当你正处于求职窗口期（半年内），主页的唯一目标是把「招聘官 / 猎头 / Hiring Manager 的犹豫」压到最低。这一版每一处都在主动**消除疑虑** —— 档期、签证、薪资、语言、推荐信、可面试时段，一切前置摊开。

- **顶部绿灯横幅**："Open to work · Available from April 1, 2026 · Schedule a 30-min intro call →" —— 整站 z-index 最高，永远在屏顶
- **Hero 强 CTA 双按钮**：Download CV（主） + Schedule intro call（次）
- **Availability at a glance 一览卡**（首屏右侧）：6 行信息 —— 入职日期、通知期、级别、地点、薪资期望、是否搬家 —— **包括期望薪资** ¥14M–¥18M（敢公开报价是最强信号）
- **Impact at a glance 四象量化战绩**：¥4.2B/day · 99.99% · 8 engineers · −38% cloud cost。每个数字下面给具体上下文
- **What I'm looking for 三栏诉求**：The role / The setup / Compensation，每一栏都明确列出"接受"与"谢绝"的细则
- **Work experience 详细时间线**：4 段经历，每段都有 scope（团队规模 / 汇报对象）+ 4 条带量化指标的 bullet（用蓝色加粗 metric）+ 技术栈 pills
- **References 推荐信 ×3**：每张卡片含一段真实风格的引言 + 推荐人头像 + 关系标注（MANAGER · 2 YRS）。说明完整版会在初次通话后递交
- **Skills with years 诚实深度**：每个技能后面跟年份 + 进度条（10 年为满刻度），强调诚实
- **Schedule a call 预约模块**：黑色卡片 + 模拟的 Calendly 时间槽（6 个可选时间），消除"还要不要约一下"的最后摩擦
- **Quick facts 表格**：10 行细节，从 visa、language、NDA、background check 到 references availability，**全部前置**

### 适用场景
- 你**未来 3–6 个月内一定要换工作**，需要全力以赴
- 适合发给：猎头、内推朋友、LinkedIn 主动联系的招聘官、Wantedly / Bizreach 投递时的备注链接、邮件签名
- 适合公司类型：日本中大型科技公司、东京欧美外企、远程 startup
- 这一版**特别适合配合主动出击的求职策略** —— 你给猎头写邮件时挂这个链接，转化率会比挂普通简历 PDF 高很多
- 不要常态化挂在 LinkedIn 上当主站，**只在密集求职期开放**（求职成功就藏起来 / 替换回 v1-minimal）

---

## 推荐使用策略

### 阶段化部署（强烈推荐）

按你当前的人生阶段，灵活切换主推版本：

| 阶段 | 主推版本 | 部署方式 |
|------|---------|---------|
| **平时 / 不急着换** | `v1-minimal.html`（中性版） | 部署到 `jinsenwu.com` 主域 |
| **密集求职期（3–6 月）** | `v1b-jobseeker.html`（求职版） | 替换到主域 OR 放在 `jinsenwu.com/hire-me` |
| **长期个人品牌建设** | `v1a-brand.html`（个人品牌版） | 放在主域 OR `jinsenwu.com/writing` |
| **国内 / 中文圈引流** | `v2-chinese.html`（中国互联网风） | 放在 `jinsenwu.cn` 或 `jinsenwu.com/cn` |

### 并行部署（如果你想全都要）
所有 4 个 HTML 都在同一个站点上线：
```
jinsenwu.com           → v1-minimal.html       (默认 / 全能主页)
jinsenwu.com/writing   → v1a-brand.html        (创作者主页 / Subscribe 引流)
jinsenwu.com/hire-me   → v1b-jobseeker.html    (求职专用 / 私下分享链接)
jinsenwu.cn            → v2-chinese.html       (中文圈 / 国内大厂海外团队)
```
然后在 v1-minimal 的导航里放一个「Writing」链接到 brand 版，footer 放一个「为招聘官准备的链接」给 jobseeker 版。

---

## Phase 1 · Astro 站点（已迁移 v1-minimal）

主站已迁移至 [`astro-site/`](./astro-site/)，基于 **Astro 6 + TypeScript**。

```bash
cd astro-site
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 astro-site/dist/
npm run preview  # 预览构建结果
```

| 路径 | 说明 |
|------|------|
| `astro-site/src/pages/index.astro` | 首页入口 |
| `astro-site/src/data/site.ts` | 站点文案、项目、博客、技能（改内容从这里入手） |
| `astro-site/src/components/` | 各区块组件（Nav / Hero / About / Work …） |
| `astro-site/src/styles/global.css` | v1-minimal 全套样式 |
| `astro-site/public/resume.pdf` | 简历 PDF 下载 |

**已接入真实信息**：吴锦森、14 年经验、GitHub / 博客 / 邮箱、简历 PDF。

**保留能力**：EN / 中 双语切换（`?lang=zh` + localStorage）、scroll reveal、Path A 视觉。

### 部署结构（GitHub Pages）

| URL | 内容 | 仓库 |
|-----|------|------|
| `https://wu-jinsen.com/` | Astro 个人主页（本仓库 `astro-site`） | `wujinsen/wujinsen.github.io` |
| `https://wu-jinsen.com/moli-vuepress/` | 博客 | 同域子路径 |

两个仓库**并存**：个人站占根路径，博客占 `/wujinsen-blog/` 子路径（GitHub Project Pages）。`#writing` 区为**外链**跳转博客，不内嵌。

**部署个人站**：
1. 推送 `master` 分支，GitHub Actions 自动构建 `astro-site` 并发布到 Pages
2. Settings → Pages → Source 选 **GitHub Actions**
3. Settings → Pages → Custom domain 填 **`wu-jinsen.com`**，并勾选 Enforce HTTPS
4. DNS：`www` CNAME → `wujinsen.github.io`；根域名 `@` 用 GitHub Pages 的 A 记录或 Cloudflare CNAME 拉平
5. 构建产物含 `public/CNAME`（已配置为 `wu-jinsen.com`）

HTML 原型仍保留在根目录（`v1-minimal.html` 等）供对照。

---

## 下一步

请告诉我：

1. **要直接开发吗？** 我可以把任意一版（或所有版）拆成 Next.js / Astro 项目，加上：
   - Markdown 写博客 / `_posts/*.md` 自动生成列表
   - i18n 三语切换（已有中英，可补日语）
   - 暗色模式
   - RSS 输出 / 邮件订阅集成（Buttondown / ConvertKit）
   - SEO + sitemap
   - 部署到 Cloudflare Pages / Vercel
2. **需要进一步调整吗？** 比如：
   - 换某一版的配色 / 字体
   - 加 / 减某个模块
   - 微调文案风格
   - 加日语版
3. **要替换成真实内容吗？** 把你的真实姓名、产品名、博客链接、社交账号、工作履历发我，我直接替换 placeholder

随时说，我接着干。
