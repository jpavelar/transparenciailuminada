import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoComponent } from './relato.component';

describe('RelatoComponent', () => {
  let component: RelatoComponent;
  let fixture: ComponentFixture<RelatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
