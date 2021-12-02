const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', '..', dir)
}

module.exports = {
  base: process.env.VUE_APP_DOCS_BASE,
  title: 'docs',
  description: 'A vue component framework',
  markdown: {
    lineNumbers: true
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator',
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'guide' },
          { text: 'Component', link: '/component/', ariaLabel: 'component' }
        ],
        algolia: {},
        sidebar: [{
          title: '组件',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/component/Button',
            '/component/Icon',
          ]
        }, {
          title: 'others',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/component/others/Dialog',
          ]
        }]
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器',
        selectText: '选择语言',
        label: '简体中文',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: '指南', link: '/zh/guide/', ariaLabel: '指南' },
          { text: '组件', link: '/zh/component/', ariaLabel: '组件' }
        ],
        algolia: {},
        sidebar: [{
          title: '组件',   // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/zh/component/Button',
          ]
        }, {
          title: 'others',   // 必要的
          // path: '/zh/component/others/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/zh/component/others/Dialog',
          ]
        }]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@src': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('docs')
      }
    }
  }
}
