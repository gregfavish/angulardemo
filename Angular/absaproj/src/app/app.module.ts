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

const appRoutes: Routes = [
  { path: 'people', component: PersonlistComponent },
  { path: 'people/Create', component: PersonCreateComponent },
  { path: 'people/:id', component: PersonEditComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersonEditComponent,
    PersonCreateComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
  RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
