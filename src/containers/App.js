import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Search, Profile } from '../components';
import { fetchUserInfo, getInfo } from '../actions/actions.js';
import './App.less';

function mapStateToProps(state) {
  return {
    profile: state.profile,
    isFetchingData: state.isFetchingData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserInfo: (username) => dispatch(fetchUserInfo(username))
  };
}

class App extends Component {
  render() {
    const { fetchUserInfo, profile, isFetchingData } = this.props;
    return (
      <div className='container'>
        <Search fetchUserInfo={fetchUserInfo} isFetchingData={isFetchingData} />
        {'name' in profile ? <Profile profile={profile} isFetchingData={isFetchingData} /> : ''}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
