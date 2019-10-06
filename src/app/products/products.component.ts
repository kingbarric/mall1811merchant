import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products =[] ;
  constructor(private crudService : CrudService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }


  async findAll(){
    await this.crudService.findAll('product/viewallbymerchant')
    .then((e:any)=>{
      console.log(e);
      this.products = e;
      this.products.reverse();

    })
  }

  editProduct(pro){
    localStorage.setItem('product',JSON.stringify(pro));
    this.router.navigate(['dashboard/add-product'])
    .then(e=>{
     
    })
    
  }

  productSettings(pro){
    //
    localStorage.setItem('product',JSON.stringify(pro));
    this.router.navigate(['dashboard/product-settings'])
    .then(e=>{
     
    })
  }
}
