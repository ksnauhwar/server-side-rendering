import React from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../redux/admins/admins.actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }
  render() {
    return (
      <ul>
        {this.props.admins.map((admin) => (
          <li key={admin.id}>{admin.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins,
});

const ConnectedPage = connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsPage));

function loadData({ dispatch }) {
  return dispatch(fetchAdmins());
}

export default {
  component: ConnectedPage,
  loadData,
};
