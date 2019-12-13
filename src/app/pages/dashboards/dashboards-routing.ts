import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultDashboardComponent } from './default/default.component';
import { ProductsComponent } from './dashboard2/products.component';
import { OrdersComponent } from './dashboard3/orders.component';
import { CustomersComponent } from './dashboard4/customers.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultDashboardComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'customers',
        component: CustomersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
