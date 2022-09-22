import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentOneComponent } from './programs/component-one/component-one.component';
import { ComponentTwoComponent } from './programs/component-two/component-two.component';
import { ComponentThreeComponent } from './programs/component-three/component-three.component';
import { TodoworkComponent } from './programs/todowork/todowork.component';

const routes: Routes = [
  { path: '', component: ComponentOneComponent },
  { path: 'ComponentOne', component: ComponentOneComponent },
  { path: 'ComponentTwo', component: ComponentTwoComponent },
  { path: 'ComponentThree', component: ComponentThreeComponent },
  { path: 'ToDoWork', component: TodoworkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
