import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MovieCard {
  title: string;
  year: number;
  rating: number;
  description: string;
  image: string;
}

@Component({
  selector: 'app-tarjetas-tendencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjetas-tendencia.component.html',
  styleUrl: './tarjetas-tendencia.component.css'
})
export class TarjetasTendenciaComponent {

  movies: MovieCard[] = [
    {
      title: 'Guerra Mundial Z',
      year: 2024,
      rating: 8.5,
      description: 'Una misión imposible se convierte en la aventura más peligrosa de la humanidad.',
      image: 'img/accion.jpg'
    },
    {
      title: 'Harry Potter',
      year: 2024,
      rating: 9,
      description: 'Un viaje épico a través del tiempo y el espacio que desafía la realidad.',
      image: 'img/scifi.jpeg'
    },
    {
      title: 'El Último Testigo',
      year: 2023,
      rating: 8.2,
      description: 'Un misterio inquietante que mantiene la tensión hasta el último segundo.',
      image: 'img/suspenso.jpg'
    },
    {
      title: 'Norbit',
      year: 2024,
      rating: 7.8,
      description: 'Una comedia desternillante que te hará reír sin parar.',
      image: 'img/comedia.jpg'
    },
    {
      title: 'Guerra Mundial Z',
      year: 2024,
      rating: 8.5,
      description: 'Una misión imposible se convierte en la aventura más peligrosa de la humanidad.',
      image: 'img/accion.jpg'
    },
    {
      title: 'Harry Potter',
      year: 2024,
      rating: 9,
      description: 'Un viaje épico a través del tiempo y el espacio que desafía la realidad.',
      image: 'img/scifi.jpeg'
    }
  ];

  currentIndex = 0;
  visibleCount = 4;

  get visibleMovies(): MovieCard[] {
    return this.movies.slice(this.currentIndex, this.currentIndex + this.visibleCount);
  }

  get canGoBack(): boolean {
    return this.currentIndex > 0;
  }

  get canGoForward(): boolean {
    return this.currentIndex + this.visibleCount < this.movies.length;
  }

  prev(): void {
    if (this.canGoBack) this.currentIndex--;
  }

  next(): void {
    if (this.canGoForward) this.currentIndex++;
  }
}
