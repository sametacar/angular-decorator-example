import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rohan',
  templateUrl: './rohan.component.html',
  styleUrls: ['./rohan.component.scss'],
  standalone: false,
})
export class RohanComponent implements OnInit {
  capital: string = '';
  selectedCharacter: string = '';
  characters: string[] = ['Théoden', 'Éomer', 'Éowyn', 'Gamling', 'Háma'];

  constructor() {}

  ngOnInit(): void {}
}
