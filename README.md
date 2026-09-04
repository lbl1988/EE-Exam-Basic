# 注册电气工程师基础考试2026 - 张工教育专业基础精讲增强版 v2.0

## 核心差异（相对旧站）

旧站专业基础由工控圈等老师零散合并，本站点基于你明确要求的 **张工教育专业基础精讲班五大学科独立合集** 重新组织，做到学科→章→节→知识点四层细粒度：
- 每学科拆分为对应张工教育正式精讲班的章，每章再拆成节，每节下面挂知识点摘要、考频星级、参考分值/题量、典型真题编号和对应视频 BV 号及 P 号锚点。
- 新增 subjects/ 下五个独立学科详情页，学员可以沉浸式学完一科。
- videos.html 张工教育系列改为按学科独立播放器加逐讲 playlist，每讲可单独标记完成度。
- 双方向供配电和发输变电的专业基础题量权重按实际考试区分。
- 完整保留旧站的 local 模式账号、学习进度仪表盘、笔记、跨设备导出导入、移动端 B 站不跳转直放等基础设施。

## 线上部署

本项目保持纯静态，推送到 GitHub 后 Render 直接连仓库，使用根目录 render.yaml，无需 build。Render 自动识别为静态站点，前端探测到 onrender.com 后自动降级为 local 模式。

## 本地预览

```
python -m http.server 8765
```

打开 http://localhost:8765，注册/登录/进度/笔记全可用。

## 项目结构

```
├── index.html                    首页：张工精讲五学科入口+统计+学习进度
├── basic.html                    基础知识：10公共基础+5专业基础科目卡
├── subjects/
│   ├── circuit.html              电路与电磁场 9章→9节→逐讲→视频锚点
│   ├── analog.html               模拟电子技术 11章
│   ├── digital.html              数字电子技术 8章
│   ├── machines.html             电机学
│   └── power.html                电气工程基础
├── videos.html                   视频中心：张工教育5+1+新版电路，播放器+逐讲playlist
├── hot-points.html               高频考点：章节筛选+考频星级筛选
├── guide.html                    报考指南：五科修正+计算器视频
├── plan.html                     备考规划：五学科分配学习周+锚点
├── my-notes.html                 学习笔记
├── share.html                    学友分享
├── css/style.css
├── js/
│   ├── auth.js                   注册/登录/改密/导出导入(local模式)
│   ├── progress.js               学习进度/笔记/分享读写localStorage
│   └── main.js                   方向切换/章节筛选/导航高亮/视频播放器切换
├── data/
│   ├── basic-knowledge.js        10公共基础+5专业基础(双方向)章→节→知识点三级细粒度
│   ├── videos.js                 张工教育6合集+2026新版+姜小白+电教+大熊+真题全量playlist
│   └── hot-points.js             高频考点，每章对应3-5条，含考频/公式/易错点
├── render.yaml
├── package.json
└── README.md
```
