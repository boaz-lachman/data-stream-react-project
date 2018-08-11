import ActionTypes from "../actions/action-types";


const INITIAL_STATE = {
    filterText: '',
    listData: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.UPDATE_DATA:
            return({...state, listData: action.payload});
        case ActionTypes.CHANGE_FILTER:
            return({...state, filterText: action.payload});
        default:
            return {...state};
    }
}