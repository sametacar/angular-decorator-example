import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mordor',
  templateUrl: './mordor.component.html',
  styleUrls: ['./mordor.component.scss'],
  standalone: false,
})
export class MordorComponent implements OnInit {
  capital: string = '';
  selectedCharacter: string = '';
  characters: string[] = [
    'Sauron',
    'Witch-king of Angmar',
    'Khamûl',
    'Mouth of Sauron',
    'Gothmog',
  ];

  constructor() {}

  ngOnInit(): void {}
}
