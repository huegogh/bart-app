import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './pages/schedules/schedules.component';

const routes: Routes = [
  {path: "schedule", component: SchedulesComponent},
  { path: "**", component: SchedulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
