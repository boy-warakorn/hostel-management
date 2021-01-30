import {
  SET_BOOKMARK_HOSTELS,
  SET_CURRENT_HOSTEL,
  BOOKMARK_HOSTEL,
  SET_HOSTELS,
  SEARCH_HOSTELS,
} from '../actions/actionTypes';
import { searchObjectByName } from '../../utils/utilities';

const initialState = {
  hostels: null,
  currentHostel: null,
  bookmarkHostels: null,
  searchHostels: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOSTELS: {
      return {
        ...state,
        hostels: action.payload,
      };
    }
    case SET_CURRENT_HOSTEL: {
      if (state.hostels === null) {
        return state;
      }
      const id = action.id;

      const targetHostel = state.hostels.filter((hostel) => id === hostel.id);

      return {
        ...state,
        currentHostel: targetHostel,
      };
    }
    case SET_BOOKMARK_HOSTELS: {
      if (state.hostels === null) {
        return state;
      }
      const bookmarkHostels = state.hostels.filter(
        (hostel) => hostel.isBookmark
      );

      return {
        ...state,
        bookmarkHostels,
      };
    }
    case BOOKMARK_HOSTEL: {
      const targetHostelId = action.id;

      const updatedHostel = state.hostels.map((hostel) =>
        hostel.id === targetHostelId
          ? {
              ...hostel,
              isBookmark: !hostel.isBookmark,
            }
          : hostel
      );

      return {
        ...state,
        hostels: updatedHostel,
      };
    }
    case SEARCH_HOSTELS: {
      const searchName = action.name;
      if (searchName === '') {
        return {
          ...state,
          searchHostels: null,
        };
      }
      const updatedHostels = searchObjectByName(state.hostels, searchName);

      return {
        ...state,
        searchHostels: updatedHostels,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
