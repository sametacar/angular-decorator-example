import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import components
import { GondorComponent } from './gondor/gondor.component';
import { RivendellComponent } from './rivendell/rivendell.component';
import { RohanComponent } from './rohan/rohan.component';

// Import modules
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [GondorComponent, RivendellComponent, RohanComponent],
  imports: [CommonModule, FormsModule, PipesModule, ComponentsModule],
  exports: [],
})
export class GoodSidePagesModule {}
