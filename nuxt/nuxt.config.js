export default {
  plugins: [
    { src: '~/plugins/vssue', mode: 'client' }
  ],

  build: {
    transpile: [
      '(@vssue|vssue)\/((?!\/node_modules\/).)*\.js$',
    ],
  },
}
