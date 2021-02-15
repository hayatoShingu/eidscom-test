import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment, IPost, IUser } from '../interfaces';

const BASE_URL = "https://jsonplaceholder.typicode.com";

const OPTIONS_INTERCEPT = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', "X-Intercept": "true" }),
};
const OPTIONS_NO_INTERCEPT = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', "X-Intercept": "false" }),
};

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(
    private http: HttpClient,
  ) { }



  //list of all users
  public getAllUsers(doNotInterceptCall?: Boolean): Observable<Array<IUser>> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT
    }

    return this.http.get<Array<IUser>>(`${BASE_URL}/users`, options)
  }

  //list of all users
  public getSingleUser(id: number, doNotInterceptCall?: Boolean): Observable<IUser> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT
    }

    return this.http.get<IUser>(`${BASE_URL}/users/${id}`, options)

  }

  //list all posts
  //https://jsonplaceholder.typicode.com/posts
  public getPostList(doNotInterceptCall?: Boolean): Observable<Array<IPost>> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT
    }

    return this.http.get<Array<IPost>>(`${BASE_URL}/posts`, options)

  }

  //detail
  //https://jsonplaceholder.typicode.com/posts/1
  public getPostDetail(id: number, doNotInterceptCall?: Boolean): Observable<IPost> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT
    }

    return this.http.get<IPost>(`${BASE_URL}/posts/${id}`, options)
  }


  //post comments
  //https://jsonplaceholder.typicode.com/posts/1/comments
  public getPostComents(id: number, doNotInterceptCall?: Boolean): Observable<Array<IComment>> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT
    }

    return this.http.get<Array<IComment>>(`${BASE_URL}/posts/${id}/comments`, options)
  }

  public getPostComentsFullResponse(id: number, doNotInterceptCall?: Boolean): any {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT;
    }

    return this.http.get<any>(`${BASE_URL}/posts/${id}/comments?_start=0&_end=1`, { headers: options.headers, observe: "response" })
  }

  public searchPostWithFilter(fielsAndValue: Array<{ field: string, value: string }>, doNotInterceptCall?: Boolean): Observable<Array<IPost>> {
    let options = OPTIONS_INTERCEPT;

    if (doNotInterceptCall) {
      options = OPTIONS_NO_INTERCEPT;
    }
    let filterString: string = "";

    fielsAndValue.forEach(el => {
      filterString += `${el.field}=${el.value}`
    })


    return this.http.get<any>(`${BASE_URL}/posts?${filterString}`, options)
  }


  //add post
  //'https://jsonplaceholder.typicode.com/posts'

  //add comment
  //

  //update post
  //
  //update comment
  //

  //delete post
  //
  //delete comment
  //

  //search post
  // https://jsonplaceholder.typicode.com/posts?userId=1

}
