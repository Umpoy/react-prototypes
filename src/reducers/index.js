import { combineReducers } from 'redux';
import clockReducer from './clock_reducers';



export default combineReducers({
    clock: clockReducer
});