import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertsRoutingModule } from './experts-routing.module';
import { ExpertsComponent } from './experts.component';
import { ExpertListComponent } from './components/expert-list/expert-list.component';
import { ExpertFormComponent } from './components/expert-form/expert-form.component';
import { ExpertComponent } from './components/expert/expert.component';
import { ExpertDetailsComponent } from './components/expert-details/expert-details.component';


@NgModule({
  declarations: [ExpertsComponent, ExpertListComponent, ExpertFormComponent, ExpertComponent, ExpertDetailsComponent],
  imports: [
    CommonModule,
    ExpertsRoutingModule
  ]
})
export class ExpertsModule { }
