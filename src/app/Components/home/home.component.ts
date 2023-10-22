import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*
   */
  totalPrice:number=0;
  // if you create class and inside it a constructor for constructing object
  storeObject: StoreData = new StoreData(1, 'ahmed', 29, 5000);
  storeObjs: StoreData[] = [
    new StoreData(1, 'ahmed', 29, 5000),
    new StoreData(1, 'ali', 30, 8000),
    new StoreData(1, 'ebrahim', 25, 6000),
    new StoreData(1, 'hossam', 23, 12000),
    new StoreData(1, 'hassan', 22, 2000),
    new StoreData(1, 'shrief', 12, 3000),
    new StoreData(1, 'mossad', 16, 4000),
  ];

  /*
  this is another way is to create interface and initialize it throw literal object {}
  literal object is like anoymous object
   */
  productList: IProduct[] =[];
  categoryList: ICategory[] = [];
  selectedCategoryId:number=0;
  constructor() { 
    this.categoryList=[{categoryId:1,categoryName:'Laptop'},
    {categoryId:2,categoryName:'Taplet'},
    {categoryId:3,categoryName:'Mobile'}]

    this.productList=[
      {productId:100,productName:'LenovoThinkPad Laptop',productQuantity:5 ,productPrice:12000,productImageDescription:'this image for lenovo laptop',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:1},
      {productId:200,productName:'Apple MacBook Laptop',productQuantity:0 ,productPrice:28000,productImageDescription:'this image for mac book laptop',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:1},
      {productId:300,productName:'Lenovo Tab 2 ',productQuantity:2 ,productPrice:19000,productImageDescription:'this image for lenovo tablet',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:2},
      {productId:400,productName:'Samsung Tab',productQuantity:1 ,productPrice:29000,productImageDescription:'this image for samsung tablet',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:2},
      {productId:500,productName:'Samsung Note 10',productQuantity:7 ,productPrice:30000,productImageDescription:'this image for samsung note 10 mobile',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:3},
      {productId:600,productName:'Samsung S23 Ultra',productQuantity:5 ,productPrice:42000,productImageDescription:'this image for samsung s 23 ultra mobile',productImage:'https://fakeimg.pl/200x100/ff0000,128/000,255',categoryId:3},
    ];
    
  }

  ngOnInit(): void {
  }
  buy(productPrice:number , countItems:string){

    let numberOfItems:number=parseInt(countItems);
    // let numberOfItems2=Number(countItems);
    // let numberOfItems3=countItems;
 
    this.totalPrice=numberOfItems*productPrice;
    
  }

  ResetCategory(){
    this.selectedCategoryId=1;
  }
  prdTrackbyFun(index:number , product:IProduct):number
  {
    return product.productId ; 
  }
}
