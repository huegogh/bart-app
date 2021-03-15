import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DeparturesComponent } from './pages/departures/departures.component';
import { TripPlannerComponent } from './pages/trip-planner/trip-planner.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'schedules', component: SchedulesComponent},
  {path: 'departures', component: DeparturesComponent},
  {path: 'trip-planner', component: TripPlannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
