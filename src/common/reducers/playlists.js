import {CREATE_PLAYLIST_STARTED, CREATE_PLAYLIST_FINISHED} from '../actions/playlists';

const search = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PLAYLIST_STARTED:
      return {loading: true, list: []};
    case CREATE_PLAYLIST_FINISHED:
      return {loading: false, list: action.payload.playlists};
    default:
      return state;
  }
};

export default search;
