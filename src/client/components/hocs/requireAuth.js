import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


function requireAuth(ChildComponent){
	class RequireAuth extends React.Component{	
		render(){
			console.log(this.props);
			switch(this.props.currentAuth){
				case null:{
					return <div>Loading...</div>;
				}
				case false:{
					return <Redirect to="/"/>
				}
				default:
					return <ChildComponent {...this.props} />;
			}
			
		}
	}
	
	const mapStateToProps = ({auth}) => {
		return {currentAuth:auth};
	};
	
	const connectedComponent = connect(mapStateToProps)(RequireAuth);
	
	return connectedComponent;
} 

export default requireAuth;