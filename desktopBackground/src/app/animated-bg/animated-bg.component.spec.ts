import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBGComponent } from './animated-bg.component';

describe('AnimatedBGComponent', () => {
  let component: AnimatedBGComponent;
  let fixture: ComponentFixture<AnimatedBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedBGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
