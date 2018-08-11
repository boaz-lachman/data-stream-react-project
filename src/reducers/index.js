import { combineReducers } from 'redux';
import StreamReducer from './stream-reducers';

export default combineReducers({
    streamReducer: StreamReducer
});