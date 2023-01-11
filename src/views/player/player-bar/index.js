import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {Control, Operator, PlayerBarWrapper, PlayInfo,} from './style'
import {NavLink} from "react-router-dom";
import {Slider} from "antd";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getToPlayerAction, changeToCurrentTime} from '@/views/player/store/actionCreators'
import {formatDate} from '@/utils/format-utils'

export default memo(
    function HwPlayerBar() {

        // props and state
        const [isPlaying, setIsPlaying] = useState(false); // 是否正在播放
        const [currentTime, setCurrentTime] = useState(0); // 当前播放时间
        const [progress, setProgress] = useState(0);  // 当前进度条
        const [isChangeTime, setIsChangeTime] = useState(false) // 是否正在拖动进度条
        const [bufferPro, setBufferPro] = useState(0) // 缓冲进度

        // reducer hooks
        const { currentSong } = useSelector(state => ({
            currentSong: state.getIn(['player', 'currentSong']), // 歌曲信息
        }), shallowEqual);
        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getToPlayerAction(null));  // 发起网络获取歌曲详情
        }, [dispatch]);

        useEffect(() => {  // 设置歌曲播放地址
            audioRef.current.src = currentSong.songUrl;
        }, [currentSong])


        // other hooks
        const audioRef = useRef();
        const playSong = useCallback(() => {  // 歌曲播放
            isPlaying ? audioRef.current?.pause() : audioRef.current?.play(null);
            setIsPlaying(!isPlaying); // 控制歌曲播放
        }, [isPlaying])

        // other handle
        const songTime = currentSong.dt; // 歌曲总时长
        const durationTime = formatDate(songTime, 'mm:ss'); // 歌曲总时长格式化
        const showCurrentTime = formatDate(currentTime, 'mm:ss'); // 当前播放时间格式化

        const picUrl = currentSong.al && currentSong.al.picUrl; // 歌曲图片
        const singerName = currentSong.ar && currentSong.ar[0].name;  // 歌手名字
        const songName = currentSong.name; // 歌曲名字

        // other handleMethod
        const timeUpdate = (e) => {  // 歌曲播放进度
            const timeUpdateTime = e.target.currentTime;
            if (!isChangeTime) {
                const progress = timeUpdateTime * 1000 / (songTime / 100);
                setCurrentTime(timeUpdateTime * 1000)
                setProgress(progress)
            }
            // 获取缓存进度条
            let bufferTime = 0;
            let buffered = e.target.buffered;
            if (buffered.length !== 0) {
                bufferTime = buffered.end(buffered.length - 1);
                setBufferPro(bufferTime * 1000 / (songTime / 100))
            }
            dispatch(changeToCurrentTime(timeUpdateTime))
        }

        const sliderChange = useCallback((value) => {  // 歌曲时间拖动
            setIsChangeTime(true)
            let sliderChangeTime = songTime / 100 * value
            setCurrentTime(sliderChangeTime)
            setProgress(value)
        }, [songTime])

        const sliderAfterChange = useCallback((value) => {  // 修改歌曲播放时间
            const sliderTime = value / 100 * songTime / 1000
            audioRef.current.currentTime = sliderTime
            setCurrentTime(sliderTime * 1000)
            setIsChangeTime(false)
        }, [songTime])

        const handleMusicEnded = () => {
            setIsPlaying(false)
        }

        // 返回jsx
        return (
            <PlayerBarWrapper className="sprite_player">
                <div className="content wrap-v2">
                    <Control className="sprite_player" isPlaying={isPlaying}>
                        <button className="sprite_player prev"></button>
                        <button
                            className="sprite_player play"
                            onClick={() => playSong()}
                        ></button>
                        <button className="sprite_player next"></button>
                    </Control>
                    <PlayInfo sliderWidth={bufferPro}>
                        <div className='image'>
                            <NavLink to="/discover/player">
                                <img src={picUrl} alt=""/>
                            </NavLink>
                        </div>
                        <div className='info'>
                            <div className='song'>
                                <span className='song-name'>{songName}</span>
                                <a href="#/" className='singer-name'>{singerName}</a>
                            </div>
                            <div className='progress'>
                                <Slider
                                    tooltip={{ open: false }}
                                    value={progress}
                                    step={0.1}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange}
                                />
                                <div className='time'>
                                    <span className='now-time'>{showCurrentTime}</span>
                                    <span className='divider'>/</span>
                                    <span className='duration'>{durationTime}</span>
                                </div>
                            </div>
                        </div>
                    </PlayInfo>
                    <Operator>
                        <div className='left'>
                            <button className='sprite_player btn favor'></button>
                            <button className='sprite_player btn share'></button>
                        </div>
                        <div className='right sprite_player'>
                            <button className='sprite_player btn volume'></button>
                            <button className='sprite_player btn loop'></button>
                            <button className='sprite_player btn playlist'></button>
                        </div>
                    </Operator>
                    <audio
                        ref={audioRef}
                        onTimeUpdate={event => timeUpdate(event)}
                        onEnded={() => handleMusicEnded()}
                    ></audio>
                </div>
            </PlayerBarWrapper>
        )
    }
)