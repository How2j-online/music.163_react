import React, {memo, useEffect} from 'react';

import {
    HotRecommendWrapper
} from './style';
import {getToHotRecommendsAction} from '@/views/discover/children-views/recommend/store/actionCreators';
import HwThemeRecommendHead from '@/components/theme-recommend-head';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import HwSongsCover from '@/components/song-cover';

export default memo(
    function HwHotRecommend() {
        // redux hooks
        const { hotRecommends } = useSelector(state => ({
            hotRecommends: state.getIn(['recommend', 'hotRecommends'])
        }), shallowEqual);
        const dispatch = useDispatch();

        // other hooks
        useEffect(() => {
            dispatch(getToHotRecommendsAction());
        }, [dispatch])

        return (
            <HotRecommendWrapper>
                <HwThemeRecommendHead
                    title="热门推荐"
                    keyWords={['华语', '流行', '摇滚', '民谣', '电子']}
                    className="recommend-list"
                ></HwThemeRecommendHead>
                <div className="recommend-list">
                    {
                        hotRecommends.map((item, index) => {
                            return (
                                <HwSongsCover key={index} info={item}></HwSongsCover>
                            )
                        })
                    }
                </div>
            </HotRecommendWrapper>
        )
    }
)