import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContacDetailComponent } from '../contac-detail/contact-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private _dialog: MatDialog) { }
  openAddEditForm() {
    this._dialog.open(ContacDetailComponent);
  }
}
