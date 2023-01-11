const getFile = require('../utils/getFile');

const bannerData = getFile('banner.json');
const {discoverData, newAlbumData, rankData} = getFile('discover.json');

class RecommendController {
    getBanner(ctx) {  // 返回轮播图数据
        ctx.body = {
            ...bannerData
        }
    }

    getHotRecommends(ctx) {  // 返回热门推荐数据
        ctx.body = {
            discoverData
        }
    }

    getNewAlbum(ctx) { // 返回新碟上架数据
        ctx.body = {
            newAlbumData
        }
    }

    getTopList(ctx) { // 返回排行榜数据
        ctx.body = {
            ...rankData
        }
    }
}

module.exports = new RecommendController();