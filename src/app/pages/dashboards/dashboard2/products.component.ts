import { Component, OnInit, TemplateRef } from '@angular/core';
import { Sellingproduct } from './dashboard2.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Dashboard-2 component: handling the dashboard-2 with navbar and content
 */
export class ProductsComponent implements OnInit {
  modalRef: BsModalRef;
  // bread crumb items

  addProductForm: FormGroup;
  productData: Sellingproduct[];
  isEditMode: boolean;
  editProductData: any;


  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
  ) { }


  get f() { return this.addProductForm.controls; }


  ngOnInit() {


    this.addProductForm = this.formBuilder.group({
      product_name: [''],
      purchase_price: [],
      selling_price: [],
      stocks: []
    });

    /**
     * fetches data
     */
    this._fetchData();
  }

  

  /**
   * fetches the dashboard-2 data
   */
  private _fetchData() {
    this.productService.getAllProducts().subscribe(res => {
      console.log(res);
      this.productData = res;
      console.log(this.productData);
    })
  }

  onCloseModal() {
    this.isEditMode = false;
    this.addProductForm.reset();
  }

  openModal(template: TemplateRef<any>, product) {
    this.modalRef = this.modalService.show(template);
    if (product != null) {
      this.editProductData = product;
      this.isEditMode = true;
      this.addProductForm.setValue({
        product_name: product.product_name,
        purchase_price: product.purchase_price,
        selling_price: product.selling_price,
        stocks: product.stocks
      });
    }
  }

  onSubmit() {
    if (!this.isEditMode) {
      this.productService.addProduct(this.addProductForm.value)
        .subscribe(
          data => {
            console.log(data);
            if (data != undefined) {
              this.productData.push(data);

            }
            this.modalRef.hide();
            console.log("After push", this.productData);
          },
          error => {
            console.log(error);
          });
          this.addProductForm.reset();
    }
    else
      this.editProduct(this.editProductData)
  }

  deleteProduct(productid) {
    this.productService.DeleteProduct(productid).subscribe(res => {
      console.log("deleted", res);
      this.productData = this.productData.filter(function (obj) {
        return obj._id !== productid;
      });
      console.log("After Delete", this.productData);
    })
  }


  editProduct(product) {

    this.productService.UpdateProduct(product._id, this.addProductForm.value).subscribe(res => {
      console.log(res);
      this._fetchData();
      this.modalRef.hide();
      this.isEditMode = false;
      this.addProductForm.reset();
    })

  }

}
