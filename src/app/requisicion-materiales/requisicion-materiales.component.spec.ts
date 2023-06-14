import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicionMaterialesComponent } from './requisicion-materiales.component';

describe('RequisicionMaterialesComponent', () => {
  let component: RequisicionMaterialesComponent;
  let fixture: ComponentFixture<RequisicionMaterialesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequisicionMaterialesComponent]
    });
    fixture = TestBed.createComponent(RequisicionMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
