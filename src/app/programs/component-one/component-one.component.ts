import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toComponentTwo() {
    this.router.navigate(['ComponentTwo']);
  }
  toToDoWork(){
    this.router.navigate(['ToDoWork']);
  }
  toReactiveForms(){
    this.router.navigate(['ToReactiveForms']);
  }
  toTemplateDrivenForms(){
    this.router.navigate(['ToTemplateDrivenForms']);
  }
  toReactiveFormsValidate(){
    this.router.navigate(['ToReactiveFormsValidate']);
  }
  toTemplateDrivenFormsValidate(){
    this.router.navigate(['ToTemplateDrivenFormsValidate']);
  }
  toDynamicForm(){
    this.router.navigate(['ToDynamicForm']);
  }
  toTourOfHeroes(){
    this.router.navigate(['ToTourOfHeroes']);
  }
}
