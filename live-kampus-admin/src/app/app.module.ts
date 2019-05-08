import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SchoolService } from './admin/school/school.service';
import { CityService } from './admin/city/city.service';
import { UserService } from './admin/users/user.service';
import { EventService } from './admin/event/event.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [SchoolService,CityService, UserService , EventService],
  bootstrap: [
    AppComponent,
    
  ]
})
export class AppModule { }
