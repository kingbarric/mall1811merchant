import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  @ViewChild("editor1", { static: false }) editor1: any;
  @ViewChild("editor2", { static: false }) editor2: any;

  ckeConfig: any;
  ckeConfig2: any;
  editorValue:any
  form: FormGroup;
  msg = '';
  categories = [];
  subCategories = [{ 'id': 0, 'name': 'Select Category first' }];
  subCategoryId = 0;
  existingProduct = null;
  productId = 0;
  titleText = 'Add new product';
  fullSpecification = `<p>full specification</p>`;
  fulldescription = `<p>full description</p>`;
  constructor(private auth: AuthService, private route: Router,
    private crudService: CrudService, private utilService: UtilService) { }

  ngOnInit() {
    this.isProductExist();
    this.initForm();

    this.getCategories();
    this.configEditors();
  }

  configEditors() {
    this.ckeConfig = {
      allowedContent: true,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };

    this.ckeConfig2 = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true
    };
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      fullDescription: new FormControl('', [Validators.required]),
      fullSpecification: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      saleDiscountPrice: new FormControl('', [Validators.required]),
      salePrice: new FormControl('', [Validators.required]),
      categoryId: new FormControl('', [Validators.required])
    });

    if (this.existingProduct != null) {
      console.log(this.existingProduct);
      this.form.controls.name.patchValue(this.existingProduct.name);
      this.form.controls.description.patchValue(this.existingProduct.description);
      this.form.controls.fullDescription.patchValue(this.existingProduct.fullDescription);
      this.form.controls.fullSpecification.patchValue(this.existingProduct.fullSpecification);
      this.form.controls.quantity.patchValue(this.existingProduct.quantity);
      this.form.controls.saleDiscountPrice.patchValue(this.existingProduct.discountPrice);
      this.form.controls.salePrice.patchValue(this.existingProduct.price);
      this.form.controls.categoryId.patchValue(this.existingProduct.categoryId);
    }
  }

  saveProduct() {
    let subCat = {};
    if (this.subCategoryId != 0) {
      subCat = { subCategoryId: this.subCategoryId };
    }
    const data = {

      productId: this.productId,
      name: this.form.controls.name.value,
      description: this.form.controls.description.value,
      fullDescription: this.fulldescription,
      fullSpecification: this.fullSpecification,
      quantity: this.form.controls.quantity.value,
      discountPrice: this.form.controls.saleDiscountPrice.value,
      price: this.form.controls.salePrice.value,
      categoryId: this.form.controls.categoryId.value,
      subCategories: [subCat]

    }

    // console.log(data);
    // console.log(this.fullSpecification);
    // console.log(this.fulldescription);
    this.crudService.postAll('product/save', data)
      .then((e: any) => {
        console.log(e);
        if (e.code == 0) {
          this.utilService.toast('success', e.message);
          const p = this.crudService.fetchAllProductFromApi();
          this.utilService.saveAllProducts(p);
          this.route.navigate(['dashboard/product']);
        } else {
          this.utilService.toast('warning', e.message);
        }

      })
    // this.auth.login('product/save',data)
    // .then((e:any)=>{

    //  if(e.code===0){
    //    //save success

    //     this.route.navigate(["/dashboard/products"]);

    //  }else{
    //   this.msg ='Error occured while saving products'; 
    //  }
    //   console.log(e);
    // })
  }

  getCategories() {
    this.crudService.findAll('pub/productcategories/getwithsubcategories')
      .then((e: any) => {
        if (e) {
          console.log(e)
          this.categories = e;
        }
      });
  }

  getSubCategories(event) {
    this.subCategoryId = event.target.value;
    console.log(event.target.value);
  }
  populateSubCat(event) {
    const catId = event.target.value;
    console.log(catId);
    this.categories.forEach(element => {
      if (element.categoryId == catId) {
        this.subCategories = element.subCategories;
      }

    });

    if (this.subCategories.length == 0) {
      this.subCategories = [{ 'id': 0, 'name': 'No sub category' }]
    }
  }

  isProductExist() {
    const pro = this.utilService.getProduct();
    if (pro != null) {
      console.log('productssss');
      this.existingProduct = pro;
      this.titleText = `Update ${pro.name}`;
      this.productId = pro.id;
    } else {
      console.log('none')
    }
  }

  ngOnDestroy() {
    localStorage.removeItem('product');
  }

}
