import { TracksState, TracksAction, TracksActionTypes } from '../../types/track';

const intitialState: TracksState = {
  tracks: [],
  error: '',
};

export const tracksReducer = (state = intitialState, action: TracksAction): TracksState => {
  const { type, payload } = action;

  switch (type) {
    case TracksActionTypes.FETCH_TRACKS:
      return { ...state, error: '', tracks: payload };
    case TracksActionTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
};
