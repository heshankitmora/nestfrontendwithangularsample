import {Injectable} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {
  UserActions,
  UserLogin,
  UserLoginSuccess,
  UserLoginFailure
} from '../actions/user.actions';

import { exhaustMap } from 'rxjs/operators';
import {UserService} from '../../../service/user/user.service';
import {SubscriptionService} from '../../../service/shared/subscription.service';

@Injectable()
export class UserEffects {

  constructor(private action: Actions,
              private userService: UserService,
              private subService: SubscriptionService
  ) {
  }

  @Effect()
  UserLoginEffect: Observable<any> = this.action.pipe(ofType(UserActions.USER_LOGIN))
    .map((action: UserLogin) => action.payload)
    .pipe(exhaustMap(payload => {
      return this.userService.userLogin(payload).pipe(takeUntil(this.subService.unsubscribe$))
        .map((loginUser) => {
          console.log(loginUser);
          return new UserLoginSuccess(loginUser);
        })
        .catch((error) => {
          console.log('error', error);
          return Observable.of(new UserLoginFailure({ error: error }));
        });
    }));


  @Effect({dispatch: false})
  UserLoginSuccessEffect: Observable<any> = this.action.pipe(
    ofType(UserActions.USER_LOGIN_SUCCESS),
    tap((userData) => userData));

  @Effect({dispatch: false})
  UserLoginFailureEffect: Observable<any> = this.action.pipe(
    ofType(UserActions.USER_LOGIN_FAILURE),
    tap((error) => {
    }));
}
