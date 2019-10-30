import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// app
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { AppShellComponent } from './app-shell/app-shell.component';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, HomeComponent, PathNotFoundComponent, AppShellComponent],
  exports: [PathNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
