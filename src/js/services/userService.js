import axios from 'axios';

function login(username, password) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return axios.get(`https://randomuser.me/api/`) //, { user }
    .then(res => {
      console.log("res data", res);

      if(username !== "luis" || password !== "123456"){
        const error = "Username or password is incorrect";
        return Promise.reject(error);
      }

      // store user details and jwt token in local storage to keep user logged in between page refreshes
      const user = {
        username: "luisf144",
        name: "Luis",
        country: "GB",
        totalPoints: 0,
        totalCoins: 0, //TEST TODO:
      };

      localStorage.setItem('user', JSON.stringify(user));

      return user;
  });
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify(user)
  };

  return axios.get(`https://forkify-api.herokuapp.com/api/get?rId=47746`);
  // return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}

function editUser(user) {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  };

  return axios.get(`https://forkify-api.herokuapp.com/api/get?rId=47746`) //, { user }
    .then(res => {
      console.log("res data", res);

      // store user details and jwt token in local storage to keep user logged in between page refreshes
      const user = {
        username: "luisf144",
        name: "Luisf12",
        country: "GB",
        totalPoints: 0,
        totalCoins: 0, //TEST TODO:
      };

      localStorage.setItem('user', JSON.stringify(user));

      return user;
    });
}

function handleResponse(response) {
  console.log("RESPONSE HANDLEE", response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const userService = {
  login,
  register,
  logout,
  editUser
};