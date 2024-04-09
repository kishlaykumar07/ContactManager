import { Component, OnInit } from '@angular/core';
import { ContactDetailService } from '../contact-detail.service';
import { Contact } from '../contact.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit{

  dataSource: Contact[] = [];
  displayedColumns: string[] = ['contactId', 'name', 'phone', 'createdAt', 'edit', 'delete'];

  constructor(
    private contactService: ContactDetailService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getContactList();
  }

  getContactList(): void {
    this.contactService.getContacts().subscribe({
      next: (res: Contact[]) => {
        this.dataSource = res;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error fetching contacts:', err);
      }
    });
  }

  editContact(contactId: number): void {
    const contact = this.dataSource.find(c => c.contactId === contactId);
    if (contact) {
      const dialogRef = this.dialog.open(ContactDialogComponent, {
        width: '60vh',
        height: '50vh',
        data: {
          contact: contact,
          action: 'edit'
        },
        panelClass: 'custom-dialog' 
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateContact(result);
        }
      });
    }
  }


  updateContact(updatedContact: Contact): void {
    this.contactService.updateContact(updatedContact).subscribe({
      next: (res: Contact) => {
        // Find the index of the updated contact in the dataSource
        const index = this.dataSource.findIndex(c => c.contactId === updatedContact.contactId);
        if (index !== -1) {
          // Update the contact in the dataSource
          this.dataSource[index] = res;
        }
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error updating contact:', err);
      }
    });
  }

  deleteContact(contactId: number): void {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contactService.deleteContact(contactId).subscribe({
        next: () => {
          this.dataSource = this.dataSource.filter(contact => contact.contactId !== contactId);
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error deleting contact:', err);
        }
      });
    }
  }
}