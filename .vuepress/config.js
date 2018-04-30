module.exports = {
  serviceWorker: true,
  title: 'teacha-lessons by syumai',
  description: 'teacha用のレッスン資料集',
  themeConfig: {
    repo: 'syumai/teacha-lessons',
    nav: [
      {
        text: 'HOME',
        link: '/',
      },
      {
        text: '開発環境構築',
        link: '/create-dev-environment/',
      },
      {
        text: 'JS開発環境構築',
        link: '/create-js-dev-environment/',
      },
      {
        text: 'ターミナル操作',
        link: '/terminal-basics/',
      },
      {
        text: 'JavaScript',
        link: '/js-basics/',
      },
      {
        text: 'Vue',
        link: '/vue-basics/',
      },
      {
        text: 'React',
        link: '/react-basics/',
      },
    ],
    sidebar: {
      '/create-dev-environment/': ['', 'mac', 'windows'],
      '/create-js-dev-environment/': [
        '',
        'mac',
        'nvm',
        'windows',
        'nvm-windows',
      ],
      '/terminal-basics/': [''],
      '/js-basics/': ['', 'running-first-program', 'basics-01'],
    },
  },
};
