import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixParSecteurComponent } from './prix-par-secteur.component';

describe('PrixParSecteurComponent', () => {
  let component: PrixParSecteurComponent;
  let fixture: ComponentFixture<PrixParSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixParSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixParSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
