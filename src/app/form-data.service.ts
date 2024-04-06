import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private backendUrl = 'http://localhost:3000'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  saveFormData(formData: any) {
    return this.http.post(`${this.backendUrl}/users`, formData);
  }
}
