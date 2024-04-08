import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeaderComponent } from './Mycomponents/header/header.component';
// import { ContacDetailComponent } from './Mycomponents/contact-detail/contact-detail.component';

import { ContactListComponent } from './Mycomponents/contact-list/contact-list.component';
import { HomeComponent } from './Mycomponents/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // {
  //   path: "contact-detail",
  //   component: ContacDetailComponent,
  //   pathMatch: "full"
  // },

  {
    path: "contact-list",
    component: ContactListComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
