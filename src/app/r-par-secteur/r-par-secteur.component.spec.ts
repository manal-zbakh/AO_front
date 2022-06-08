import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RParSecteurComponent } from './r-par-secteur.component';

describe('RParSecteurComponent', () => {
  let component: RParSecteurComponent;
  let fixture: ComponentFixture<RParSecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RParSecteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RParSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
