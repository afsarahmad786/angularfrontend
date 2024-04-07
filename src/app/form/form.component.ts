import { HttpClientModule } from '@angular/common/http';
import { Component ,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormDataService } from '../form-data.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [
    FormDataService // Add FormDataService to providers if it's not providedIn: 'root'
  ],
})
export class FormComponent {
  formData: any = {};

  constructor(private formDataService: FormDataService,private userService: UserService) {}

  submitForm() {
    console.log(this.formData); // You can do further processing here
    this.formDataService.saveFormData(this.formData).subscribe(response => {
      console.log('Form data saved successfully:', response);
      // Reset the form after successful submission if needed
      this.formData = {};
    }, error => {
      console.error('Error saving form data:', error);
    });
  }
}
