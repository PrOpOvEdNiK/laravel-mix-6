const mix = require('laravel-mix');
const SVGSpritemap = require("svg-spritemap-webpack-plugin");

mix.webpackConfig({
    plugins: [
        new SVGSpritemap("src/svg/**/*.svg", {
            output: {
                filename: "svg/sprite.svg",
                svgo: {
                    plugins: [{
                        removeStyleElement: true
                    }]
                }
            },
            sprite: {
                prefix: "svg-",
                gutter: 10,
                generate: {
                    title: false,
                }
            },
            styles: {
                filename: "src/sass/include/sprite-svg.scss",
                format: 'data',
                keepAttributes: true,
                variables: {
                    sprites: 'svg-sprites',
                    sizes: 'svg-sizes',
                    variables: 'variables',
                    mixin: 'svg-sprite'
                }
            }
        })
    ]
});

mix.setPublicPath('./public')
    .js('./src/js/app.js', './public/assets/scripts')
    .sass('./src/sass/app.scss', './public/assets/styles');
