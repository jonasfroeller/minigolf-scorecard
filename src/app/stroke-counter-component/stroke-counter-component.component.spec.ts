import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrokeCounterComponentComponent } from './stroke-counter-component.component';

describe('StrokeCounterComponentComponent', () => {
  let component: StrokeCounterComponentComponent;
  let fixture: ComponentFixture<StrokeCounterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrokeCounterComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrokeCounterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
