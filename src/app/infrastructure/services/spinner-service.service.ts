import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const TIMEOUT = 2000;


@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  private subject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  returnAsObservable() {
    return this.subject.asObservable();
  }

  show() {
    setTimeout(() => {
      this.subject.next(true);
    }, 0)
  }

  hide() {
    setTimeout(() => {
      this.subject.next(false);
    }, TIMEOUT)
  }
}