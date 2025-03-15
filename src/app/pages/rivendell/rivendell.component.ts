import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rivendell',
  templateUrl: './rivendell.component.html',
  styleUrls: ['./rivendell.component.scss'],
  standalone: false,
})
export class RivendellComponent implements OnInit {
  capital: string = '';
  selectedCharacter: string = '';
  characters: string[] = ['Elrond', 'Arwen', 'Glorfindel', 'Erestor', 'Lindir'];

  constructor() {}

  ngOnInit(): void {}
}
