import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBoardComponentComponent } from './score-board-component.component';

describe('ScoreBoardComponentComponent', () => {
  let component: ScoreBoardComponentComponent;
  let fixture: ComponentFixture<ScoreBoardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreBoardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScoreBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
