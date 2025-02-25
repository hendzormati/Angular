import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceUpdateComponent } from './residence-update.component';

describe('ResidenceUpdateComponent', () => {
  let component: ResidenceUpdateComponent;
  let fixture: ComponentFixture<ResidenceUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceUpdateComponent]
    });
    fixture = TestBed.createComponent(ResidenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
