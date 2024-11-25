import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RelatoComponent } from './Pages/relato/relato.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'Relato',
        component: RelatoComponent,
        title: 'Relato'
    }
];