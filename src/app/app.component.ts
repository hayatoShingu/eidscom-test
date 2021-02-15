import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { IUser } from './infrastructure/interfaces';
import { SpinnerServiceService } from './infrastructure/services/spinner-service.service';
import { UsersServiceService } from './infrastructure/users-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'eidscom-test';
  public user = new Object() as IUser;

  public isLoading: boolean = false;

  constructor(
    private route: Router,
    private spinnerService: SpinnerServiceService,
    private userService: UsersServiceService) { }



  ngOnInit() {
    if (!this.user.id) {
      this.userService.currentUser.subscribe(res => { this.user = res; console.log(res) });
    }


    this.spinnerService.returnAsObservable().subscribe(res => this.isLoading = res)


    this.route.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        }
        else if (event instanceof NavigationEnd) {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000)

        }
      },
      error => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000)

      })
  }
}
