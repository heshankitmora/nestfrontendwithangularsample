import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DefaultUserState} from '../../store/user/user.states';
import {Store} from '@ngrx/store';
import {UserLogin} from '../../store/user/actions/user.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userLoginResponse: any;
  loginSuccess: any;

  private ngUnsubscribe = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private userStateStore: Store<DefaultUserState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    if (localStorage.getItem('tokenData') && localStorage.getItem('tokenData') !== '') {
      let userData = JSON.parse(atob(localStorage.getItem('tokenData')));
      if (userData?.accessToken) {
        this.router.navigateByUrl('/dashboard');
      }
    }

    this.userLoginResponse = this.userStateStore.select('userState').pipe(takeUntil(this.ngUnsubscribe)).subscribe(userLoginData => {
      if (userLoginData['user'] && this.userLoginResponse) {
        console.log(userLoginData['user']?.userLoginData);
        this.loginSuccess = userLoginData['user']?.userLoginData;
        localStorage.setItem('tokenData', btoa(JSON.stringify(userLoginData['user']?.userLoginData)));
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

  onLoginSubmit() {
    if (this.loginForm?.status === 'VALID') {
      if (this.loginForm?.value) {
        this.userStateStore.dispatch(new UserLogin(this.loginForm?.value));
      }
    }
  }

}
