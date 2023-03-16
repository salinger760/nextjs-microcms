/* 公開時のサブディレクトリ 　先頭はスラッシュを記述します */
const SUB_DIRECTORY = ''
const CDN = '/'

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? SUB_DIRECTORY : '',
  assetPrefix: isProd ? CDN : '/',
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : '',
  },
  compiler: {
    styledComponents: true,
  },
  trailingSlash: true,
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
