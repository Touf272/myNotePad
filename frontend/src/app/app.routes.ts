import { Routes } from '@angular/router';
import { modifyPage } from './modifypage/modifypage';
import { mainPage } from './mainpage/mainpage'


// Redirection process
export const routes: Routes = [
    { path: '', redirectTo: 'mainpage', pathMatch: 'full' }, // main
    {path: 'edit/:id', component: modifyPage},
    {path: 'mainpage', component: mainPage}
];
