import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {StrokeCounterComponentComponent} from "../stroke-counter-component/stroke-counter-component.component";

export type StrokeCounterType = {
  strokes: number;
  par: number;
}

@Component({
  selector: 'app-player-scores-component',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    StrokeCounterComponentComponent
  ],
  templateUrl: './player-scores-component.component.html',
  styleUrl: './player-scores-component.component.scss'
})
export class PlayerScoresComponentComponent implements OnInit {
  @Input() name: string = "";
  @Input() coursePairs: StrokeCounterType[] = [];
  totalStrokes: number = 0;

  handleStrokesChange($event: { strokes: number, hole: number }) {
    this.coursePairs[$event.hole].strokes = $event.strokes;
    this.countTotalStrokes();
  }

  countTotalStrokes(): void {
    this.totalStrokes = this.coursePairs.reduce((sum, current) => sum + current.strokes, 0);
  }

  ngOnInit(): void {
    this.countTotalStrokes();
  }
}
