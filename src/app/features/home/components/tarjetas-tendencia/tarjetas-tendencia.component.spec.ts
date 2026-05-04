import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasTendenciaComponent } from './tarjetas-tendencia.component';

describe('TarjetasTendenciaComponent', () => {
  let component: TarjetasTendenciaComponent;
  let fixture: ComponentFixture<TarjetasTendenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasTendenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetasTendenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
