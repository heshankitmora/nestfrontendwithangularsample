import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardRouting} from './dashboard.routing';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {QuestionEffects} from '../store/question/effects/question.effects';
import {questionReducers} from '../store/question/question.states';
import {QuestionService} from '../service/question/question.service';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRouting),
    EffectsModule.forFeature([QuestionEffects]),
    StoreModule.forFeature('questionState', questionReducers)
  ],
  declarations: [BaseComponent, DashboardComponent, HeaderComponent, FooterComponent],
  providers: [QuestionService]
})
export class DashboardModule { }
