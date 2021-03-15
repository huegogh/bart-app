import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';
import { DeparturesComponent } from './pages/departures/departures.component';
import { TripPlannerComponent } from './pages/trip-planner/trip-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchedulesComponent,
    DeparturesComponent,
    TripPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
