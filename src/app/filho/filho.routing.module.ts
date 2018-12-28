import { PaiComponent } from './components/pai/pai.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { FilhoComponent } from './components/filho/filho.component';

const filhosRoutes: Routes = [
  {
  path:'',
  component:PaiComponent,
  children:[
    {
      path:'filho',
      component:FilhoComponent
    }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(filhosRoutes)],
  exports: [RouterModule]
})
export class FilhoRoutingModule{}
