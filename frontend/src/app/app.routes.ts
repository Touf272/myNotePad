import { Routes } from '@angular/router';
import { Hello } from './hello/hello';
import { Gb } from './goodbye/gb'


// Redirection process
export const routes: Routes = [
    { path: '', redirectTo: 'hello', pathMatch: 'full' }, // main
    {path: 'hello', component: Hello},
    {path: 'goodbye', component: Gb}
];
