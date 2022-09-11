import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativoComponent } from './nativo.component';

describe('NativoComponent', () => {
  let component: NativoComponent;
  let fixture: ComponentFixture<NativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
