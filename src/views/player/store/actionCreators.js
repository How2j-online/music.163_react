import * as actionTypes from './constants';
import { getToPlayer  } from "@/services/player";

// 获取歌曲详情
export const getToPlayerAction = (id) => {
    return dispatch => {
        getToPlayer(id).then(res => {
            dispatch(changeToPlayerAction(res));
        });
    }
}

// 将歌曲详情存入redux中
const changeToPlayerAction = (res) => ({
    type: actionTypes.CHANGE_TO_PLAYER,
    currentSong: res
})

// 当前歌曲播放时间
export const changeToCurrentTime = (time) => ({
    type: actionTypes.CHANGE_TO_CURRENT_TIME,
    currentPlayTime:time
})