import { Component, OnInit, ElementRef } from '@angular/core';

import { Widget, UserBalance, RevenueData, ChartType } from './default.model';

import { widgetData, salesMixedChart, revenueRadialChart, userBalanceData, revenueData } from './data';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-default-dashboard',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

/**
 * Dashboard-1 component: handling the dashboard-1 with navbar and content
 */
export class DefaultDashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  widgetData: Widget[];
  userBalanceData: UserBalance[];
  revenueData: RevenueData[];
  salesMixedChart: ChartType;
  revenueRadialChart: ChartType;
  currentDate = new Date();
  totalOrders: any;
  totalSellingPrice: any;
  constructor(private eref: ElementRef,private orderService:OrderService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Dashboard', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the dashboard value
   */
  private _fetchData() {

    this.orderService.totalOrder().subscribe(res=>{
      console.log('total orders',res);
      this.totalOrders=res;
    })

    this.orderService.totalSalesAmount().subscribe(res=>{
      console.log(res[0]['TotalSellingPrice']);
      this.totalSellingPrice=res[0]['TotalSellingPrice'];
    })
    this.widgetData = widgetData;
    this.salesMixedChart = salesMixedChart;
    this.revenueRadialChart = revenueRadialChart;
    this.userBalanceData = userBalanceData;
    this.revenueData = revenueData;
  }
}
