import { Component } from '@angular/core';
import { CategoriesComponent } from '../categories/categories.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { ProducthomeComponent } from '../producthome/producthome.component';

@Component({
  selector: 'app-home',
  imports: [
    CategoriesComponent,
    CommonModule,
    HeroComponent,
    ProducthomeComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
