import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapprComponent } from './clappr.component';

describe('ClapprComponent', () => {
  let component: ClapprComponent;
  let fixture: ComponentFixture<ClapprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClapprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClapprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
