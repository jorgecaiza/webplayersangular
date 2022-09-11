import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitmovinComponent } from './bitmovin.component';

describe('BitmovinComponent', () => {
  let component: BitmovinComponent;
  let fixture: ComponentFixture<BitmovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitmovinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitmovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
