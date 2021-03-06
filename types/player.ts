import { ITrack } from './track';

export interface PlayerState {
  active: null | ITrack;
  activeTrackId: null | number;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export enum PlayerActionTypes {
  PLAY = 'PLAYER/PLAY',
  PAUSE = 'PLAYER/PAUSE',
  SET_ACTIVE = 'PLAYER/SET_ACTIVE',
  SET_ACTIVE_TRACK_ID = 'PLAYER/SET_ACTIVE_TRACK_ID',
  SET_DURATION = 'PLAYER/SET_DURATION',
  SET_CURRENT_TIME = 'PLAYER/SET_CURRENT_TIME',
  SET_VOLUME = 'PLAYER/SET_VOLUME',
}

interface PlayAction {
  type: PlayerActionTypes.PLAY;
}

interface PauseAction {
  type: PlayerActionTypes.PAUSE;
}

interface SetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: ITrack;
}

interface SetActiveTrackId {
  type: PlayerActionTypes.SET_ACTIVE_TRACK_ID;
  payload: number;
}

interface SetDurationAction {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}

interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

interface SetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

export type PlayerAction =
  | PlayAction
  | PauseAction
  | SetActiveAction
  | SetActiveTrackId
  | SetDurationAction
  | SetCurrentTimeAction
  | SetVolumeAction;
