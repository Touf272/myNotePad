import { Routes } from '@angular/router';
import { Hello } from './hello/hello';
import { Gb } from './goodbye/gb'


// Redirection process
export const routes: Routes = [
    { path: '', redirectTo: 'goodbye', pathMatch: 'full' }, // main
    {path: 'edit/:id', component: Hello},
    {path: 'goodbye', component: Gb}
];
