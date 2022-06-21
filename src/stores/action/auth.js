import axios from '../../utils/axios';

export const login = form => {
  return {
    type: 'LOGIN',
    payload: axios.post('auth/login', form),
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
    payload: axios.post('auth/logout'),
  };
};
export const setPassword = form => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.post('auth/setPassword/', form),
  };
};
