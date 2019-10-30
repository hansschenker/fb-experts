import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, PathNotFoundComponent],
  exports: [PathNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
