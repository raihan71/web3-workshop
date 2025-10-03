import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
