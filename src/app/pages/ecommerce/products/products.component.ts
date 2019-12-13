import { Component, OnInit } from '@angular/core';

import { Products } from './products.model';

import { productData } from './data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Products component - handling the products with navbar and content
 */
export class ProductsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  productData: Products[];
  term: any;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Products', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches product values
   */
  private _fetchData() {
    this.productData = productData;
  }
}
