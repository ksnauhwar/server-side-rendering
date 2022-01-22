import { combineReducers } from 'redux';
import usersReducer from './users/users.reducer';
import authReducer from './auth/auth.reducer';
import adminsReducer from './admins/admins.reducer';

export default combineReducers({
	users:usersReducer,
	auth:authReducer,
	admins:adminsReducer
});