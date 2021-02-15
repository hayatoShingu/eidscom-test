import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost, IUser } from 'src/app/infrastructure/interfaces';
import { CrudServiceService } from 'src/app/infrastructure/services/crud-service.service';
import { UsersServiceService } from 'src/app/infrastructure/users-service.service';

@Component({
  selector: 'app-page-search',
  templateUrl: './page-search.component.html',
  styleUrls: ['./page-search.component.css']
})
export class PageSearchComponent implements OnInit {

  public usersList: Array<IUser> = [];
  public searchUserId: number = 0;
  public freeSearch: boolean = false;
  public searchText: string = "";
  public postsList: Array<IPost> = [];

  constructor(private crudService: CrudServiceService,
    private userService: UsersServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.userService.list.subscribe(res => this.usersList = res);

  }

  public toggleChange() {
    this.postsList = [];
  }

  public searchForField(evt: any, field: string) {
    this.crudService.searchPostWithFilter([{ field: field, value: evt.value }]).subscribe(res => this.postsList = res)

  }

  public doFreeSearch(text: string, evt: any) {
    evt.stopPropagation();

    this.crudService.getPostList().subscribe(res => {
      this.postsList = res.filter(el => JSON.stringify(el).match(text))
    })

  }

}
