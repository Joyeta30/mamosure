import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone:false
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput', { static: false }) sInput!: IonSearchbar;
  query: any;
allrestaurants: any[] =  [
      {
        uid: '12wefdss',
        // cover: 'assets/image/img1.jpg',
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
        // cover: 'assets/imgs/1.jpg',
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
        // cover: 'assets/imgs/2.jpg',
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
        // cover: 'assets/imgs/1.jpg',
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
    restaurants: any[] = [];
  constructor() {}

  ngOnInit() {
    // Nothing needed here for focus
  }

  ionViewDidEnter() {
    // Set focus when view is fully loaded
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }

  onSearchChange(event: any) {
    console.log('Search query:', event.detail.value);
    this.query = event.detail.value.toLowerCase();
    if(this.query.length>0){
      this.restaurants = this.allrestaurants.filter((element: any) =>{
        return element.short_name.includes(this.query);
      });
      console.log(this.restaurants);
    }
  }
}
