import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperRef!: ElementRef;
  isOpen: boolean = false;
  categories: { id: number; title: string }[] = [
    { id: 1, title: 'Electronics' },
    { id: 2, title: 'Fashion' },
    { id: 3, title: 'Home & Kitchen' },
    { id: 4, title: 'Books' },
    { id: 5, title: 'Sports & Outdoors' },
  ];
  toggleCategories() {
    this.isOpen = !this.isOpen;
  }
  ngAfterViewInit(): void {
    new Swiper(this.swiperRef.nativeElement, {
      modules: [],
      slidesPerView: 4,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
