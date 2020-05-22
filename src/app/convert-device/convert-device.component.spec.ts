import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertDeviceComponent } from './convert-device.component';

describe('ConvertDeviceComponent', () => {
  let component: ConvertDeviceComponent;
  let fixture: ComponentFixture<ConvertDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
