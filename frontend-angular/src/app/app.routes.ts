import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InversionistasComponent } from './inversionistas/inversionistas.component';
import { ListadoInversionistasComponent } from './pages/listado-inversionistas/listado-inversionistas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },               
  { path: 'inversionistas', component: InversionistasComponent },
  { path: 'listado', component: ListadoInversionistasComponent },
];
