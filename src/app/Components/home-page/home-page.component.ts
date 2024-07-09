import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // Array for all list items
  listItem = [
    {
      name: 'Burberry Flowy Dress with pink and gold',
      priceTag: 'RRP £129.99',
      size: '4',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master.png'
    },
    {
      name: 'Prada Beach dress',
      priceTag: 'RRP £129.99',
      size: '8',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master-2.png'
    },
    {
      name: 'Bhandage Red dress for evening wear',
      priceTag: 'RRP £129.99',
      size: '12',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master-1.png'
    },
    {
      name: 'Prada Wedding guest',
      priceTag: 'RRP £129.99',
      size: '12',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master-3.png'
    },
    {
      name: 'Ansell Nightwear',
      priceTag: 'RRP £129.99',
      size: '14',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master-4.png'
    },
    {
      name: 'Desacada Summer dress',
      priceTag: 'RRP £129.99',
      size: '8',
      rental: '£12.00 Rental',
      img: 'assets/Image-Master-5.png'
    },
  ]

}
