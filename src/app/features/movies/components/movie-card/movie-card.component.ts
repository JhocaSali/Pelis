import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() title: string = '';
  @Input() imageUrl: string = 'https://via.placeholder.com/300x450';
  @Input() rating: string = '';
  @Input() year: string = '';
  @Input() description: string = '';
  @Output() resumenClicked = new EventEmitter<void>();

  onResumenClick() {
    this.resumenClicked.emit();
    }
}