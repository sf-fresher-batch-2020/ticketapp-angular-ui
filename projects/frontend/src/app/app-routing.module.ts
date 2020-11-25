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
import { TicketstatusreportComponent } from './components/ticketstatusreport/ticketstatusreport.component';
import { UserticketComponent } from './components/userticket/userticket.component';
import { UserticketdetailComponent } from './components/userticketdetail/userticketdetail.component';
import { ViewticketdetailComponent } from './components/viewticketdetail/viewticketdetail.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'listuser',component:ListuserComponent,canActivate:[AuthGuard]},
  {path:'userticket',component:UserticketComponent,canActivate:[AuthGuard]},
  {path:'myticket',component:MyticketComponent,canActivate:[AuthGuard]},
  {path:'viewticketdetail/:id',component:ViewticketdetailComponent,canActivate:[AuthGuard]},
  {path:'editticketdetail/:id',component:EditticketdetailComponent,canActivate:[AuthGuard]},
  {path:'techdashboard',component:TechdashboardComponent,canActivate:[AuthGuard]},
  {path:'userticketdetail/:id',component:UserticketdetailComponent,canActivate:[AuthGuard]},
  {path:'edituserticketdetail/:id',component:EdituserticketdetailComponent,canActivate:[AuthGuard]},
  {path:'ticketstatusreport',component:TicketstatusreportComponent,canActivate:[AuthGuard]},
  {path:'', redirectTo:'login', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
