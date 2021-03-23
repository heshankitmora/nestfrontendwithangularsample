import * as questionReducer from './reducers/question.reducers';
import {createFeatureSelector} from '@ngrx/store';

export interface DefaultQuestionState {
  questionState: questionReducer.QuestionStates;
}

export const questionReducers = {
  question: questionReducer.defaultQuestionReducer
};

export const selectQuestionState = createFeatureSelector<DefaultQuestionState>('questionState');
