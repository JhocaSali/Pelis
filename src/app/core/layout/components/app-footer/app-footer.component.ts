import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__grid">
          <section>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li>Inicio</li>
              <li>Películas</li>
              <li>Series</li>
              <li>Top Recomendaciones</li>
            </ul>
          </section>

          <section>
            <h3>Acerca de</h3>
            <ul>
              <li>Sobre nosotros</li>
              <li>Términos de uso</li>
              <li>Política de privacidad</li>
              <li>FAQ</li>
            </ul>
          </section>

          <section>
            <h3>Contacto</h3>
            <ul>
              <li>Soporte</li>
              <li>Sugerencias</li>
              <li>Reportar problema</li>
              <li>Publicidad</li>
            </ul>
          </section>

          <section>
            <h3>Redes sociales</h3>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>X</li>
              <li>YouTube</li>
            </ul>
          </section>
        </div>

        <div class="footer__copy">
          © 2026 CinePick. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      margin-top: 48px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(0, 0, 0, 0.35);
    }

    .footer__container {
      max-width: 1440px;
      margin: 0 auto;
      padding: 32px 24px;
    }

    .footer__grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 24px;
    }

    .footer h3 {
      margin: 0 0 12px 0;
      font-size: 18px;
      color: #ffffff;
    }

    .footer ul {
      list-style: none;
      padding: 0;
      margin: 0;
      color: rgba(255, 255, 255, 0.7);
      display: grid;
      gap: 8px;
    }

    .footer__copy {
      margin-top: 24px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      color: rgba(255, 255, 255, 0.45);
      font-size: 14px;
      text-align: center;
    }

    @media (max-width: 900px) {
      .footer__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 600px) {
      .footer__grid {
        grid-template-columns: 1fr;
      }
    }
  `],
})
export class AppFooterComponent {}