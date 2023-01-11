import {AlbumCoverWarp} from "components/album-cover/style";
import React, {memo} from 'react';

export default memo(
    function AlbumCover(props) {
        const { info, size = 120, width = 153, bgp = '-845px'} = props

        return (
            <AlbumCoverWarp size={size} width={width} bgp={bgp}>
                <div className='album-image'>
                    <img src={info.imageUrl} alt=""/>
                    <a href="" className='cover image_cover'>{info.author}</a>
                </div>
                <div className='album-info'>
                    <div className='name text-nowrap'>{info.albumName}</div>
                    <div className='artist text-nowrap'>{info.author}</div>
                </div>
            </AlbumCoverWarp>
        )
    }
)