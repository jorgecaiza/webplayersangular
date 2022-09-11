import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridComponent } from './brid.component';

describe('BridComponent', () => {
  let component: BridComponent;
  let fixture: ComponentFixture<BridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
