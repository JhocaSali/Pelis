import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

interface GenreData {
  key: string;
  label: string;
  title: string;
  description: string;
  duration: string;
  rating: string;
  image: string;
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
      title: 'Guerra Mundial Z',
      description: 'La humanidad se enfrenta a una amenaza sin precedentes: enjambres masivos de infectados veloces que han puesto al mundo de rodillas.',
      duration: '2h 18m',
      rating: '8.4',
      image: 'img/accion.jpg'
    },
    {
      key: 'suspenso',
      label: 'Suspenso',
      title: 'El Último Testigo',
      description: 'Nadie sabe lo que realmente vio esa noche. La verdad se esconde en las sombras.',
      duration: '1h 54m',
      rating: '9.1',
      image: 'img/suspenso.jpg'
    },
    {
      key: 'scifi',
      label: 'Ciencia Ficción',
      title: 'Harry Potter y la Piedra Filosofal',
      description: 'Un niño huérfano maltratado por sus tíos, descubre a los 11 años que es mago.',
      duration: '2h 35m',
      rating: '8.8',
      image: 'img/scifi.jpeg'
    },
    {
      key: 'comedia',
      label: 'Comedia',
      title: 'Norbit',
      description: 'Un hombre tímido y de buen corazón, atrapado en un matrimonio infeliz con la dominante Rasputia.',
      duration: '1h 42m',
      rating: '7.9',
      image: 'img/comedia.jpg'
    }
  ];

   activeGenre: GenreData = this.genres[0];
  isAnimating = false;

  constructor(private sanitizer: DomSanitizer) {}

  selectGenre(genre: GenreData): void {
    if (this.isAnimating || genre.key === this.activeGenre.key) return;

    this.isAnimating = true;
    setTimeout(() => {
      this.activeGenre = genre;
      setTimeout(() => { this.isAnimating = false; }, 400);
    }, 300);
  }

  getBackgroundStyle(image: string): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(`url('${image}')`);
  }
}
