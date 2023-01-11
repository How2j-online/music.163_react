import * as actionTypes from './constants';
import {Map} from 'immutable';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: []
});

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TO_BANNER:
            return state.set('topBanners', action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDS:
            return state.set('hotRecommends', action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUMS:
            return state.set('newAlbums', action.newAlbums);
        default:
            return state;
    }
}

export default reducer;