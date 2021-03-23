import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable()
export class QuestionService {

  constructor(private http: HttpClient) {
  }

  getTokenData() {
    return JSON.parse(atob(localStorage.getItem('tokenData')));
  }

  getAllQuestions(): Observable<any>  {
    let tokenData = this.getTokenData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.access_token}`
      })
    };
    const url = `${environment.apiBaseEndpoint}/question/getall`;
    return this.http.get<any>(url, httpOptions);
  }

  answerQuestion(userData): Observable<any>  {
    let userId = userData.userid;
    let questionAnswer = userData.questionAnswer;
    let tokenData = this.getTokenData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.access_token}`
      })
    };
    const url = `${environment.apiBaseEndpoint}/user/userquestionanswers/${userId}`;
    return this.http.put<any>(url, questionAnswer, httpOptions);
  }

  getUserAnswers(userid): Observable<any>  {
    let tokenData = this.getTokenData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenData.access_token}`
      })
    };
    const url = `${environment.apiBaseEndpoint}/user/getuser/${userid}`;
    return this.http.get<any>(url, httpOptions);
  }

}
