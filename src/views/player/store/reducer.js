import * as actionTypes from './constants';
import {Map} from 'immutable';

const defaultState = Map({
    currentSong: {},
    currentPlayTime: ''
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TO_PLAYER:
            return state.set('currentSong', action.currentSong);
        case actionTypes.CHANGE_TO_CURRENT_TIME:
            return state.set('currentPlayTime', action.currentPlayTime)
        default:
            return state;
    }
}

export default reducer;