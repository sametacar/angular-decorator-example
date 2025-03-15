import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gondor',
  templateUrl: './gondor.component.html',
  styleUrls: ['./gondor.component.scss'],
  standalone: false, // if not set, after Angular 19, standalone option will be true by Default
})
export class GondorComponent implements OnInit {
  capital: string = '';
  selectedCharacter: string = '';
  characters: string[] = [
    'Aragorn',
    'Boromir',
    'Faramir',
    'Denethor',
    'Beregond',
  ];

  constructor() {}

  ngOnInit(): void {}
}
