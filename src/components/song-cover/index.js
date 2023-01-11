import {
    SongsCoverWrapper
} from './style'
import React, {memo} from "react";

export default memo(function HwSongsCover(props) {
    const { info } = props
    return (
        <SongsCoverWrapper>
            <div className="cover-top">
                <img src={info.imageUrl} alt=""/>
                <div className='cover sprite_covor'>
                    <div className='info sprite-covor'>
                        <span>
                            <i className='sprite_icon erji'></i>
                            {info.playCount}
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </div>
            <div className='cover-bottom text-nowrap'>
                {info.title}
            </div>
            <div className='cover-source text-nowrap'>
                {info.songAuthor ? `by ${info.songAuthor}` : ''}
            </div>
        </SongsCoverWrapper>
    )
})