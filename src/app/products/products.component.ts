import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products =[] ;
  constructor(private crudService : CrudService, private router: Router, private utilService :UtilService) { }
  p: number = 1;
  ngOnInit() {
    this.findAll();
  }


    findAll(){
  this.products = this.utilService.fetchAllProduct();
  }

  editProduct(pro){
    this.utilService.saveProduct(pro);
    this.router.navigate(['dashboard/add-product'])
    .then(e=>{
     
    })
    
  }

  productSettings(pro){
    //
    this.utilService.saveProduct(pro);
    this.router.navigate(['dashboard/product-settings'])
    .then(e=>{
     
    })
  }
}
