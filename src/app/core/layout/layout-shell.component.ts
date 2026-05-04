import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@Component({
  selector: 'app-layout-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeaderComponent, AppFooterComponent, MovieCardComponent],
  template: `
    <div class="app-shell">
      <app-header />

      <main class="app-main">
        <div class="movie-grid">
          <app-movie-card 
            title="Michael" 
            imageUrl="img/tendencia1.jpg" />

          <app-movie-card 
            title="Apex" 
            imageUrl="img/tendencia2.jpg" />

          <app-movie-card 
            title="Project Hail Mary" 
            imageUrl="img/tendencia3.jpg" />
        </div>

        <router-outlet />
      </main>
      
      <app-footer />
    </div>
  `,
  styles: [`
    .app-shell {
      min-height: 100vh;
      background-color: #0a0a0a;
      color: #ffffff;
      display: flex;
      flex-direction: column;
    }

    .app-main {
      flex: 1;
      width: 100%;
      padding: 20px;
    }

    .movie-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
  `]
})
export class LayoutShellComponent {}