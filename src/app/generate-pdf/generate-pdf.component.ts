import { Component } from '@angular/core';
import { PdfGenerationService } from '../pdf-generation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generate-pdf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generate-pdf.component.html',
  styleUrl: './generate-pdf.component.css',
  providers: [
    PdfGenerationService // Add FormDataService to providers if it's not providedIn: 'root'
  ],
})
export class GeneratePdfComponent {

  message!: string;

  constructor(private pdfService: PdfGenerationService) {}

  generatePDF() {
    this.pdfService.generatePdf().subscribe(
      (data: any) => {
        console.log(data); // Handle the JSON response here
        this.message = 'PDF generated successfully';
      },
      error => {
        console.error('Error generating PDF:', error);
        this.message = 'Failed to generate PDF'; // Set the error message
      }
    );
  }
  
  
}
