import { Component, OnInit } from "@angular/core";
import { Chart } from "node_modules/chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  number = 0;
  internNum = 32;
  audienceNum = 632;
  cvNum = 45;
  interviewNum = 12;
  value = 90;

  styleElement: HTMLStyleElement;
  colors: Array<string> = ["#f47e47"];

  changeColors() {
    const head = document.getElementsByTagName("head")[0];
    const css = `
  .style1 .mat-progress-bar-fill::after {
    background-color: ${this.colors[0]} !important;
  }
  `;
    this.styleElement.innerHTML = "";
    this.styleElement.type = "text/css";
    this.styleElement.appendChild(document.createTextNode(css));
    head.appendChild(this.styleElement);
  }

  constructor() {}
  ngOnInit() {
    this.styleElement = document.createElement("style");
    this.changeColors();

    var myChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["UoM", "KDU", "Sabara", "SLIIT", "IIT"],
        datasets: [
          {
            label: "Current University Distribution",
            data: [5, 9, 6, 1, 2],
            backgroundColor: [
              "rgba(205,73,12,0.7)",
              "rgba(205,73,12,0.7)",
              "rgba(205,73,12,0.7)",
              "rgba(205,73,12,0.7)",
              "rgba(205,73,12,0.7)",
            ],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawTicks: false,
                drawOnChartArea: false,
                lineWidth: 2,
                color: "rgba(0,11,21,0.3)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: true,
                padding: 4,
              },
              gridLines: {
                display: true,
                drawBorder: true,
                drawTicks: false,
                drawOnChartArea: false,
                lineWidth: 2,
                color: "rgba(0,11,21,0.3)",
              },
            },
          ],
        },
      },
    });
    var lineChart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Nov",
        ],
        datasets: [
          {
            data: [31, 30, 28, 25, 22, 20, 18, 19, 20],
            backgroundColor: "rgba(1,0,0,0.7)",
            borderColor: "rgba(1,0,0,0.7)",
            fill: false,
            pointRadius: 7,
            pointHoverRadius: 3,
          },
          {
            data: [13, 15, 18, 25, 28, 30, 29, 27, 25],
            backgroundColor: "rgb(194,194,194)",
            borderColor: "rgb(194,194,194)",
            fill: false,
            pointRadius: 7,
            pointHoverRadius: 3,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        label: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    var scatterChart = new Chart("scatterChart", {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Nov",
        ],
        datasets: [
          {
            data: [31, 28, 14, 20, 22, 20, 18, 19, 20],
            backgroundColor: "rgba(89,89,89,1)",
            borderColor: "rgba(89,89,89,0.8)",
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
          },
          {
            data: [13, 15, 18, 25, 28, 30, 29, 27, 25],
            backgroundColor: "rgba(197,197,197,1)",
            borderColor: "rgba(197,197,197,0.8)",
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
          },
          {
            data: [15, 18, 25, 28, 30, 29, 27, 25, 22],
            backgroundColor: "rgba(40,40,40,1)",
            borderColor: "rgba(40,40,40,0.8)",
            fill: false,
            pointRadius: 3,
            pointHoverRadius: 5,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        label: {
          display: false,
        },

        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
    var myChart = new Chart("horizontalBarChart", {
      type: "horizontalBar",
      data: {
        labels: ["Round 1", "Round 2", "Round 3"],
        datasets: [
          {
            label: "SE",
            data: [7, 9, 6],
            backgroundColor: [
              "rgba(242,100,34,0.6)",
              "rgba(242,100,34,0.6)",
              "rgba(242,100,34,0.6)",
            ],
          },
          {
            label: "QA",
            data: [5, 4, 2],
            backgroundColor: [
              "rgba(248,178,145,0.5)",
              "rgba(248,178,145,0.5)",
              "rgba(248,178,145,0.5)",
            ],
          },
          {
            label: "BA",
            data: [3, 2, 6],
            backgroundColor: [
              "rgba(189,189,189,0.5)",
              "rgba(189,189,189,0.5)",
              "rgba(189,189,189,0.5)",
            ],
          },
        ],
      },
      options: {
        elements: {
          rectangle: {
            borderWidth: 2,
          },
        },
        responsive: true,
        legend: {
          position: "bottom",
        },
        title: {
          display: false,
          text: "Horizontal Bar Chart",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                padding: 4,
              },

              gridLines: {
                display: true,
                drawBorder: true,
                drawTicks: false,
                drawOnChartArea: false,
                lineWidth: 2,
                color: "rgba(0,11,21,0.3)",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: false,

                drawTicks: false,
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
    });
  }
}
