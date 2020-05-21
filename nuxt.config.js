module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "hellopixely",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
      },
      { type: "text/css/javascript" },
      {
        hid: "description",
        name: "description",
        content: "Functional website for hellopixely"
      }
    ],
    buildModules: [
      ['@nuxtjs/google-analytics', {
        id: 'UA-155537906-2'
      }]
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },

  // router: {
  //   // base: "/staging/signup/"
  //   base: "/pixform/"
  // },

  /*
   ** Global CSS
   */
  plugins: [{src:"~plugins/drift.js", mode:'client'}],
  css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],

  /*
   ** Build configuration
   */
  build: {
    vendor: ["jquery", "vee-validate", "gsap", "moment"],
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
