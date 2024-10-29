import { Component } from '@angular/core';
import {MultipleServiceService} from "../multiple-service.service";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css',
  providers: [
    { provide: MultipleServiceService, multi: true}
  ],
})
export class Page1Component {



  constructor(private service: MultipleServiceService) {
    console.log('Page1Component created');
  }
}
