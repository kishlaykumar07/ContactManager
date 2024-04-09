import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacDetailComponent } from './contact-detail.component';

describe('ContacDetailComponent', () => {
  let component: ContacDetailComponent;
  let fixture: ComponentFixture<ContacDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
