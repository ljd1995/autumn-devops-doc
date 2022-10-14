import { defineConfig } from 'vitepress'

export default defineConfig({
  // 网站标题
  title: "Autumn DevOps",
  // 网站描述
  description: "Autumn DevOps",
  lang: "zh-CN",
  lastUpdated: true,
  cleanUrls: "without-subfolders",

  markdown: {
    headers: {
      level: [0, 0],
    },
  },

  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/ljd1995/autumn-devops-doc/edit/main/docs/:path",
      text: "为此页提供修改建议",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ljd1995/autumn-devops" },
    ],

    footer: {
      message: "MIT Licensed",
      copyright: "Copyright © 2022-present Jackless",
    },
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav: createNav(),
    sidebar: createSidebar(),
  },
});

function createNav() {
  return [
    {
      text: "指南",
      link: "/guide/",
      items: [
        {
          text: "指南",
          link: "/guide/introduction",
        },
        {
          text: "深入",
          link: "/dep/icon",
        },
        {
          text: "其他",
          link: "/other/faq",
        },
      ],
    },
    {
      text: "相关链接",
      items: [
        {
          text: "预览",
          link: "https://github.com/ljd1995/autumn-devops",
        },
        {
          text: "前端源码",
          link: "https://github.com/ljd1995/autumn-devops-web",
        },
        {
          text: "后端源码",
          link: "https://github.com/ljd1995/autumn-devops",
        },
        {
          text: "文档源码",
          link: "https://github.com/ljd1995/autumn-devops-doc",
        },
      ],
    },
  ];
}

function createSidebar() {
  return {
    "/": [
      {
        text: "指南",
        items: [
          {
            text: "介绍",
            link: "/guide/introduction",
          },
          {
            text: "环境准备",
            link: "/guide/environment",
          },
          {
            text: "安装",
            link: "/guide/install",
          },
          {
            text: "项目配置",
            link: "/guide/settings",
          },
          {
            text: "部署",
            link: "/guide/deploy",
          },
        ],
      },
      {
        text: "深入",
        items: [
          {
            text: "架构设计",
            link: "/dep/design",
          },
          {
            text: "Web终端操作",
            link: "/dep/term",
          },
          {
            text: "Web数据库操作",
            link: "/dep/db",
          },
          {
            text: "CICD插件",
            link: "/dep/cicd",
          },
          {
            text: "作业执行器",
            link: "/dep/job",
          },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "常见问题",
            link: "/other/faq",
          },
          {
            text: "常见疑点",
            link: "/other/doubt",
          },
          {
            text: "相关项目",
            link: "/other/project",
          },
        ],
      },
    ],
  };
}
