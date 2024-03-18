import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-stroke-counter-component',
  standalone: true,
  imports: [],
  templateUrl: './stroke-counter-component.component.html',
  styleUrl: './stroke-counter-component.component.scss'
})
export class StrokeCounterComponentComponent {
  @Output() strokesChange: EventEmitter<{ strokes: number, hole: number }> = new EventEmitter<{ strokes: number, hole: number }>();
  @Input() strokes: number = 0;
  @Input() hole: number = 0

  incrementStrokes(): void {
    this.strokes++;
    this.strokesChange.emit({ strokes: this.strokes, hole: this.hole });
  }
}
