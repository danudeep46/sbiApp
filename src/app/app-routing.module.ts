import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbiComponent } from './sbi/sbi.component';

const routes: Routes = [
  {path:"",component:SbiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
