import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfGenerationService {
  private apiUrl = 'http://localhost:3000/pdf/generate'; // Update with your API endpoint

  constructor(private http: HttpClient) {}


  generatePdf(): Observable<any> {
    return this.http.get(this.apiUrl); // No need to specify responseType for JSON data
  }

  private pdfUrl = 'http://localhost:3000/pdf/download'; // Update with your API endpoint
  downloadPDF(): Observable<Blob> {
    return this.http.get(this.pdfUrl, { responseType: 'blob' });
  }

  private pdfViewUrl = 'http://localhost:3000/pdf/view'; // Update with your API endpoint

  viewPDF(): Observable<any> {
    return this.http.get(this.pdfViewUrl);
  }
}
