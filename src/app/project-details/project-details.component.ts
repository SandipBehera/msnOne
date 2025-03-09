import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [NgFor],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  stats = [
    { value: '7.7', label: 'Acres Site Area' },
    { value: '5', label: 'Towers' },
    { value: '55', label: 'Floors' },
    { value: '655', label: 'Uber-Luxury Residences.' },
    { value: '1,80,000 SQ. FT.', label: 'Clubhouse, Stilt & Skypark Amenities' }
  ];
}
