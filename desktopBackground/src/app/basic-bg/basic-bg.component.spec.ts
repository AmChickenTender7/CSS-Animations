import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBGComponent } from './basic-bg.component';

describe('BasicBGComponent', () => {
  let component: BasicBGComponent;
  let fixture: ComponentFixture<BasicBGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
