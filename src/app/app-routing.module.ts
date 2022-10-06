import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentOneComponent } from './programs/component-one/component-one.component';
import { ComponentTwoComponent } from './programs/component-two/component-two.component';
import { ComponentThreeComponent } from './programs/component-three/component-three.component';
import { TodoworkComponent } from './programs/todowork/todowork.component';
import { ReactiveFormsComponent } from './programs/reactive-forms/reactive-forms.component';
import { ReactiveFormsValidateComponent } from './programs/reactive-forms-validate/reactive-forms-validate.component';
import { TemplateDrivenFormsComponent } from './programs/template-driven-forms/template-driven-forms.component';
import { TemplateDrivenFormsValidateComponent } from './programs/template-driven-forms-validate/template-driven-forms-validate.component';
import { DynamicFormInterceptComponent } from './programs/dynamic-form-intercept/dynamic-form-intercept.component';
import { TourOfHeroesComponent } from './programs/tour-of-heroes/tour-of-heroes.component';
import { DashboardComponent } from './programs/dashboard/dashboard.component';
import { HeroesComponent } from './programs/heroes/heroes.component';
import { HeroDetailComponent } from './programs/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', component: ComponentOneComponent },
  { path: 'ComponentOne', component: ComponentOneComponent },
  { path: 'ComponentTwo', component: ComponentTwoComponent },
  { path: 'ComponentThree', component: ComponentThreeComponent },
  { path: 'ToDoWork', component: TodoworkComponent },
  { path: 'ToReactiveForms', component: ReactiveFormsComponent },
  { path: 'ToReactiveFormsValidate', component: ReactiveFormsValidateComponent },
  { path: 'ToTemplateDrivenForms', component: TemplateDrivenFormsComponent },
  { path: 'ToTemplateDrivenFormsValidate', component: TemplateDrivenFormsValidateComponent },
  { path: 'ToDynamicForm', component: DynamicFormInterceptComponent },
  { path: 'ToTourOfHeroes', component: TourOfHeroesComponent },
  { path: 'dashboard',component: DashboardComponent },
  { path: 'detail/:id',component: HeroDetailComponent },
  { path: 'heroes',component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
