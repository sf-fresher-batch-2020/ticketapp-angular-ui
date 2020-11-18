import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent }  from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UserticketComponent } from './userticket/userticket.component';
import { MyticketComponent } from './myticket/myticket.component';
import { ViewticketdetailComponent } from './viewticketdetail/viewticketdetail.component';
import { EditticketdetailComponent } from './editticketdetail/editticketdetail.component';
import { TechdashboardComponent } from './techdashboard/techdashboard.component';
import { UserticketdetailComponent } from './userticketdetail/userticketdetail.component';
import { EdituserticketdetailComponent } from './edituserticketdetail/edituserticketdetail.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'userticket',component:UserticketComponent},
  {path:'myticket',component:MyticketComponent},
  {path:'viewticketdetail/:id',component:ViewticketdetailComponent},
  {path:'editticketdetail/:id',component:EditticketdetailComponent},
  {path:'techdashboard',component:TechdashboardComponent},
  {path:'userticketdetail/:id',component:UserticketdetailComponent},
  {path:'edituserticketdetail/:id',component:EdituserticketdetailComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
