import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillanListComponent } from './villan-list.component';

describe('VillanListComponent', () => {
  let component: VillanListComponent;
  let fixture: ComponentFixture<VillanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
