import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationReaquestsComponent } from './vacation-reaquests.component';

describe('VacationReaquestsComponent', () => {
  let component: VacationReaquestsComponent;
  let fixture: ComponentFixture<VacationReaquestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VacationReaquestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationReaquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
