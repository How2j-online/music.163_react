import {HwPlayerLyricWrapper} from './style'

import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import {parseLyric} from '@/utils/parse-lyric'
import {useSelector} from "react-redux";


export default memo(
    function HwPlayerLyric(props) {
        const {
            lyric, // 歌词
            // songTime  // 毫秒
        } = props;

        // redux hooks
        const {currentPlayTime} = useSelector((state) => ({
            currentPlayTime: state.getIn(['player', 'currentPlayTime'])
        }))

        const [showLyric, setLyric] = useState([]); // 歌词
        const [currentIndex, setCurrentIndex] = useState(0);  // 当前歌词的索引
        const [isScroll, setIsScroll] = useState(true); // 是否滚动

        let lyricBoxRef = useRef();
        let lyricMarkRef = useRef();
        let lyricMarBoxRef = useRef();
        if (lyricBoxRef.current && lyricMarBoxRef.current) {
            // 歌词滚动
            const lyricBoxCur = lyricBoxRef.current;
            const lyricMarBoxCur = lyricMarBoxRef.current;
            lyricMarBoxCur.style.height = lyricBoxCur.offsetHeight + 'px'
        }

        useEffect(() => {
            // 歌词解析
            const lyricArr = lyric && lyric.split('\n');
            let lyricStrArr = []
            if (lyricArr) {
                lyricArr.forEach((item) => {
                    if (item.trim()) {
                        // let lyricStr = item.split(']')[1] && item.split(']')[1].trim()
                        // let lyricPlayTime = item.match(/(?<=\[)(.+?)(?=])/g)[0]
                        let lyricAndTime = parseLyric(item)
                        lyricStrArr.push(lyricAndTime[0])
                    }
                })
                setLyric(lyricStrArr)
            }

        }, [lyric, setLyric, lyricBoxRef, lyricMarBoxRef])

        useEffect(() => { // 获取当前的歌词
            let currentTime = Math.floor(currentPlayTime * 1000) // 当前播放时间

            let i = 0
            for (; i < showLyric.length; i++) { // 找到当前播放的歌词
                if (currentTime < showLyric[i].time) {
                    break
                }
            }
            setCurrentIndex(i - 1)  // 设置当前歌词的索引
            if (i === 1) {
                lyricMarkRef.current.scrollTop = 0
            }
            if (i - 1 !== currentIndex) {  // 设置歌词滚动的偏移量
                if (i > 5 && isScroll) { // 从第6行开始滚动
                    lyricMarkRef.current.scrollTop = 30 * (i - 5)
                }
            }

        }, [currentPlayTime, showLyric, currentIndex,isScroll])


        // other handle
        let timeSetIsScroll = useRef(null)

        const lyricScroll = useCallback((e) => {
            let scrollTop = Math.floor(e.target.scrollTop)
            lyricBoxRef.current.style.transform = `translateY(${-scrollTop}px)`
            if (!isScroll) {
                clearTimeout(timeSetIsScroll.current)
                timeSetIsScroll.current = setTimeout(() => {
                    setIsScroll(true)
                },1000)
            }
        }, [setIsScroll, isScroll])

        const lyricMouser = useCallback((e) => {
            setIsScroll(false)
            if (timeSetIsScroll) {
                clearTimeout(timeSetIsScroll.current)
                timeSetIsScroll.current = setTimeout(() => {
                    setIsScroll(true)
                },1000)
            }
        }, [setIsScroll])

        const lyricMouseout = useCallback((e) => {
            if (!isScroll) setIsScroll(true)
            clearTimeout(timeSetIsScroll.current)
        }, [setIsScroll, isScroll, timeSetIsScroll]);


        return (
            <HwPlayerLyricWrapper scroll={isScroll}>
                <div className='left'>
                    <img src="https://p1.music.126.net/fsOItUd1l2QhrUQwOqui-A==/109951168072540031.jpg?param=130y130"
                         alt=""/>
                    <span className='image_cover image_mark'></span>
                </div>
                <div className='right'>
                    <div className="hd">
                        <div className='sprite_icon2'></div>
                        <div className='song_name'>越来越不懂</div>
                    </div>
                    <div className='author'>
                        <span>歌手：</span>
                        <a href="#/">刘大拿</a>
                    </div>
                    <div className="album">
                        <span>所属专辑：</span>
                        <a href="#/">越来越不懂</a>
                    </div>
                    <div className='button_group'>
                        <a href="#/" className='sprite_button'>
                            <i className='sprite_button'>
                                <span className='sprite_button2'></span>
                                播放
                            </i>
                        </a>
                        <a href="#/" className='sprite_button'>
                            <i className='sprite_button'></i>
                        </a>
                        <a href="#/" className='sprite_button'>
                            <span className='sprite_button'>收藏</span>
                        </a>

                        <a href="#/" className='sprite_button'>
                            <span className='sprite_button'>收藏</span>
                        </a>

                        <a href="#/" className='sprite_button'>
                            <span className='sprite_button'>下载</span>
                        </a>

                        <a href="#/" className='sprite_button'>
                            <span className='sprite_button'>（2719）</span>
                        </a>


                    </div>
                    <div className='lyric_group'>
                        <div className='lyric_mark'
                             onScroll={lyricScroll}
                             onMouseOver={lyricMouser}
                             onMouseOut={lyricMouseout}
                             ref={lyricMarkRef}
                        >
                            <div className='lyric_mark_box' ref={lyricMarBoxRef}></div>
                        </div>
                        <div className='lyric_box' ref={lyricBoxRef}>
                            {
                                showLyric.map((item, index) => {
                                    return (
                                        <p key={index}
                                               className={index === currentIndex ? 'active' : ''}
                                        >{item.content}</p>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </HwPlayerLyricWrapper>
        )
    }
)