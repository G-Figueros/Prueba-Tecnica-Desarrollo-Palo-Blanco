import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistaDetalleComponent } from './inversionista-detalle.component';

describe('InversionistaDetalleComponent', () => {
  let component: InversionistaDetalleComponent;
  let fixture: ComponentFixture<InversionistaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InversionistaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InversionistaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
