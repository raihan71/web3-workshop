import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Features } from '../components/features/features';
import { Cta } from '../components/cta/cta';
import { Footer } from '../components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Features, Cta, Footer, RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');

  constructor() {}
}
