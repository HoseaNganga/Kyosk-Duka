import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperRef!: ElementRef;
  images: string[] = [
    'assets/slider1.jpg',
    'assets/slider2.jpg',
    'assets/slider3.jpg',
  ];
  ngAfterViewInit(): void {
    new Swiper(this.swiperRef.nativeElement, {
      modules: [],
      slidesPerView: 1,
      spaceBetween: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
