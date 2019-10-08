import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-products-inventory',
  templateUrl: './products-inventory.component.html',
  styleUrls: ['./products-inventory.component.scss']
})
export class ProductsInventoryComponent implements OnInit {

  products =[] ;
  pro=null;
  inventories ;
  constructor(private crudService : CrudService, private router: Router, private utilService :UtilService) { }
  p: number = 1;
  ngOnInit() {
    this.findAll();
  }


    findAll(){
  this.products = this.utilService.fetchAllProduct();
  }
  selected(target){
    console.log(target);
    const id = target.value;
    this.products.forEach(element => {
      if(element.id == id){
        this.pro =  element;
        
      }
    });

    //productinventory
    this.crudService.findAll(`productinventory/viewall/${id}`)
    .then(e=>{
      this.inventories = e;
      console.log(e);
    })
  }

getDate(d){
  return this.utilService.getDate(d);
}
}
