import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Animations ?
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyprofilePageComponent } from './pages/myprofile-page/myprofile-page.component';



const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home",  component: HomePageComponent },
  { path: "profile",  component: MyprofilePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyprofilePageComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
