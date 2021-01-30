import {
  FETCH_BOOKMARK_HOSTELS,
  FETCH_HOSTELS,
  FETCH_HOSTEL_BY_ID,
  BOOKMARK_HOSTEL,
} from '../actions/actionTypes';

const initialState = {
  hostels: null,
  current_hostel: null,
  bookmark_hostels: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOSTELS: {
      return;
    }
    case FETCH_BOOKMARK_HOSTELS: {
      return;
    }
    case FETCH_HOSTEL_BY_ID: {
      return;
    }
    case BOOKMARK_HOSTEL: {
      return;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
