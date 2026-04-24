import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConverterComponent } from './pages/converter/converter.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'converter', component: ConverterComponent },
    { path: 'about', component: AboutComponent },

    //404-sida
    { path: '**', component: NotFoundComponent }
];