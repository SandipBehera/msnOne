import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliderComponent } from "./slider/slider.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { AboutProjectComponent } from "./about-project/about-project.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { FloorPlanComponent } from "./floor-plan/floor-plan.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SliderComponent, ContactUsComponent, ProjectDetailsComponent, AboutProjectComponent, GalleryComponent, FloorPlanComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'msnone';
}
