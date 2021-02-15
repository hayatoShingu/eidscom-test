import { Injectable } from '@angular/core';
import { concat, observable, Observable, scheduled } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { IUser } from './interfaces';
import { CrudServiceService } from './services/crud-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  private _userList: Array<IUser> = [];
  private _currentUser: IUser = new Object() as IUser;
  private _currentId: number;

  constructor(
    private crudService: CrudServiceService) {

    //this._currentId = Math.floor(Math.random() * (10));
    this._currentId = 1;

  }


  get list(): Observable<Array<IUser>> {
    if (this._userList.length) {
      return new Observable(observer => { observer.next(this._userList); observer.complete() })
    } else {
      return this.crudService.getAllUsers().pipe(map(res => this._userList = res))
    }
  }

  get currentUser(): Observable<IUser> {
    if (this._currentUser.id != null) {
      return new Observable(observer => { observer.next(this._currentUser); observer.complete() })
    } else {
      return this.crudService.getSingleUser(this._currentId, true).pipe(map(res => this._currentUser = res));
    }




  }


}
