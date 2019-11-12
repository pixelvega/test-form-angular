import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewUserComponent } from './new-user/new-user.component'


const routes: Routes = [
  { path: 'edit/:identificador', component: EditComponent },
  { path: 'new', component: NewUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }