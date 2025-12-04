import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'inversionista/:id',
    loadComponent: () =>
      import('./inversionista-detalle/inversionista-detalle.component')
        .then(m => m.InversionistaDetalleComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
