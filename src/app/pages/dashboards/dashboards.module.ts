import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbDatepickerModule, NgbDropdownModule, NgbProgressbarModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsModule } from 'ng2-charts';


import { UIModule } from '../../shared/ui/ui.module';
import { DashboardsRoutingModule } from './dashboards-routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DefaultDashboardComponent } from './default/default.component';
import { ProductsComponent } from './dashboard2/products.component';
import { OrdersComponent } from './dashboard3/orders.component';
import { CustomersComponent } from './dashboard4/customers.component';

@NgModule({
  declarations: [DefaultDashboardComponent, ProductsComponent, OrdersComponent, CustomersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgbProgressbarModule,
    NgbTooltipModule,
    NgApexchartsModule,
    ChartsModule,
    NgbCollapseModule,
    UIModule,
    DashboardsRoutingModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(), 
  ]
})
export class DashboardsModule { }
