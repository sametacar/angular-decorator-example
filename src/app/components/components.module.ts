import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDisplayComponent } from './character-display/character-display.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [CharacterDisplayComponent],
  imports: [CommonModule, PipesModule],
  exports: [CharacterDisplayComponent],
})
export class ComponentsModule {}
