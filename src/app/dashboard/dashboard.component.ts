import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
products = [];
  constructor(private crudService: CrudService, private utilService: UtilService) {

   }

  ngOnInit() {
    this.findAll();
  }
  async findAll(){
    await this.crudService.fetchAllProductFromApi();
  }
}
