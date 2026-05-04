import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { MovieCardComponent } from '../../../movies/components/movie-card/movie-card.component';
import { TarjetasTendenciaComponent } from '../../components/tarjetas-tendencia/tarjetas-tendencia.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroComponent, MovieCardComponent],
  imports: [HeroComponent, TarjetasTendenciaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
