import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

  @Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [Header, Footer],
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.scss',
  })
  export class LandingPage {

}
