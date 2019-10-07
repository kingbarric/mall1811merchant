import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { UtilService } from '../services/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-settings',
  templateUrl: './product-settings.component.html',
  styleUrls: ['./product-settings.component.scss']
})
export class ProductSettingsComponent implements OnInit {


  form: FormGroup;
  formInventory;
  msg = '';
  categories = [];
  subCategories = [{ 'id': 0, 'name': 'Select Category first' }];
  subCategoryId = 0;
  existingProduct = null;
  productId = 0;
  titleText = 'Add new product';
  imageFile;
  public imagePath;
  imgURL: any;
  public message: string;
  constructor(private auth: AuthService, private route: Router,
    private crudService: CrudService, private utilService: UtilService) { }

  ngOnInit() {
    this.existingProduct = this.isProductExist();
    if (this.existingProduct === null) {
      this.route.navigate(['dashboard/product'])
    }
    this.initForm(this.existingProduct);
    this.initFormInventory();
  }

  initForm(pro) {
    console.log('pross ', pro);
    this.form = new FormGroup({
      isUpforSale: new FormControl(pro.isUpforsale, [Validators.required]),
      isUpforAuction: new FormControl(pro.isUpforauction, [Validators.required])
    });
  }

  initFormInventory() {

    this.formInventory = new FormGroup({
      quantity: new FormControl('', [Validators.required]),
      note: new FormControl('', [Validators.required])
    });
  }

  isProductExist() {
    const pro = JSON.parse(localStorage.getItem('product'));
    if (pro != null) {
      console.log('productssss', pro);
      this.existingProduct = pro;
      this.titleText = `Update ${pro.name}`;
      this.productId = pro.id;
      return pro;
    } else {
      return null;
      // console.log('none')
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('product');
  }

  updateSaleAuction() {
    const data = {
      productId: this.existingProduct.id,
      isUpforSale: this.form.controls.isUpforSale.value,
      isUpforAuction: this.form.controls.isUpforAuction.value,
    }
    console.log(data)
    Swal.fire({
      title: 'Please confirm',
      text: 'Update sales and auction status? ',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if(result.value){
    this.crudService.postAll('product/updatesalesauction', data)
      .then((e: any) => {
        console.log(e);
        if (e.code == 0) {
          this.utilService.toast('success', e.message);
          //  this.route.navigate(['dashboard/product']);
        } else {
          this.utilService.toast('warning', e.message);

        }
      });
    }  })
  }

  saveInventory() {
    const data = {
      productId: this.existingProduct.id,
      quantity: this.formInventory.controls.quantity.value,
      note: this.formInventory.controls.note.value
    }
 

    Swal.fire({
      title: 'Please confirm',
      text: 'Add new qauntity?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if(result.value){
         this.crudService.postAll('productinventory/save', data)
        .then((e: any) => {
          console.log(e);
          if (e.code == 0) {
            this.utilService.toast('success', e.message);
            //  this.route.navigate(['dashboard/product']);
            this.existingProduct.quantity = this.existingProduct.quantity + data.quantity;
          } else {
            this.utilService.toast('warning', e.message);

          }
        });

      }  })


    // if(this.utilService.confirm('Add new qauntity?')){

    // }


  }

  uploadChange(files){
    this.imageFile =  files[0];
    if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
  }
 
  addImage() {
   
    

    const url = 'product/uploadimage';

    // console.log(data);
    const fd = new FormData();
    fd.append('file', this.imageFile );
    fd.append('id', this.existingProduct.id);
   // console.log(file)

    this.crudService.postUpload(url, fd)
      .then((res: any) => {
        console.log(res)
        if (res.code === 0) {
          this.utilService.toast('success', res.message);
        }
      })
      .catch(e => this.utilService.toast('error', 'There was an error while uploading image'));
  }


 
  preview(files) {
  
  }

}

