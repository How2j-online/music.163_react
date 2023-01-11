import React, {memo} from 'react';

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight
} from './style';
import {shallowEqual, useSelector} from "react-redux";
import HwPlayerLyric from './children-views/player-lyric';

export default memo(
    function HYPlayer() {
        const { currentSong } = useSelector (state => ({
            currentSong: state.getIn(['player', 'currentSong']), // 歌曲信息
        }), shallowEqual);

        return (
            <PlayerWrapper>
                <div className="content wrap-v2">
                    <PlayerLeft>
                        <HwPlayerLyric lyric={currentSong?.lrc?.lyric} songTime={currentSong?.dt}/>
                    </PlayerLeft>
                    <PlayerRight>
                        <h2>HYSimiPlaylist</h2>
                        <h2>HYSimiSong</h2>
                        <h2>Download</h2>
                    </PlayerRight>
                </div>
            </PlayerWrapper>
        )
    })
