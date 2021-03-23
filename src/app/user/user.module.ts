import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {UserRouting} from './user.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserEffects} from '../store/user/effects/user.effects';
import {EffectsModule} from '@ngrx/effects';
import {userReducers} from '../store/user/user.states';
import {StoreModule} from '@ngrx/store';
import {UserService} from '../service/user/user.service';

@NgModule({
  imports: [
    RouterModule.forChild(UserRouting),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature('userState', userReducers)
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [UserService]
})
export class UserModule { }
