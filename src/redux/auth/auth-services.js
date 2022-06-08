import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:3000/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  // NOTE: when we use axios it actually puts the data inside of an object called response.data
  // so, I am going to check if there is data
  // and I am going to set our local storage to the data that will include our token.

  console.log(response.data);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Any function we create that we want to export we're just going to put it in
// authService object. and then we're going to export it as default.

// REMEMBER TO MAKE AN API REQUEST HERE
const mockLogin = (userData) => userData;

const authService = {
  register,
  mockLogin,
};

export default authService;
