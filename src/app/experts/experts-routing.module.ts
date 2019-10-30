import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpertsComponent } from "./experts.component";
import { ExpertListComponent } from "./components/expert-list/expert-list.component";
import { ExpertFormComponent } from "./components/expert-form/expert-form.component";
import { ExpertDetailsComponent } from "./components/expert-details/expert-details.component";

const routes: Routes = [
  {
    path: "",
    component: ExpertsComponent,
    children: [
      { path: "list", component: ExpertListComponent },
      { path: "add", component: ExpertFormComponent },
      { path: "details/:id", component: ExpertDetailsComponent },
      { path: "delete/:id", component: ExpertDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertsRoutingModule {}
