import { Component, OnInit } from '@angular/core';
import{ Constants } from './config/constants'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //可以直接寫html
  //template: '<h1>Hi!</h1>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularTest';
  constant = Constants.API_ENDPOINT;
  
  constructor() { 
    console.log(Constants.API_ENDPOINT); 
    console.log(this.constant); 
  } 

  ngOnInit() { 
      console.log(this.title); 
  } 
}
