import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownComponent } from './components/universal/dropdown/dropdown.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { DeparturesComponent } from './pages/departures/departures.component';
import { TripPlannerComponent } from './pages/trip-planner/trip-planner.component';
import { ButtonComponent } from './components/universal/button/button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/universal/header/header.component';
import { NavigationComponent } from './components/universal/navigation/navigation.component';
import { TimedropdownComponent } from './components/universal/timedropdown/timedropdown.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulesComponent,
    DeparturesComponent,
    TripPlannerComponent,
    ButtonComponent,
    DropdownComponent,
    HeaderComponent,
    NavigationComponent,
    TimedropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
