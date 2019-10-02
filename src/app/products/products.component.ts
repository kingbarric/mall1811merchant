import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
products =[] ;
  constructor(private crudService : CrudService) { }

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
}
