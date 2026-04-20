import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="header__container">
        <a routerLink="/" class="header__logo">CinePick</a>

        <nav class="header__nav">
          <a
            routerLink="/"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
          >
            Inicio
          </a>

          <a routerLink="/movies" routerLinkActive="active">
            Películas
          </a>

          <a routerLink="/series" routerLinkActive="active">
            Series
          </a>

          <a routerLink="/top" routerLinkActive="active">
            Top Recomendaciones
          </a>
        </nav>

        <button type="button" class="header__button">
          Explorar
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .header__container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .header__logo {
      color: #ffffff;
      text-decoration: none;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.3px;
    }

    .header__nav {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .header__nav a {
      color: rgba(255, 255, 255, 0.72);
      text-decoration: none;
      transition: color 0.2s ease;
      font-size: 15px;
    }

    .header__nav a:hover,
    .header__nav a.active {
      color: #dc2626;
    }

    .header__button {
      border: none;
      border-radius: 999px;
      padding: 10px 18px;
      background: rgba(255, 255, 255, 0.10);
      color: #ffffff;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .header__button:hover {
      background: rgba(255, 255, 255, 0.18);
    }

    @media (max-width: 768px) {
      .header__container {
        flex-direction: column;
        align-items: flex-start;
      }

      .header__nav {
        flex-wrap: wrap;
        gap: 12px 16px;
      }
    }
  `],
})
export class AppHeaderComponent {}