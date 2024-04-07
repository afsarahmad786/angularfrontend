import { CommonModule } from '@angular/common';
import { PdfGenerationService } from '../pdf-generation.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css',
  providers: [
    PdfGenerationService // Add FormDataService to providers if it's not providedIn: 'root'
  ],
})
export class PdfViewerComponent   {
  // pdfContent: any;

  constructor(private pdfService: PdfGenerationService) {}
  
  // ngOnInit(): void {
  //   this.loadPDF();
  // }

  // loadPDF(): void {
  //   this.pdfService.viewPDF().subscribe(
  //     (response: Blob) => {
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         this.pdfContent = reader.result;
  //       };
  //       reader.readAsArrayBuffer(response);
  //     },
  //     (      error: any) => {
  //       console.error('Error loading PDF:', error);
  //       // Handle error, e.g., display a message to the user
  //     }
  //   );
  // }

  // viewPDF(): void {
  //   this.pdfService.viewPDF().subscribe(
  //     () => {
  //       // PDF received successfully, open in new window
  //       window.open('http://localhost:3000/pdf/view', '_blank');
  //     },
  //     error => {
  //       console.error('Error fetching PDF:', error);
  //       // Handle error, e.g., display a message to the user
  //     }
  //   );
  // }

  // @ViewChild('pdfViewer')
  // pdfViewer!: ElementRef;


  viewPDF(): void {
    this.pdfService.viewPDF().subscribe(
      (response: any) => {
        const url = response.padfPat;
        console.log('http://localhost:3000/'+url,response)
        window.open('http://localhost:3000/'+url, '_blank');

      },
      error => {
        console.error('Error fetching PDF:', error);
        // Handle error, e.g., display a message to the user
      }
    );
  }
 
}
