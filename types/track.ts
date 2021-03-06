export interface IComment {
  id: string;
  username: string;
  text: string;
}

export interface ITrack {
  id: string;
  name: string;
  artist: string;
  text: string | null;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TracksState {
  tracks: ITrack[];
  error: string;
}

export enum TracksActionTypes {
  FETCH_TRACKS = 'TRACKS/FETCH_TRACKS',
  FETCH_TRACKS_ERROR = 'TRACKS/FETCH_TRACKS_ERROR',
}

interface FetchTracksAction {
  type: TracksActionTypes.FETCH_TRACKS;
  payload: ITrack[];
}

interface FetchTracksErrorAction {
  type: TracksActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
}

export type TracksAction = FetchTracksAction | FetchTracksErrorAction;
