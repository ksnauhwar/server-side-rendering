import AUTH_ACTION_TYPES from './auth.types.js';

export default function(state=null,action){
	switch(action.type){
			case AUTH_ACTION_TYPES.FETCH_CURRENT_USER_COMPLETE:
				return action.payload.data || false;
			default:
				return state;
	}
}