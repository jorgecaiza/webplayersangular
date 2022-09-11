import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashjsComponent } from './dashjs.component';

describe('DashjsComponent', () => {
  let component: DashjsComponent;
  let fixture: ComponentFixture<DashjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
