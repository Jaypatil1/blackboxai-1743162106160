import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://example.com/api/contact';
  private useMock = true; // Set to false for real API calls

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any): Observable<any> {
    if (this.useMock) {
      return this.mockSendContactForm(formData);
    }
    return this.http.post(this.apiUrl, formData);
  }

  private mockSendContactForm(formData: any): Observable<any> {
    // Simulate network delay and random success/failure
    const isSuccess = Math.random() > 0.2; // 80% success rate
    const response = isSuccess 
      ? { success: true, message: 'Message sent successfully!' }
      : { success: false, message: 'Failed to send message. Please try again.' };
    
    return of(response).pipe(delay(800)); // 0.8 second delay
  }
}