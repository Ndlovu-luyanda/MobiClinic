import { Routes } from '@angular/router';
import { LandingPage } from './features/landing-page/landing-page';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import {Benefits} from './features/landing-page/component/benefits/benefits';
import {HowItWork} from './features/landing-page/component/how-it-work/how-it-work';
import {Introductio} from './features/landing-page/component/introductio/introductio';
import {Services} from './features/landing-page/component/services/services';

export const routes: Routes = [
    {path : '', component : LandingPage},
    {path : 'benefits', component : Benefits},
    {path : 'how-it-work', component : HowItWork},
    {path : 'introduction', component : Introductio},
    {path : 'services', component : Services},
    {path : 'footer', component : Footer},
    {path : 'header', component : Header}
];
