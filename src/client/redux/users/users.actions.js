
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = function(){
	return async function(dispatch,getState,api){
		var res = await api.get("/users");
		
		dispatch({
			type:FETCH_USERS,
			payload:res
		});
	}
}