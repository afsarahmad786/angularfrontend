import { Component } from '@angular/core';
import { PdfGenerationService } from '../pdf-generation.service';

@Component({
  selector: 'app-pdf-download',
  templateUrl: './pdf-download.component.html',
  styleUrls: ['./pdf-download.component.css'],
  standalone: true,
  providers: [
    PdfGenerationService // Add FormDataService to providers if it's not providedIn: 'root'
  ],
})
export class PdfDownloadComponent {
  constructor(private pdfService: PdfGenerationService) {}

  downloadPDF() {
    this.pdfService.downloadPDF().subscribe(
      (response: Blob) => {
        console.log('response',response)
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error => {
        console.error('Error downloading PDF:', error);
        // Handle error, e.g., display a message to the user
      }
    );
  }
}
