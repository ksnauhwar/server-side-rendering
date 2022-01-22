import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/users/users.actions';
import {Helmet} from 'react-helmet';

class UserList extends React.Component{
	componentDidMount(){
		this.props.fetchUsers();
	}
	renderUsers(){
		return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
	}
	head(){
		return (
			<Helmet>
					<title>{this.props.users.length.toString()} Users Loaded</title>
					<meta property="og:title" content="User List"/>
			</Helmet>
		);
	}
	render(){
		return (
			<div className="user-list">
				{this.head()}
				Here's a list of users:
				<ul>
					{this.renderUsers()}
				</ul>
			
			</div>
		);
	}
} 

const mapStateToProps = state => ({users:state.users});

function loadData(store){
	return store.dispatch(fetchUsers());
}

export default { 
				component: connect(mapStateToProps,{ fetchUsers })(UserList),
				loadData
			   }