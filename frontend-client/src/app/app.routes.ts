import { Routes } from '@angular/router';
import { LandingPage } from './shared/components/landing-page/landing-page';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

export const routes: Routes = [
    {path : '', component : LandingPage},
    {path : '',component: Footer},
    {path : '', component : Header}
];
