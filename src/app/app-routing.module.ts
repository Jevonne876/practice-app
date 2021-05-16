
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components for rout
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: LoginComponent },
  { path: 'contact', component: SignUpComponent }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
