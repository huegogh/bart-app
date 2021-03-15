import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { DeparturesComponent } from './pages/departures/departures.component';
import { TripPlannerComponent } from './pages/trip-planner/trip-planner.component';
import { ButtonComponent } from './components/universal/button/button.component';
import { DropdownComponent } from './components/universal/dropdown/dropdown.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulesComponent,
    DeparturesComponent,
    TripPlannerComponent,
    ButtonComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
