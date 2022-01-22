import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import store from "./redux/store";


ReactDOM.hydrate(
<Provider store={store}>
	<BrowserRouter>
		{renderRoutes(Routes)}
	</BrowserRouter>
</Provider>
,document.getElementById("root"));
