import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../infrastructure/services/crud-service.service'
import { IPost, IComment, IUser, IUsersDictionary } from '../../infrastructure/interfaces'
import { UsersServiceService } from 'src/app/infrastructure/users-service.service';
import { forkJoin, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';


import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  public postsList: Array<IPost> = [];
  public usersDictionary: IUsersDictionary = {};
  public user: IUser = new Object() as IUser;

  constructor(
    private crudService: CrudServiceService,
    private userService: UsersServiceService,
    private router: Router

  ) {

    this.router.events.pipe(
      filter(e => e instanceof RouterEvent)
    ).subscribe(e => {
      console.log(e)
      console.log(this.router.url)
      if (e instanceof NavigationEnd && (e.url === '/posts' || e.url === '/')) {
        this._initPage();
      }
    });

  }


  private _makeUsersDictionaryFromArray(usersArray: Array<IUser>): IUsersDictionary {
    let rtDictionary: IUsersDictionary = {};
    usersArray.forEach(user => rtDictionary[user.id] = user);
    return rtDictionary
  }

  private _initPage(): void {
    console.log('_initPage');

    let usersObservable = this.userService.list;
    let postsObservable = this.crudService.getPostList();
    let userObservable = this.userService.currentUser;

    forkJoin([usersObservable, postsObservable, userObservable]).subscribe(res => {

      this.usersDictionary = this._makeUsersDictionaryFromArray(res[0]);

      this.postsList = res[1];

      this.user = res[2];
    })

  }

  ngOnInit(): void {
  }




}
