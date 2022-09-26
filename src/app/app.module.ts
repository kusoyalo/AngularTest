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
    TemplateDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [ProgramsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
