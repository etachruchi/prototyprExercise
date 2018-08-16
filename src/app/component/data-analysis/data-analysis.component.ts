import { Component, ElementRef, AfterViewInit, OnDestroy, ViewChild, OnInit} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ChartModule } from "angular2-highcharts";

import "highcharts/adapters/standalone-framework.src";
@Component({
  selector: 'app-data-analysis',
  templateUrl: './data-analysis.component.html',
  styleUrls: ['./data-analysis.component.css']
})
export class DataAnalysisComponent implements OnInit, OnDestroy  {
  // const Highcharts = require("highcharts/highcharts.src");
  constructor() { }

  ngOnInit() {
  }
  @ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

  public ngAfterViewInit() {
    let opts: any = {
      title: {
        text: 'Birth in Taiwan'
      },
      
      yAxis: {
        title: {
          text: 'People'
        }
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2007
        }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      },
      series: [{
        name: 'Male',
        data: [
         106898, 103937, 99492, 87213, 101942, 118842, 103120
         
        ]
      }, {
          name: 'Female',
          data: [97512, 94796, 91818, 79673, 94684,110633,95993]
        },],
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'line',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
