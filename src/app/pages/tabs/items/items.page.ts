import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Preferences} from '@capacitor/preferences';


@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
  standalone:false
})
export class ItemsPage implements OnInit {

  id: any;
  data: any ={};
  items: any[] = [];
  
  veg: boolean= false;
  cartData: any={};
  storedData: any={};
restaurants  =[
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
      address: 'Jhargram, ghoradhra',
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdiojss',
        cover: 'assets/imgs/1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican',
        ],
      rating: 5,
      delivery_time: 25,
      address: 'Jhargram, ghoradhra',
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdtgfcss',
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit2',
        short_name: 'stayfit2',
        cuisines: [
          'Italian3',
          'Mexican',
        ],
      rating: 3,
      delivery_time: 25,
      address: 'Jhargram, ghoradhra',
      distance: 2.5,
      price: 100
      },
       {
         uid: '12wefdsspbvde',
        cover: 'assets/imgs/1.jpg',
        name: 'Stayfit',
        short_name: 'stayfit',
        cuisines: [
          'Italian',
          'Mexican',
        ],
      rating: 5,
      delivery_time: 25,
      address: 'Jhargram, ghoradhra',
      distance: 2.5,
      price: 100
      },

    ];
     categories: any[] = [
    {
      id: "e00",
      name: "NEW ARRIVE",
      uid: "12wefdss"
    },
    // {
    //   id: "e0",
    //   name: "Good PRODUCT",
    //   uid: "12wefdss"
    // },
  ]; 

    allItems = [
    {
        category_id: "e00",
        cover: "assets/image/img1.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Product1",
        price: 120,
        rating: 0,
        status: true,
        uid: "12wefdss",
        
       
    },
    // {
    //     category_id: "e0",
    //     cover: "assets/imgs/salad.jpg",
    //     desc: "Great in taste",
    //     id: "i2",
    //     name: "product2",
    //     price: 200,
    //     rating: 0,
    //     status: true,
    //     uid: "12wefdss",
        
    // },
    // {
    //     category_id: "e00",
    //     cover: "assets/imgs/pasta.jpg",
    //     desc: "Great in taste",
    //     id: "i3",
    //     name: "Product3",
    //     price: 150.50,
    //     rating: 0,
    //     status: true,
    //     uid: "12wefdss",
       
    // },
  ];
  constructor(
    private navCtrl:NavController,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('restaurantId')){
        this.navCtrl.back();
        return;
      }
      this.id =paramMap.get('restaurantId');
      console.log('id:' , this.id);
      this.getItem();
    });
  }
   getCart() {
   return Preferences.get({key: 'cart'});
  }
 getItem() {
  this.data = {};
  this.cartData = {};
  this.storedData = {};

  (async () => {
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    this.categories = this.categories.filter(x => x.uid === this.id);
    this.items = this.allItems.filter(x => x.uid === this.id);
    console.log('restaurant: ', this.data);

    let cart: any = await this.getCart();
    console.log('cart: ', cart);

    if (cart?.value) {
      this.storedData = JSON.parse(cart.value);
      console.log('storedData: ', this.storedData);

      if (this.id == this.storedData.restaurant.uid && this.allItems.length > 0) {
        this.allItems.forEach((element: any) => {
          this.storedData.items.forEach((ele: any) => {
            if (element.id !== ele.id) return;
            element.quantity = ele.quantity;
          });
        });
      }

      this.cartData.totalItem = this.storedData.totalItem;
      this.cartData.totalPrice = this.storedData.totalPrice;
    }
  })(); // ⬅️ IIAFE is invoked here
}

  vegOnly(event){
    console.log(event.detail.checked);
  }

   quantityPlus(item: any, index: number) {
    item.quantity = (item.quantity || 0) + 1;
    this.calculate();
  }

  quantityMinus(item: any, index: number) {
    if (item.quantity > 0) {
      item.quantity -= 1;
    }
    this.calculate();
}
calculate(){
  console.log(this.items);
  this.cartData.items =[];
  let item =this.items.filter(x => x.quantity>0);
  console.log('added items: ',item);
  this.cartData.items = item;
  this.cartData.totalPrice =0;
  this.cartData.totalItem = 0;
  item.forEach(element =>{
    this.cartData.totalItem +=element.quantity;
    this.cartData.totalPrice += parseFloat(element.price) * (parseFloat(element.quantity));
  });
  this.cartData.totalPrice = parseFloat(this.cartData.totalPrice)
  if(this.cartData.totalItem == 0){
    this.cartData.totalItem = 0;
    this.cartData.totalPrice =0;
  }
  console.log('cart:', this.cartData);
}
async saveToCart() {
  try {
    this.cartData.restaurant = {};
    this.cartData.restaurant = this.data;
    console.log('cartData', this.cartData);
    await Preferences.set({
      key: 'cart',
      value: JSON.stringify(this.cartData),
    });
  } catch (e) {
    console.log(e);
  }
}

 async viewCart(){
  if(this.cartData.items && this.cartData.items.length >0)await this.saveToCart();
  console.log('router url' , this.router.url);
  this.router.navigate([this.router.url + '/cart']);
}
}
