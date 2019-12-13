import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Order } from './dashboar3.model';
import { OrderService } from 'src/app/core/services/order.service';


@Component({
  selector: 'app-dashboard3',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

/**
 * Dashboard-3 component: handling the dashboard-3 with navbar and content
 */
export class OrdersComponent implements OnInit {
  modalRef: BsModalRef;
  // bread crumb items

  addOrderForm: FormGroup;
  orderData: Order[];
  isEditMode: boolean;
  editorderData: any;


  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private orderServive: OrderService
  ) { }


  get f() { return this.addOrderForm.controls; }


  ngOnInit() {


    this.addOrderForm = this.formBuilder.group({
      date: [new Date()],
      customer_name: [''],
      phone: [''],
      product_name: [''],
      selling_price: [],
      quantity: [],
      total_price: [],
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
    this.orderServive.getAllOrders().subscribe(res => {
      console.log(res);
      this.orderData = res;
      console.log(this.orderData);
    })
  }

  onCloseModal() {
    this.isEditMode = false;
    this.addOrderForm.reset();
  }

  openModal(template: TemplateRef<any>, order) {
    this.modalRef = this.modalService.show(template);
    if (order != null) {
      this.editorderData = order;
      this.isEditMode = true;
      this.addOrderForm.setValue({
        date: order.date,
        customer_name: order.customer_name,
        phone: order.phone,
        product_name: order.product_name,
        selling_price: order.selling_price,
        quantity: order.quantity,
        total_price: order.quantity * order.selling_price
      });
    }
  }

  onSubmit() {
    if (!this.isEditMode) {

      this.f.total_price.setValue(this.f.selling_price.value * this.f.quantity.value);
      this.orderServive.addOrder(this.addOrderForm.value)
        .subscribe(
          data => {
            console.log(data);
            if (data != undefined) {
              this.orderData.push(data);

            }
            this.modalRef.hide();
            console.log("After push", this.orderData);
          },
          error => {
            console.log(error);
          });
      this.addOrderForm.reset();
    }
    else
      this.editOrder(this.editorderData)
  }

  deleteOrder(orderid) {
    this.orderServive.DeleteOrder(orderid).subscribe(res => {
      console.log("deleted", res);
      this.orderData = this.orderData.filter(function (obj) {
        return obj._id !== orderid;
      });
      console.log("After Delete", this.orderData);
    })
  }


  editOrder(order) {

    this.f.total_price.setValue(this.f.selling_price.value * this.f.quantity.value);
    this.orderServive.UpdateOrder(order._id, this.addOrderForm.value).subscribe(res => {
      console.log(res);
      this._fetchData();
      this.modalRef.hide();
      this.isEditMode = false;
      this.addOrderForm.reset();
    })

  }

}
