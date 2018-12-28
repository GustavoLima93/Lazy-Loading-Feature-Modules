import { HomeComponent } from './home/home.component';
import { NgModule  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'pai',
    loadChildren:'./filho/filho.module#FilhoModule',

  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'


  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
