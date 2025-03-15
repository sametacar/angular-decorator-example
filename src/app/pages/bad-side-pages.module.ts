import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import components
import { MordorComponent } from './mordor/mordor.component';

// Import modules
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MordorComponent],
  imports: [CommonModule, FormsModule, ComponentsModule],
  exports: [],
})
export class BadSidePagesModule {}
