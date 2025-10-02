import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { contractAddress } from '../configs/constant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');

  constructor() {}
}
