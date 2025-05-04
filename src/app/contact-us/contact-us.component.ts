import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-contact-us',
  imports: [ReactiveFormsModule, NgIf,MatIconModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;
  loading = false; // Track loading state

  constructor( private fb: FormBuilder, private ServiceService: ServiceService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      projectName: ['MSN One' ]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.loading = true; // Show spinner
      // Manually include the hidden static field when submitting
      const formData = {
        ...this.contactForm.getRawValue(), // Get all form values including disabled fields
      };
      this.ServiceService.formSubmit(formData).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          alert('Thank you! Your message has been sent.');
          this.contactForm.reset();
          this.loading = false; // Hide spinner
        },
        error => {
          console.error('Form submission failed:', error);
          alert('Something went wrong. Please try again.');
          this.loading = false; // Hide spinner
        }
      );
      
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}
