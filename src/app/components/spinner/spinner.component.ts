import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SpinnerServiceService } from 'src/app/infrastructure/services/spinner-service.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinnerService: SpinnerServiceService) { }

  ngOnInit() {
  }

  @Input() isLoading: boolean = false;

  ngOnChanges(evt: SimpleChange) {
    console.log("Spinner: ", evt);
  }

}



