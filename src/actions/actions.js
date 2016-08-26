export const GET_INFO = 'GET_INFO';
export function getInfo(username) {
  return {
    type: GET_INFO,
    username,
  };
}

export const FETCHING_DATA = 'FETCHING_DATA';
export function fetchingData(fetching) {
  return {
    type: FETCHING_DATA,
    fetching,
  };
}

export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA';
export function receiveUserData(profile) {
  return {
    type: RECEIVE_USER_DATA,
    profile,
  };
}

export function fetchUserInfo(username) {
  return function (dispatch) {
    dispatch(fetchingData(true));
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(json => {
      console.log(json);
      return json;
    })
    .then((json) => {
      dispatch(receiveUserData(json))
    })
    .then(() => dispatch(fetchingData(false)))


    // let req = new XMLHttpRequest();
    // req.open('get', `https://www.v2ex.com/api/members/show.json?username=${username}`);
    // req.onload = function load() {
    //   console.log(req.response);
    // }
    // req.onerror = function error() {
    //   console.log('error');
    // }
    // req.send(null);
  };
}
