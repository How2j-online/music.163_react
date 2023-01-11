import React, {memo, useEffect, useRef} from 'react';
import {NewAlbumWrapper } from './style';
import HwThemeRecommendHead from '@/components/theme-recommend-head';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getToAlbumsAction} from "@/views/discover/children-views/recommend/store/actionCreators";
import {Carousel} from "antd";
import AlbumCover from "components/album-cover";

export default memo(
    function HwNewAlbum() {
        // redux hooks
        const { newAlbums } = useSelector(state => ({
            newAlbums: state.getIn(['recommend', 'newAlbums'])
        }), shallowEqual);
        const dispatch = useDispatch();

        // other hooks
        const pageRef = useRef()

        useEffect(() => {
            dispatch(getToAlbumsAction());
        }, [dispatch])


        return (
            <NewAlbumWrapper>
                <HwThemeRecommendHead
                    title="新碟上架"
                ></HwThemeRecommendHead>
                <div className='content'>
                    <button
                        className='arrow arrow-left sprite_02'
                        onClick={event => pageRef.current?.prev()}
                    ></button>
                    <div className='album'>
                        <Carousel  ref={pageRef} dots={false}>
                            {
                                newAlbums.map((item, index) => {
                                    return (
                                        <div key={index} className='page'>
                                            {
                                                item.map((item, index) => {
                                                    return (
                                                        <AlbumCover
                                                            key={index}
                                                            info={item}
                                                            size={100}
                                                            width={118}
                                                            bgp="-570px"
                                                        ></AlbumCover>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <button
                        className='arrow arrow-right sprite_02'
                        onClick={event => pageRef.current?.next()}
                    ></button>
                </div>
            </NewAlbumWrapper>
        )
    }
)