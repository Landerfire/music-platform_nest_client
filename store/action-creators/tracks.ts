import axios from 'axios';
import { Dispatch } from 'react';
import { TracksAction, TracksActionTypes } from '../../types/track';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch({
        type: TracksActionTypes.FETCH_TRACKS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: TracksActionTypes.FETCH_TRACKS_ERROR,
        payload: 'Произошла ошибка при загрузке треков',
      });
    }
  };
};
