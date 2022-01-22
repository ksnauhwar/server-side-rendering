import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './rootReducer';


var axiosInstance = axios.create({
	baseURL:'/api'
});

var store = createStore(rootReducer,window.INITIAL_STATE,applyMiddleware(thunk.withExtraArgument(axiosInstance)));

export default store;