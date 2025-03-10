import { Component } from '@angular/core';
import { ProductitemComponent } from '../productitem/productitem.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producthome',
  standalone: true,
  imports: [ProductitemComponent, CommonModule],
  templateUrl: './producthome.component.html',
  styleUrl: './producthome.component.css',
})
export class ProducthomeComponent {}
