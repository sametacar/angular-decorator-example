import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.scss'],
  standalone: false,
})
export class CharacterDisplayComponent implements OnInit {
  @Input() character: string = '';

  constructor() {}

  ngOnInit(): void {}
}
