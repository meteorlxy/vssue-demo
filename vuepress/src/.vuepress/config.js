module.exports = {
  title: 'Vssue Demo',
  description: 'A Vue-powered Issue-based Comment Plugin',

  plugins: [
    ['@vssue/vuepress-plugin-vssue', {
      platform: 'github',
      owner: 'meteorlxy',
      repo: 'vssue-demo',
      clientId: '083b98e0d6526ce0a4a5',
      clientSecret: 'f41adb2b6ae9a79b09cb852e4b8fa58f325af487',
    }],
  ],
}
