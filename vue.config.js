module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                'assets':'@/assets',
                'views':'@/views',
                'components':'@/components'
            }
        }
    },
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 48
              })
            ]
          }
        }
    }
}