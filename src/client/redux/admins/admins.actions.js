import ADMINS_ACTION_TYPES from "./admins.types.js";

export function fetchAdmins() {
  return async function (dispatch, getState, api) {
    var res = await api.get("/admins");
    dispatch({
      type: ADMINS_ACTION_TYPES.FETCH_ADMINS_SUCCESS,
      data: res,
    });
  };
}
