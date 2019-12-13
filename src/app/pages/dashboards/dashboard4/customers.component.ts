import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customer } from './dashboard4.model';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-dashboard4',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

/**
 * Dashboard-4 component - handling the dashboard-4 with navbar and content
 */
export class CustomersComponent implements OnInit {
  modalRef: BsModalRef;
  // bread crumb items

  addCustomerForm: FormGroup;
  customerData: Customer[];
  isEditMode: boolean;
  editcustomerData: any;


  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private customerService: CustomerService
  ) { }


  get f() { return this.addCustomerForm.controls; }


  ngOnInit() {


    this.addCustomerForm = this.formBuilder.group({
      name: [''],
      phone: ['']
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
    this.customerService.getAllCustomers().subscribe(res => {
      console.log(res);
      this.customerData = res;
      console.log(this.customerData);
    })
  }

  onCloseModal() {
    this.isEditMode = false;
    this.addCustomerForm.reset();
  }

  openModal(template: TemplateRef<any>, customer) {
    this.modalRef = this.modalService.show(template);
    if (customer != null) {
      this.editcustomerData = customer;
      this.isEditMode = true;
      this.addCustomerForm.setValue({
        name: customer.name,
        phone: customer.phone
      });
    }
  }

  onSubmit() {
    if (!this.isEditMode) {
      this.customerService.addCustomer(this.addCustomerForm.value)
        .subscribe(
          data => {
            console.log(data);
            if (data != undefined) {
              this.customerData.push(data);

            }
            this.modalRef.hide();
            console.log("After push", this.customerData);
          },
          error => {
            console.log(error);
          });
      this.addCustomerForm.reset();
    }
    else
      this.editCustomer(this.editcustomerData)
  }

  deleteCustomer(customerid) {
    this.customerService.DeleteCustomer(customerid).subscribe(res => {
      console.log("deleted", res);
      this.customerData = this.customerData.filter(function (obj) {
        return obj._id !== customerid;
      });
      console.log("After Delete", this.customerData);
    })
  }


  editCustomer(customer) {

    this.customerService.UpdateCustomer(customer._id, this.addCustomerForm.value).subscribe(res => {
      console.log(res);
      this._fetchData();
      this.modalRef.hide();
      this.isEditMode = false;
      this.addCustomerForm.reset();
    })

  }

}
