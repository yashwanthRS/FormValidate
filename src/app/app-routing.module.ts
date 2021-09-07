import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { DataComponent } from './data/data.component';
import { FormvaldiateComponent } from './formvaldiate/formvaldiate.component';


const routes: Routes = [

  {    path: 'form', component:FormvaldiateComponent  },
  {    path: 'data', component:DataComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
