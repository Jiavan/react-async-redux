import React, { Component, PropTypes } from 'react';
import './Profile.less';

export default class Profile extends Component {

  render() {
    let profile = this.props.profile;
    return (
      <div className='profile'>
        <div className='avatar'>
          <img src={profile.avatar_url} />
          <p className='name'>{profile.name}</p>
        </div>
        <div className='introduce'>
          <ul>
            <li>email: {profile.email}</li>
            <li>created: {profile.created_at}</li>
            <li>location: {profile.location}</li>
            <li>blog: {profile.blog}</li>
            <li>followers: {profile.followers}</li>
            <li>following: {profile.following}</li>
            <li>id: {profile.id}</li>
            <li>repos: {profile.public_repos}</li>
          </ul>
        </div>
      </div>
    );
  }
}
