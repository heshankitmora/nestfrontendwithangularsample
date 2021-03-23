import {Injectable} from '@angular/core';
import {take, takeUntil, tap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import {
  QuestionActions,
  QuestionListAction,
  QuestionListActionSuccess,
  QuestionListActionFailure,
  QuestionAnswerAction,
  QuestionAnswerActionSuccess,
  QuestionAnswerActionFailure, UserQuestionAnswerAction, UserQuestionAnswerActionSuccess, UserQuestionAnswerActionFailure
} from '../actions/question.actions';

import {exhaustMap} from 'rxjs/operators';
import {SubscriptionService} from '../../../service/shared/subscription.service';
import {QuestionService} from '../../../service/question/question.service';

@Injectable()
export class QuestionEffects {

  constructor(
    private action: Actions,
    private questionService: QuestionService,
    private subService: SubscriptionService
  ) {
  }

  @Effect()
  QuestionListEffect: Observable<any> = this.action.pipe(ofType(QuestionActions.QUESTION_LIST))
    .map((action: QuestionListAction) => {
    })
    .pipe(exhaustMap(payload => {
      return this.questionService.getAllQuestions().pipe(takeUntil(this.subService.unsubscribe$))
        .map((questionList) => {
          console.log(questionList);
          return new QuestionListActionSuccess(questionList);
        })
        .catch((error) => {
          console.log('error', error);
          return Observable.of(new QuestionListActionFailure({error: error}));
        });
    }));


  @Effect({dispatch: false})
  QuestionListSuccessEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_LIST_SUCCESS),
    tap((userData) => userData));

  @Effect({dispatch: false})
  QuestionListFailureEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_LIST_FAILURE),
    tap((error) => {
    }));

  @Effect()
  QuestionAnswerEffect: Observable<any> = this.action.pipe(ofType(QuestionActions.QUESTION_ANSWER))
    .map((action: QuestionAnswerAction) => action.payload)
    .pipe(exhaustMap(payload => {
      return this.questionService.answerQuestion(payload).pipe(takeUntil(this.subService.unsubscribe$))
        .map((questionList) => {
          console.log(questionList);
          return new QuestionAnswerActionSuccess(questionList);
        })
        .catch((error) => {
          console.log('error', error);
          return Observable.of(new QuestionAnswerActionFailure({error: error}));
        });
    }));


  @Effect({dispatch: false})
  QuestionAnswerSuccessEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_ANSWER_SUCCESS),
    tap((userData) => userData));

  @Effect({dispatch: false})
  QuestionAnswerFailureEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_ANSWER_FAILURE),
    tap((error) => {
    }));

  @Effect()
  QuestionUserAnswerEffect: Observable<any> = this.action.pipe(ofType(QuestionActions.QUESTION_ANSWER_USER))
    .map((action: UserQuestionAnswerAction) => action.payload)
    .pipe(exhaustMap(payload => {
      return this.questionService.getUserAnswers(payload).pipe(takeUntil(this.subService.unsubscribe$))
        .map((questionList) => {
          console.log(questionList);
          return new UserQuestionAnswerActionSuccess(questionList);
        })
        .catch((error) => {
          console.log('error', error);
          return Observable.of(new UserQuestionAnswerActionFailure({error: error}));
        });
    }));


  @Effect({dispatch: false})
  QuestionUserAnswerSuccessEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_ANSWER_USER_SUCCESS),
    tap((userData) => userData));

  @Effect({dispatch: false})
  QuestionUserAnswerFailureEffect: Observable<any> = this.action.pipe(
    ofType(QuestionActions.QUESTION_ANSWER_USER_FAILURE),
    tap((error) => {
    }));
}
