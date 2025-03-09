import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderComponent, ContactUsComponent, ProjectDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'msnone';
}
