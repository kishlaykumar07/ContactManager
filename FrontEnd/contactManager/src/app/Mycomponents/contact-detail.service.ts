import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailService {

  constructor(private httpClient: HttpClient) { }
  api = "http://localhost:9090";
  public saveContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(`${this.api}/save/contact` , contact);
  }

  public getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.api}/get/contact`);
  }

  public updateContact(updatedContact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(`${this.api}/update/contact`, updatedContact);
  }

  public deleteContact(contactId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.api}/delete/contact/${contactId}`);
  }
}
 