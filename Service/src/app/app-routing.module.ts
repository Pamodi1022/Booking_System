// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }
  // Route for the company module will be added here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Set up routing
  exports: [RouterModule] // Export RouterModule for use in other parts of the app
})
export class AppRoutingModule { }
