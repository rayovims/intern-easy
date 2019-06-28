import { combineReducers } from 'redux';

const createIdealCandidateReducer = (state =[], action) => {
    switch (action.type) {
        case "CREATE_IDEAL_CANDIDATE":
            return action.payload;
        default: 
            return state;
    }
}

const getMatchingCandidatesReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_MATCHING_CANDIDATES":
            return action.payload;
        default: 
            return state;
    }
}

const selectedCandidateReducer = (state = [], action) => {
    switch (action.type) {
        case "SELECTED_CANDIDATE":
            return [...state, action.payload];
            
        default:
            return state;
    }
} 

export default combineReducers({
    createIdealCandidateReducer,
    getMatchingCandidatesReducer,
    selectedCandidateReducer
})