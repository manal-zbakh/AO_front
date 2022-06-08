import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixParNomenclatureComponent } from './prix-par-nomenclature.component';

describe('PrixParNomenclatureComponent', () => {
  let component: PrixParNomenclatureComponent;
  let fixture: ComponentFixture<PrixParNomenclatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixParNomenclatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixParNomenclatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
