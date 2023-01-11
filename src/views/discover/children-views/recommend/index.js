import React, {memo} from 'react';
import HwTopBanner from './children-component/tob-banner/index'
import HwHotRecommend from './children-component/hot-recommend/index'
import HwNewAlbum from './children-component/new-album/index'
import HwRecRanking from './children-component/recommend-ranking/index'

import {
    RecommendWrapper,
    RecommendRight,
    RecommendLeft,
    Content
} from './style'

function HwRecommend(props) {
    // 获取请求数据
    // const {getToBannerDispatch, topBanners }  = props;
    // useEffect(() => {
    //     getToBannerDispatch();
    // },[getToBannerDispatch]);


    // 返回JSX
    return (
        <RecommendWrapper>
            <HwTopBanner/>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HwHotRecommend/>
                    <HwNewAlbum></HwNewAlbum>
                    <HwRecRanking/>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}

// -----------------第一种方法------------------------
// // 将redux中的数据映射到props中
// const mapStateToProps = state => ({
//     topBanners: state.recommend.toBanners
// })
//
// // 将dispatch映射到props中
// const mapDispatchToProps = dispatch => ({
//     getToBannerDispatch: () => {
//         dispatch(getToBannerAction());
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HwRecommend));
export default memo(HwRecommend);