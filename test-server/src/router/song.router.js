const Router = require('koa-router');
const songRouter = new Router();
songRouter.prefix('/song');


const {
    getSong,
} = require('../controller/song.controller')



songRouter.get('/getSong', getSong) // 获取歌曲

module.exports = songRouter