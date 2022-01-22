import AUTH_ACTION_TYPES from './auth.types.js';

export default function fetchCurrentUser(){
	return async function(dispatch,getState,api){
		var res = await api.get('/current_user');
		return dispatch({type:AUTH_ACTION_TYPES.FETCH_CURRENT_USER_COMPLETE,payload:res});
	}
	
}