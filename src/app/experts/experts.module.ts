import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExpertsRoutingModule } from "./experts-routing.module";
import { ExpertsComponent } from "./experts.component";
import { ExpertListComponent } from "./components/expert-list/expert-list.component";
import { ExpertFormComponent } from "./components/expert-form/expert-form.component";
import { ExpertComponent } from "./components/expert/expert.component";
import { ExpertDetailsComponent } from "./components/expert-details/expert-details.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExpertsComponent,
    ExpertListComponent,
    ExpertFormComponent,
    ExpertComponent,
    ExpertDetailsComponent
  ],
  exports: [
    ExpertsComponent,
    ExpertListComponent,
    ExpertFormComponent,
    ExpertComponent,
    ExpertDetailsComponent
  ],
  imports: [CommonModule, ExpertsRoutingModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, ReactiveFormsModule]
})
export class ExpertsModule {}
