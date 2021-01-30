import {
  FETCH_BOOKMARK_HOSTELS,
  FETCH_HOSTELS,
  FETCH_HOSTEL_BY_ID,
  BOOKMARK_HOSTEL,
} from './actionTypes';

export const fetchHostels = () => {
  return {
    type: FETCH_HOSTELS,
  };
};
export const fetchHostelByID = (id) => {
  return {
    type: FETCH_HOSTEL_BY_ID,
    id,
  };
};
export const fetchBookmarkHostels = () => {
  return {
    type: FETCH_BOOKMARK_HOSTELS,
  };
};
export const bookmarkHostel = (id) => {
  return {
    type: BOOKMARK_HOSTEL,
    id,
  };
};
