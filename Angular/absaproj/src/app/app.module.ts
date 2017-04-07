import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonlistComponent } from './person/personlist/personlist.component';
import { AlertModule } from 'ng2-bootstrap';
import { PersonEditComponent } from './person/person-edit/person-edit.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { ButtonComponent } from './shared/button/button.component';
import { LoginComponent } from './authentication/login/login.component';
import {CanActivateViaAuthGuard} from './authentication/service/routegaurd'
import {AuthenticationService} from './authentication/service/authentication.service';
import {PersonMapperService} from './person/service/personmapper';

const appRoutes: Routes = [
  { path: 'people', component: PersonlistComponent,canActivate: [CanActivateViaAuthGuard ] },
  { path: 'people/Create', component: PersonCreateComponent,canActivate: [CanActivateViaAuthGuard ]  },
  { path: 'people/:id', component: PersonEditComponent ,canActivate: [CanActivateViaAuthGuard ] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersonEditComponent,
    PersonCreateComponent,
    ButtonComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthenticationService,CanActivateViaAuthGuard,PersonMapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
