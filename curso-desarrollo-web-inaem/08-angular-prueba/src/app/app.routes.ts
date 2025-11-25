import { Routes } from '@angular/router';
import { Inicio } from './cmp04-informes/pages/inicio/inicio';
import { NuevoInforme } from './cmp04-informes/pages/nuevo-informe/nuevo-informe';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'nuevo-informe', component: NuevoInforme }
];
