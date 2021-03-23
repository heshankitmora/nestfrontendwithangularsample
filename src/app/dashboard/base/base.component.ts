import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {DefaultQuestionState} from '../../store/question/question.states';
import {QuestionAnswerAction, QuestionListAction, UserQuestionAnswerAction} from '../../store/question/actions/question.actions';
import {takeUntil} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  questionResponse: any;
  quesitonSuccess: any;
  questionListArr: any[] = [];
  questionForm: FormGroup;
  userAnswers: any[] = [];
  userAnswersQuestions: any[] = [];
  userData: any;
  answerDateData: any;
  answerSuccess: any;
  successRate: any;
  failureRate: any;

  private ngUnsubscribe = new Subject();


  constructor(
    private questionStateStore: Store<DefaultQuestionState>,
    private router: Router
  ) { }

  ngOnInit(): void {

    if (localStorage.getItem('tokenData') && localStorage.getItem('tokenData') !== '') {
      this.userData = JSON.parse(atob(localStorage.getItem('tokenData')));
      this.questionStateStore.dispatch(new QuestionListAction());
      if (!this.userData?.accessToken) {
        this.router.navigateByUrl('/');
      }
    } else {
      this.router.navigateByUrl('/');
    }
    this.questionResponse = this.questionStateStore.select('questionState').pipe(takeUntil(this.ngUnsubscribe)).subscribe(questionData => {
      if (questionData['question']?.questionList) {
        this.questionListArr = questionData['question']?.questionList;
      } else if (questionData['question']?.questionAnswer) {
        this.questionStateStore.dispatch(new UserQuestionAnswerAction(this.userData?.id));
      } else if (questionData['question']?.userAnswers) {
        this.answerDateData = questionData['question']?.userAnswers;
        this.answerSuccess = this.answerDateData?.useranswers;

        console.log(this.answerSuccess);
        let totalQuestions = this.answerSuccess.length;
        let correctAnswers = 0;

        this.answerSuccess.map(answers => {
          if (answers?.answercorrect === 1) {
            correctAnswers++;
          }
        });
        this.successRate = (correctAnswers / totalQuestions) * 100;
        this.failureRate = 100 - this.successRate;
      }
    });
  }

  answerSelected(event: any, questionAnswer, question) {
    if (question?.questiontype && question?.questiontype !== 0) {

    } else if (question?.questiontype && question?.questiontype !== 0) {

    } else {

    }
    if (this.userAnswers.length > 0) {

      if (!this.userAnswersQuestions.includes(question?._id)) {
        this.userAnswers.push({question: question, answer: questionAnswer});
        this.userAnswersQuestions.push(question?._id);
      }
    } else {
      this.userAnswers.push({question: question, answer: questionAnswer});
      this.userAnswersQuestions.push(question?._id);
    }
  }

  resetAnswers() {
    this.userAnswersQuestions = [];
    this.userAnswers = [];
  }

  selectedAnswersSave() {
    console.log(this.userAnswers);
    let answerIds = [];
    this.userAnswers.map(data => {
      answerIds.push(data?.answer?._id);
    });
    let answerData = {answerids: answerIds};
    console.log(this.userData);
    let postData = {userid: this.userData?.id, questionAnswer: answerData};
    this.questionStateStore.dispatch(new QuestionAnswerAction(postData));
  }

}
