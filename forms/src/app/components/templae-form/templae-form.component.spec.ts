import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaeFormComponent } from './templae-form.component';

describe('TemplaeFormComponent', () => {
  let component: TemplaeFormComponent;
  let fixture: ComponentFixture<TemplaeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
