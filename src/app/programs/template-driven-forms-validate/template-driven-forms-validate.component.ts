import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-validate',
  templateUrl: './template-driven-forms-validate.component.html',
  styleUrls: ['./template-driven-forms-validate.component.scss']
})
export class TemplateDrivenFormsValidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};
}
