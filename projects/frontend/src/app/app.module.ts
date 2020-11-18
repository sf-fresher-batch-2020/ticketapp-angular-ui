import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListuserComponent } from './listuser/listuser.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserticketComponent } from './userticket/userticket.component';
import { MyticketComponent } from './myticket/myticket.component';
import { ToastrModule } from 'ngx-toastr';
import { ViewticketdetailComponent } from './viewticketdetail/viewticketdetail.component';
import { EditticketdetailComponent } from './editticketdetail/editticketdetail.component';
import { TechdashboardComponent } from './techdashboard/techdashboard.component';
import { UserticketdetailComponent } from './userticketdetail/userticketdetail.component';
import { EdituserticketdetailComponent } from './edituserticketdetail/edituserticketdetail.component';

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
    EdituserticketdetailComponent
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
