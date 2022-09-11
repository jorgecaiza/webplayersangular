import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowplayerComponent } from './flowplayer.component';

describe('FlowplayerComponent', () => {
  let component: FlowplayerComponent;
  let fixture: ComponentFixture<FlowplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
