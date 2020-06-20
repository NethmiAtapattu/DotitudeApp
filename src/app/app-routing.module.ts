import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewInternComponent } from "./new-intern/new-intern.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "interns", component: NewInternComponent },
  { path: "dashboard", component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
