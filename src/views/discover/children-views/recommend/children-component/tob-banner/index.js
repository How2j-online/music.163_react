import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getToBannerAction} from "@/views/discover/children-views/recommend/store/actionCreators";

import {
    BannerWrapper,
    BannerControl,
    BannerLeft,
    BannerRight
} from './style';
import { Carousel } from 'antd';


export default memo(
    function HwTopBanner() {
        // 组件内state
        const [currentIndex, setCurrentIndex] = useState(0);

        // 组件和redux关联
        const { topBanners } = useSelector(state => ({
            topBanners: state.getIn(['recommend', 'topBanners'])
        }), shallowEqual);
        const dispatch = useDispatch();

        // hooks
        const bannerRef = useRef();

        useEffect(() => {
            dispatch(getToBannerAction());
        }, [dispatch])
        const bannerChange = useCallback((from, to) => {
            setCurrentIndex(to);
        }, []);

        // 其他业务逻辑
        const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].url);

        // 返回jsx
        return (
            <BannerWrapper bgImage={bgImage}>
                <div className="banner wrap-v2">
                    <BannerLeft>
                        <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
                            {
                                topBanners.map((item, index) => {
                                    return (
                                        <div className="banner-item" key={item.url}>
                                            <img className='image' src={item.url} alt={item.id}/>
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </BannerLeft>
                    <BannerRight></BannerRight>
                    <BannerControl>
                        <button className='btn left' onClick={event => bannerRef.current?.prev()}></button>
                        <button className='btn right' onClick={event => bannerRef.current?.next()}></button>
                    </BannerControl>
                </div>
            </BannerWrapper>
        )
    }
)