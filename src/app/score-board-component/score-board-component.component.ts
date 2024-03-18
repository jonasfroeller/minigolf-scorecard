import { Component } from '@angular/core';
import {
  PlayerScoresComponentComponent,
  StrokeCounterType
} from "../player-scores-component/player-scores-component.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-score-board-component',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    PlayerScoresComponentComponent
  ],
  templateUrl: './score-board-component.component.html',
  styleUrl: './score-board-component.component.scss'
})
export class ScoreBoardComponentComponent {
  names: string[] = [];
  pars: StrokeCounterType[][] = [[]];

  constructor() {
    this.names = ['Player 1', 'Player 2', 'Player 3'];
    this.pars = [
      [
        { strokes: 3, par: 3 },
        { strokes: 4, par: 4 },
        { strokes: 5, par: 5 }
      ],
      [
        { strokes: 2, par: 3 },
        { strokes: 3, par: 4 },
        { strokes: 4, par: 5 }
      ],
      [
        { strokes: 1, par: 3 },
        { strokes: 2, par: 4 },
        { strokes: 9, par: 5 }
      ]
    ];
  }
}
