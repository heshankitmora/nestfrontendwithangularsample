import {QuestionActions, All} from '../actions/question.actions';
import {User} from '../../../model/user';

export interface QuestionStates {
  questionList: any[] | null;
  questionAnswer: any | null;
  userAnswers: any | null;
  error: string | null;
}

export const initialQuestionStates: QuestionStates = {
  questionList: null,
  questionAnswer: null,
  userAnswers: null,
  error: null
};

export function defaultQuestionReducer(state = initialQuestionStates, action: All) {
  switch (action.type) {
    case QuestionActions.QUESTION_LIST_SUCCESS: {
      return {
        ...state,
        questionList: action.payload,
        questionAnswer: null,
        userAnswers: null,
        error: null
      };
    }
    case QuestionActions.QUESTION_ANSWER_USER_SUCCESS: {
      return {
        ...state,
        questionList: null,
        questionAnswer: null,
        userAnswers: action.payload,
        error: null
      };
    }
    case QuestionActions.QUESTION_ANSWER_SUCCESS: {
      return {
        ...state,
        questionList: null,
        questionAnswer: action.payload,
        userAnswers: null,
        error: null
      };
    }
    case QuestionActions.QUESTION_LIST_FAILURE: {
      return {
        ...state,
        questionList: null,
        questionAnswer: null,
        userAnswers: null,
        error: action.payload

      };
    }
    default: {
      return state;
    }

  }

}
