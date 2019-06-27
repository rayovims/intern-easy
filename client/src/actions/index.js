import backend from '../components/apis/backend';

export const createIdealCandidate = candidate => async dispatch => {
    response = await backend.post('/create/candidate/', candidate);
    console.log(response);
    dispatch({type: "CREATE_IDEAL_CANDIDATE", payload: response.data});
}