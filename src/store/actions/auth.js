import { LOGIN, REGISTER, LOGOUT } from './actionTypes';

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const register = () => {
  return {
    type: REGISTER,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
