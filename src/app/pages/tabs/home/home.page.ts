import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})
export class HomePage implements OnInit {
// swiperModules = [IonicSlides];
 banners: any[] = [];
restaurants: any[] =[];
isLoading: boolean =false;
selectedFilter: string = 'trending';

  constructor() { }



   ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.banners = [  
        {banner: 'assets/image/image2.gif'},
        {banner: 'assets/image/image3.gif'},
        {banner: 'assets/image/image2.gif'}  
      ];
     this.restaurants  = [
      {
        uid: '12wefdss',
        cover: 'assets/image/img1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican',
        ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdiojss',
        cover: 'assets/image/img1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican',
        ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdtgfcss',
        cover: 'assets/image/img1.jpg',
        name: 'Stayfit2',
        short_name: 'stayfit2',
        cuisines: [
          'Italian3',
          'Mexican',
        ],
      rating: 3,
      delivery_time: 25,
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdsspbvde',
        cover: 'assets/image/img1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican',
        ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100
      },

    ];
    this.isLoading = false;
  },3000);
  }
//   products = [
//   { name: 'Mamosure', price: 'Rs. 9,999.00', image: 'assets/image/img.jpg' },
//   { name: 'AAA', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'BBB', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'CCC', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'CCC', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'CCC', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'CCC', price: '$88.00', image: 'assets/image/placeholder.png' },
//   { name: 'CCC', price: '$88.00', image: 'assets/image/placeholder.png' },
// ];

setFilter(filter: string) {
  this.selectedFilter = filter;
  // You can implement real filtering here based on the selected type
}

}
