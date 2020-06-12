const withSass = require("@zeit/next-sass")
// const withFonts = require('nextjs-fonts')
const withPWA = require('next-pwa')
const prod = process.env.NODE_ENV === 'production'
// module.exports = withSass(withFonts({
//  webpack(config, options) {
//    const rules = [{
//      test: /\.scss$/,
//      use: [
//         {
//           loader: "postcss-loader",
//           options: {
//           ident: "postcss",
//           plugins: []
//         }
//       },
//      { loader: "sass-loader" }
//   ]}
// ]
// return {
//    ...config,
//    module: { 
//      ...config.module, 
//      rules: [...config.module.rules, ...rules] 
//    }
//   }
// }}))

module.exports = withSass(withPWA({
    devIndicators: {
        autoPrerender: false,
    },
    pwa: {
        disable: prod ? false : true,
        dest: 'public'
    }
}))