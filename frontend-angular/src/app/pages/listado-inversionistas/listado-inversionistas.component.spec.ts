import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoInversionistasComponent } from './listado-inversionistas.component';

describe('ListadoInversionistasComponent', () => {
  let component: ListadoInversionistasComponent;
  let fixture: ComponentFixture<ListadoInversionistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoInversionistasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoInversionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
