import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  imports: [NgbCarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  providers: [NgbCarouselConfig]
})
export class SliderComponent {

  showNavigationArrows = false;
	showNavigationIndicators = false;

}
