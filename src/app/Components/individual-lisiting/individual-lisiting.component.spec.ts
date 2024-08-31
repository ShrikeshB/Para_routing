import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLisitingComponent } from './individual-lisiting.component';

describe('IndividualLisitingComponent', () => {
  let component: IndividualLisitingComponent;
  let fixture: ComponentFixture<IndividualLisitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualLisitingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualLisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
