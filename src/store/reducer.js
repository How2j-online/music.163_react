import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '@/views/discover/children-views/recommend/store';
import { reducer as playerReducer } from '@/views/player/store';

const cReducer = combineReducers({
    recommend: recommendReducer,
    player: playerReducer
})

export default cReducer;