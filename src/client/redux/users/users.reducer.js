import {FETCH_USERS} from './users.actions'
export default (state = [],action) => {
	switch(action.type){
		case FETCH_USERS:{
			return action.payload.data;
		}
		default:{
			return state;
		}
	}
	
}