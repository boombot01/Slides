import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LeftWindowComponent } from './components/left-window/left-window.component';
import { RightWindowComponent } from './components/right-window/right-window.component';
import { ChooseFileComponent, MyService } from './components/choose-file/choose-file.component';
import { ChoosePartsComponent } from './components/choose-parts/choose-parts.component';
import { HeaderComponent } from './components/header/header.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {dndLists} from 'angular-drag-and-drop-lists'

const appRoutes: Routes = [
  {path:'', component:ChooseFileComponent},
  {path:'parts', component:ChoosePartsComponent},
  {path:'main', component:MainComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LeftWindowComponent,
    RightWindowComponent,
    ChooseFileComponent,
    ChoosePartsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule, 
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
