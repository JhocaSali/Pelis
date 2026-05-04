import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GenreData {
  key: string;
  label: string;
  title: string;
  description: string;
  duration: string;
  rating: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  genres: GenreData[] = [
    {
      key: 'accion',
      label: 'Acción',
      title: 'Furia sin Límites',
      description: 'Cuando las reglas se rompen y el tiempo se acaba, solo queda una salida.',
      duration: '2h 18m',
      rating: '8.4'
    },
    {
      key: 'suspenso',
      label: 'Suspenso',
      title: 'El Último Testigo',
      description: 'Nadie sabe lo que realmente vio esa noche. La verdad se esconde en las sombras.',
      duration: '1h 54m',
      rating: '9.1'
    },
    {
      key: 'scifi',
      label: 'Ciencia Ficción',
      title: 'Más Allá del Horizonte',
      description: 'Un viaje épico a través del tiempo y el espacio que desafía la realidad.',
      duration: '2h 35m',
      rating: '8.8'
    },
    {
      key: 'comedia',
      label: 'Comedia',
      title: 'Caos en Familia',
      description: 'Una reunión familiar que nadie planeó y todos recordarán. Risas garantizadas.',
      duration: '1h 42m',
      rating: '7.9'
    }
  ];

  activeGenre: GenreData = this.genres[0];
  isAnimating = false;

  selectGenre(genre: GenreData): void {
    if (this.isAnimating || genre.key === this.activeGenre.key) return;

    this.isAnimating = true;
    setTimeout(() => {
      this.activeGenre = genre;
      setTimeout(() => { this.isAnimating = false; }, 400);
    }, 300);
  }
}
