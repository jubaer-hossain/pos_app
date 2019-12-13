// Dashboard-2 card data
export interface Widget {
    icon: string;
    value: string;
    text: string;
    color: string;
    progressValue: number;
}


// Selling Products Table data

export interface Sellingproduct {
    _id: number;
    product_name: string;
    purchase_price: number;
    selling_price: number;
    stocks: number;
}



// Chart data
export interface ChartType {
    chart?: any;
    plotOptions?: any;
    colors?: any;
    series?: any;
    stroke?: any;
    fill?: any;
    labels?: any;
    markers?: any;
    legend?: any;
    xaxis?: any;
    yaxis?: any;
    tooltip?: any;
    grid?: any;
    toolbar?: any;
    type?: any;
    option?: any;
    height?: any;
    piechartcolor?: any;
    dataLabels?: any;
    sparkline?: any;
}
