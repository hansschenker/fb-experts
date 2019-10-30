import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: "experts",
    loadChildren: () =>
      import("./experts/experts.module").then(m => m.ExpertsModule)
  },
  { path: "**", component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
