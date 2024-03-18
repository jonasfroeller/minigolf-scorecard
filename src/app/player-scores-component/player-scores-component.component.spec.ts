import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerScoresComponentComponent } from './player-scores-component.component';

describe('PlayerScoresComponentComponent', () => {
  let component: PlayerScoresComponentComponent;
  let fixture: ComponentFixture<PlayerScoresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerScoresComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerScoresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
