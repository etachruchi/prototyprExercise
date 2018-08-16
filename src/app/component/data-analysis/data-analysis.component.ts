import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  OnInit
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
declare let Highcharts: any;
import { opts } from "../../model/series";
@Component({
  selector: "app-data-analysis",
  templateUrl: "./data-analysis.component.html",
  styleUrls: ["./data-analysis.component.css"]
})
export class DataAnalysisComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  @ViewChild("chart")
  public chartEl: ElementRef;

  chart: any;

  public ngAfterViewInit() {
    let opts: opts = {
      title: {
        text: "Birth in Taiwan"
      },

      yAxis: {
        title: {
          text: "People"
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
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },
      series: [
        {
          name: "Male",
          data: [106898, 103937, 99492, 87213, 101942, 118842, 103120]
        },
        {
          name: "Female",
          data: [97512, 94796, 91818, 79673, 94684, 110633, 95993]
        }
      ],
      chart:{
        type: "line",
        renderTo: this.chartEl.nativeElement
      }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: "line",
        renderTo: this.chartEl.nativeElement
      };

      this.chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this.chart.destroy();
  }
}
