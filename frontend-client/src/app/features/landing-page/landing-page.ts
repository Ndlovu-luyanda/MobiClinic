import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Benefits } from '../landing-page/component/benefits/benefits';
import { HowItWork } from '../landing-page/component/how-it-work/how-it-work';
import { Introductio } from '../landing-page/component/introductio/introductio';
import { Services } from '../landing-page/component/services/services';

  @Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [Header, Footer, Benefits, HowItWork, Introductio, Services],
    templateUrl: './landing-page.html',
    styleUrl: './landing-page.scss',
  })
  export class LandingPage {

}
