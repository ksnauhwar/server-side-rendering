import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/redux/rootReducer';
import axios from 'axios';
export default (req) => {
	var axiosInstance = axios.create({
		baseURL:'http://react-ssr-api.herokuapp.com',
		header:{
			cookie:req.get('cookie') || ''
		}
	});
	var store = createStore(rootReducer,{},applyMiddleware(thunk.withExtraArgument(axiosInstance)));
	return store;
}