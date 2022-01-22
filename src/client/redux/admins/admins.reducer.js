import ADMINS_ACTION_TYPES from './admins.types.js';

export default function(state=[],action){
	switch(action.type){
		case ADMINS_ACTION_TYPES.FETCH_ADMINS_SUCCESS:
			return action.payload.data;
		default:
			return state;
	}
}