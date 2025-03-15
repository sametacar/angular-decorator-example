import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterInfo',
  standalone: false,
})
export class CharacterInfoPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    // Convert to uppercase and add "- fraction hero" suffix
    return `${value.toUpperCase()} - SelectedFraction Hero`;
  }
}
