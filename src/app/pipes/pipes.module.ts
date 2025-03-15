import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoPipe } from './character-info.pipe';

@NgModule({
  declarations: [CharacterInfoPipe],
  imports: [CommonModule],
  exports: [CharacterInfoPipe],
})
export class PipesModule {}
