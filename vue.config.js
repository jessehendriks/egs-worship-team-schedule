module.exports = {
  pwa: {
    name: 'EGS Muziekrooster',
    themeColor: '#ffffff',
    msTileColor: '#4b4b4b',
    iconPaths: {
      msTileImage: 'img/icons/mstile-150x150.png'
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}
