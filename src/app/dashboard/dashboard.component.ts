import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {DefaultQuestionState} from '../store/question/question.states';
import {QuestionListAction} from '../store/question/actions/question.actions';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
