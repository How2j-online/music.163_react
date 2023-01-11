import * as actionTypes from './constants';
import { getToBanner, getToHotRecommends, getToNewAlbums } from '@/services/recommend';

// 获取轮播图数据
export const getToBannerAction = () => {
    return dispatch => {
        getToBanner().then(res => {
            dispatch(changeToBannerAction(res));
        });
    }
};

// 获取热门推荐数据
export const getToHotRecommendsAction = () => {
    return dispatch => {
        getToHotRecommends().then(res => {
            dispatch(changeHotRecommendsAction(res));
        });
    }
}

// 获取新碟上架数据
export const getToAlbumsAction = () => {
    return dispatch => {
       getToNewAlbums().then(res => {
           dispatch(changeNewAlbumsAction(res));
       })
    }
}


// 将轮播图数据存入redux中
const changeToBannerAction = (res) => ({
    type: actionTypes.CHANGE_TO_BANNER,
    topBanners: res.banner
})

// 将热门推荐数据存入redux中
const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.discoverData
})

// 将新碟上架数据存入redux中
const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUMS,
    newAlbums: res.newAlbumData
})