import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnReportarComponent } from './btn-reportar.component';

describe('BtnReportarComponent', () => {
  let component: BtnReportarComponent;
  let fixture: ComponentFixture<BtnReportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnReportarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnReportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
