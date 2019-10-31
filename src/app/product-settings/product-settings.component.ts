import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { UtilService } from '../services/util.service';
import Swal from 'sweetalert2';
import { ImageCroppedEvent } from 'ngx-image-cropper';

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
  imageFile: any = '';
  public imagePath;
  imgURL: any;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public message: string;
  allImages = [];
  imageRoot;

  constructor(private auth: AuthService, private route: Router,
    private crudService: CrudService, private utilService: UtilService) {
    this.imagePath = this.crudService.rootURL;
  }

  ngOnInit() {
    this.existingProduct = this.isProductExist();
    if (this.existingProduct === null) {
      this.route.navigate(['dashboard/product'])
    }
    this.initForm(this.existingProduct);
    this.initFormInventory();

    this.findAllImage();
  }


  findAllImage() {
    this.crudService.findAll(`product/viewallimage/${this.existingProduct.id}`)
      .then((e: any) => {
        //  console.log(e)
        //  this.utilService.saveAllProducts(this.products);
        this.allImages = e;
      })
  }

  getImage(p) {
    return this.crudService.rootURL + p;
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(event.target);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imageFile = event.file;
    //console.log(event)
    // console.log(this.croppedImage);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
    this.utilService.toast('error', 'Error occured while loading image, make sure image is valid');
  }

  urltoFile(image) {
    const byteString = atob(image.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    const newBlob = new Blob([ab], {
      type: 'image/png',
    });
    return newBlob;
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
      if (result.value) {
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
      }
    })
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
      if (result.value) {
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

      }
    })

  }



  addImage() {
    const url = 'product/uploadimage';

    //   console.log(this.croppedImage);
    const file = this.urltoFile(this.croppedImage);
    const fd = new FormData();
    fd.append('file', file);
    fd.append('id', this.existingProduct.id);
    console.log(fd);

    this.crudService.postUpload(url, fd)
      .then((res: any) => {
        console.log(res)
        if (res.code === 0) {
          this.utilService.toast('success', res.message);
          this.croppedImage = null;
          this.findAllImage();
        }
      })
      .catch(e => this.utilService.toast('error', 'There was an error while uploading image ' + e.message));
  }


  isDefault(url) {
    console.log('EXISTING: ',this.existingProduct.imageCover,' IMAGEURL: ',url)
    return this.existingProduct.imageCover === url;
  }

  deleteImage(id) {


    Swal.fire({
      title: 'Please confirm',
      text: 'Delete this image ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        this.crudService.findAll(`product/deleteimage/${id}`)
          .then((e: any) => {
            if (e.code == 0) {
              this.utilService.toast('success', e.message);
              this.findAllImage();
            } else {
              this.utilService.toast('warning', e.message)
            }
          })

      }
    })
  }

  setAsDefault(imageId) {

    Swal.fire({
      title: 'Please confirm',
      text: 'Set as default Cover Image ?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.value) {
        this.crudService.findAll(`product/makeimagedefault/${imageId}/${this.existingProduct.id}`)
          .then((e: any) => {
            if (e.code == 0) {
              this.utilService.toast('success', e.message);
              this.findAllImage();
            } else {
              this.utilService.toast('warning', e.message)
            }
          })

      }
    })

  }

}

