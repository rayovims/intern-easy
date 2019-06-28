import backend from '../components/apis/backend';

export const createIdealCandidate = candidate => async dispatch => {
    const response = await backend.post('/create/candidate', candidate);
    dispatch({type: "CREATE_IDEAL_CANDIDATE", payload: response.data});
}

export const getMatchingCandidates = () => async dispatch => {
    const response = await backend.get("/get/matching/candidates");
    dispatch({type: "GET_MATCHING_CANDIDATES", payload: response.data});
}