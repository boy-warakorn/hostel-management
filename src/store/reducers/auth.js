import { LOGIN, REGISTER, LOGOUT } from '../actions/actionTypes';

const initialState = {
  isLogin: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case REGISTER: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLogin: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
