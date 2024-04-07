import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
  }

  private users: any[] = []; // User data store
  private usersSubject = new BehaviorSubject<any[]>([]);
  
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/users');
  }
  private apiUrl = 'http://localhost:3000/users'; // Replace with your backend API URL
  getUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }

  updateUser(userId: string, userData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, userData);
  }
  
}
