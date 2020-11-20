import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditticketdetailComponent } from './components/editticketdetail/editticketdetail.component';
import { EdituserticketdetailComponent } from './components/edituserticketdetail/edituserticketdetail.component';
import { HeaderComponent } from './components/header/header.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { LoginComponent } from './components/login/login.component';
import { MyticketComponent } from './components/myticket/myticket.component';
import { RegisterComponent } from './components/register/register.component';
import { TechdashboardComponent } from './components/techdashboard/techdashboard.component';
import { UserticketComponent } from './components/userticket/userticket.component';
import { UserticketdetailComponent } from './components/userticketdetail/userticketdetail.component';
import { ViewticketdetailComponent } from './components/viewticketdetail/viewticketdetail.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListuserComponent,
    HeaderComponent,
    UserticketComponent,
    MyticketComponent,
    ViewticketdetailComponent,
    EditticketdetailComponent,
    TechdashboardComponent,
    UserticketdetailComponent,
    EdituserticketdetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
