import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScoreBoardComponentComponent} from "./score-board-component/score-board-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ScoreBoardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'minigolf-scorecard';
}
