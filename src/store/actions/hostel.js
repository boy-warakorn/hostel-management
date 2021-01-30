import {
  SET_CURRENT_HOSTEL,
  SET_BOOKMARK_HOSTELS,
  SET_HOSTELS,
  BOOKMARK_HOSTEL,
  SEARCH_HOSTELS,
} from './actionTypes';
import axios from 'axios';

const baseURL = 'https://4c9c4241-644c-4184-b1f4-da319a15d70b.mock.pstmn.io';

export const fetchHostels = () => {
  return (dispatch) => {
    axios
      .get(`${baseURL}/hotel`)
      .then((res) => {
        dispatch(setHotels(res.data[0].hotels));
      })
      .catch((err) => console.log(err));
  };
};

export const setHotels = (hostels) => {
  return {
    type: SET_HOSTELS,
    payload: hostels,
  };
};

export const setCurrentHotel = (id) => {
  return {
    type: SET_CURRENT_HOSTEL,
    id,
  };
};
export const setBookmarkHostels = () => {
  return {
    type: SET_BOOKMARK_HOSTELS,
  };
};
export const bookmarkHostel = (id) => {
  return {
    type: BOOKMARK_HOSTEL,
    id,
  };
};

export const searchHostels = (name, isBookmark) => {
  return {
    type: SEARCH_HOSTELS,
    payload: {
      name,
      isBookmark,
    },
  };
};
