const Router = require('koa-router');

const recommendRouter = new Router();
recommendRouter.prefix('/recommend');

const {
    getBanner,
    getHotRecommends,
    getNewAlbum,
    getTopList
} = require('../controller/recommend.controller')

recommendRouter.get('/banner', getBanner) // 轮播图
recommendRouter.get('/hot', getHotRecommends) // 热门推荐
recommendRouter.get('/newAlbum', getNewAlbum) // 新碟上架
recommendRouter.get('/topList', getTopList) // 排行榜

module.exports = recommendRouter