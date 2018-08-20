export interface opts {
  title: {
    text: string;
  };

  yAxis: {
    title: {
      text: string;
    };
  };
  plotOptions: {
    series: {
      label: {
        connectorAllowed: boolean;
      };
      pointStart: number;
    };
  };
  legend: {
    layout: string;
    align: string;
    verticalAlign: string;
  };
  series: Array<
    {
      name: string;
      data: Array<number>;
    }>;
  chart: {
      type:string;
      renderTo:object;
  };
}
