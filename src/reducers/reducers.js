import { GET_INFO, FETCHING_DATA, RECEIVE_USER_DATA, fetchingData, receiveUserData, getInfo } from '../actions/actions.js';
import { combineReducers } from 'redux';

const initProfile = {
  name: 'jiavan',
  avatar_url: 'https://avatars.githubusercontent.com/u/6786013?v=3',
  bio: 'this is bio',
};

function profile(state = {}, action) {
  switch (action.type) {
    case GET_INFO:
      return Object.assign({}, state, {
        username: action.username,
      });
    case RECEIVE_USER_DATA:
      return Object.assign({}, state, action.profile);
    default: return state;
  }
}

function isFetchingData(state = false, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return action.fetching;
    default: return state;
  }
}

function username(state = '', action) {
  switch (action.type) {
    case GET_INFO:
      return state = action.username;
    default: return state;
  }
}

const rootReducer = combineReducers({
  isFetchingData,
  username,
  profile,
});

export default rootReducer;
