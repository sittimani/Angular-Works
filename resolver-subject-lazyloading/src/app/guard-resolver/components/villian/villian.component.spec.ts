import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianComponent } from './villian.component';

describe('VillianComponent', () => {
  let component: VillianComponent;
  let fixture: ComponentFixture<VillianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
