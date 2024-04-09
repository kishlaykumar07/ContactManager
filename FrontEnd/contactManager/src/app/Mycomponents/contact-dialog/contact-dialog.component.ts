import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {

  contactForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contact: Contact, action: string },
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: [data.contact.name, Validators.required],
      phone: [data.contact.phone, Validators.required]
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.contactForm.valid) {
      const updatedContact: Contact = {
        contactId: this.data.contact.contactId,
        name: this.contactForm.value.name,
        phone: this.contactForm.value.phone,
        createdAt: this.contactForm.value.createdAt
      };
      this.dialogRef.close(updatedContact);
    }
  }
}
