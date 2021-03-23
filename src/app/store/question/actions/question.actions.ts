import {Action} from '@ngrx/store';

export enum QuestionActions {
  QUESTION_LIST = '[Question List] Action',
  QUESTION_LIST_SUCCESS = '[Question List] Action Success',
  QUESTION_LIST_FAILURE = '[Question List] Action Failure',
  QUESTION_ANSWER = '[Question Answer] Action',
  QUESTION_ANSWER_SUCCESS = '[Question Answer] Action Success',
  QUESTION_ANSWER_FAILURE = '[Question Answer] Action Failure',
  QUESTION_ANSWER_USER = '[Question User Answer] Action',
  QUESTION_ANSWER_USER_SUCCESS = '[Question User Answer] Action Success',
  QUESTION_ANSWER_USER_FAILURE = '[Question User Answer] Action Failure',
}

export class QuestionListAction implements Action {
  readonly type = QuestionActions.QUESTION_LIST;
  constructor() {
  }
}

export class QuestionListActionSuccess implements Action {
  readonly type = QuestionActions.QUESTION_LIST_SUCCESS;
  constructor(public payload: any) {
  }
}

export class QuestionListActionFailure implements Action {
  readonly type = QuestionActions.QUESTION_LIST_FAILURE;
  constructor(public payload: any) {
  }
}

export class QuestionAnswerAction implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER;
  constructor(public payload: any) {
  }
}

export class QuestionAnswerActionSuccess implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER_SUCCESS;
  constructor(public payload: any) {
  }
}

export class QuestionAnswerActionFailure implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER_FAILURE;
  constructor(public payload: any) {
  }
}

export class UserQuestionAnswerAction implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER_USER;
  constructor(public payload: any) {
  }
}

export class UserQuestionAnswerActionSuccess implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER_USER_SUCCESS;
  constructor(public payload: any) {
  }
}

export class UserQuestionAnswerActionFailure implements Action {
  readonly type = QuestionActions.QUESTION_ANSWER_USER_FAILURE;
  constructor(public payload: any) {
  }
}

export type All =
  | QuestionListAction
  | QuestionListActionSuccess
  | QuestionListActionFailure
  | QuestionAnswerAction
  | QuestionAnswerActionSuccess
  | QuestionAnswerActionFailure
  | UserQuestionAnswerAction
  | UserQuestionAnswerActionSuccess
  | UserQuestionAnswerActionFailure;

