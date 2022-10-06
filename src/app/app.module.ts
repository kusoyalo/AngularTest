import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProgramsService } from './programs/programs.service';
import { ComponentOneComponent } from './programs/component-one/component-one.component';
import { ComponentTwoComponent } from './programs/component-two/component-two.component';
import { ComponentThreeComponent } from './programs/component-three/component-three.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoworkComponent } from './programs/todowork/todowork.component';
import { ItemComponent } from './programs/item/item.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NameEditorComponent } from './programs/name-editor/name-editor.component';
import { ReactiveFormsComponent } from './programs/reactive-forms/reactive-forms.component';
import { ProfileEditorComponent } from './programs/profile-editor/profile-editor.component';
import { TemplateDrivenFormsComponent } from './programs/template-driven-forms/template-driven-forms.component';
import { TemplateDrivenFormsValidateComponent } from './programs/template-driven-forms-validate/template-driven-forms-validate.component';
import { ReactiveFormsValidateComponent } from './programs/reactive-forms-validate/reactive-forms-validate.component';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedDirective } from './shared/identity-revealed.directive';
import { AlterEgoDirective } from './shared/alter-ego.directive';
import { DynamicFormComponent } from './programs/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './programs/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormInterceptComponent } from './programs/dynamic-form-intercept/dynamic-form-intercept.component';
import { MessagesComponent } from './programs/messages/messages.component';
import { HeroesComponent } from './programs/heroes/heroes.component';
import { HeroSearchComponent } from './programs/hero-search/hero-search.component';
import { HeroDetailComponent } from './programs/hero-detail/hero-detail.component';
import { DashboardComponent } from './programs/dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './programs/in-memory-data.service';
import { TourOfHeroesComponent } from './programs/tour-of-heroes/tour-of-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    TodoworkComponent,
    ItemComponent,
    NameEditorComponent,
    ReactiveFormsComponent,
    ProfileEditorComponent,
    TemplateDrivenFormsComponent,
    TemplateDrivenFormsValidateComponent,
    ReactiveFormsValidateComponent,
    ForbiddenNameDirective,
    IdentityRevealedDirective,
    AlterEgoDirective,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormInterceptComponent,
    MessagesComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    DashboardComponent,
    TourOfHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [ProgramsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
