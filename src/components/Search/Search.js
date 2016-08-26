import React, { Component, PropTypes } from 'react';
import './Search.less';

export default class Search extends Component {

  handleClick() {
    const node = this.refs.username;
    const text = node.value.trim();
    this.props.fetchUserInfo(text);
    node.value = '';
  }

  render() {
    return (
      <div className='search-box'>
        <input type='text' ref='username' required></input>
        <button onClick={() => this.handleClick()}>{this.props.isFetchingData ? 'Fetching' : 'Search'}</button>
      </div>
    );
  }
}
