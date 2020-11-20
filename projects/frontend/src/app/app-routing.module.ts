import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditticketdetailComponent } from './components/editticketdetail/editticketdetail.component';
import { EdituserticketdetailComponent } from './components/edituserticketdetail/edituserticketdetail.component';
import { HomeComponent } from './components/home/home.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { MyticketComponent } from './components/myticket/myticket.component';
import { RegisterComponent } from './components/register/register.component';
import { TechdashboardComponent } from './components/techdashboard/techdashboard.component';
import { UserticketComponent } from './components/userticket/userticket.component';
import { UserticketdetailComponent } from './components/userticketdetail/userticketdetail.component';
import { ViewticketdetailComponent } from './components/viewticketdetail/viewticketdetail.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
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
