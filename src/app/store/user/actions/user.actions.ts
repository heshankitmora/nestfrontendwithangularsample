import {Action} from '@ngrx/store';

export enum UserActions {
  USER_LOGIN = '[User Login] Action',
  USER_LOGIN_SUCCESS = '[User Login] Action Success',
  USER_LOGIN_FAILURE = '[User Login] Action Failure'
}

export class UserLogin implements Action {
  readonly type = UserActions.USER_LOGIN;
  constructor(public payload: any) {
  }
}

export class UserLoginSuccess implements Action {
  readonly type = UserActions.USER_LOGIN_SUCCESS;
  constructor(public payload: any) {
  }
}

export class UserLoginFailure implements Action {
  readonly type = UserActions.USER_LOGIN_FAILURE;
  constructor(public payload: any) {
  }
}

export type All =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFailure;

