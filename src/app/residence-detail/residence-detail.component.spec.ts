import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenceDetailComponent } from './residence-detail.component';

describe('ResidenceDetailComponent', () => {
  let component: ResidenceDetailComponent;
  let fixture: ComponentFixture<ResidenceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidenceDetailComponent]
    });
    fixture = TestBed.createComponent(ResidenceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
