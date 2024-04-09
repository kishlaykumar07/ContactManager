import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { NgForm } from '@angular/forms';
import { ContactDetailService } from '../contact-detail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contac-detail',
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContacDetailComponent implements OnInit{

  contact: Contact = {
    contactId: 0,
    name:  '',
    phone: '',
    createdAt: ''
  }
  constructor(
    private contactService: ContactDetailService,
    private router: Router,
    private dialogRef: MatDialogRef<ContacDetailComponent>
  ) { }
  ngOnInit(): void {
    
  }
  saveContact(contactForm: NgForm): void{
    if (contactForm.invalid) {
      console.log("Form is invalid");
      return;
    }
    this.contactService.saveContact(this.contact).subscribe(
      {
        next: (res: Contact) => {
          console.log("Contact saved successfully:", res);
          contactForm.reset();
          this.dialogRef.close();
          this.router.navigate(["/contact-list"]);
        },
        error: (err: HttpErrorResponse) => {
          console.error("Error saving contact:", err);
        }
      }
    );
  }

  clearForm(contactForm: NgForm): void {
    contactForm.resetForm(); // Reset the form
    this.contact = {       // Reset the contact object
      contactId: 1,
      name: '',
      phone: '',
      createdAt: ''
    };
  }
}

