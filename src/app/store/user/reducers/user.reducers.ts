import {UserActions, All} from '../actions/user.actions';
import {User} from '../../../model/user';

export interface UserStates {
  userData: User | null;
  userLoginData: any | null;
  error: string | null;
}

export const initialUserStates: UserStates = {
  userData: null,
  userLoginData: null,
  error: null
};

export function defaultUserReducer(state = initialUserStates, action: All) {
  switch (action.type) {
    case UserActions.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        userData: null,
        userLoginData: action.payload,
        error: null
      };
    }
    case UserActions.USER_LOGIN_FAILURE: {
      return {
        ...state,
        userData: null,
        userLoginData: null,
        error: action.payload

      };
    }
    default: {
      return state;
    }

  }

}
