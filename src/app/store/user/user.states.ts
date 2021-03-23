import * as userReducer from './reducers/user.reducers';
import {createFeatureSelector} from '@ngrx/store';

export interface DefaultUserState {
  userState: userReducer.UserStates;
}

export const userReducers = {
  user: userReducer.defaultUserReducer
};

export const selectUserState = createFeatureSelector<DefaultUserState>('userState');
