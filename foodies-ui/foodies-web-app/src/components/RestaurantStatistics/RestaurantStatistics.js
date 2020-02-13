import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import RestaurantHeader from "../RestaurantHeader";
const secondOptions = {
  title: {
    text: "Reviews' Posts Growth"
  },

  subtitle: {
    text: "Provided to you by Foodies"
  },

  yAxis: {
    title: {
      text: "Number of Reviews"
    }
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle"
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2013
    }
  },

  series: [
    {
      name: "Reviews",
      data: [43, 52, 57, 69, 97, 119, 137, 154]
    }
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom"
          }
        }
      }
    ]
  }
};
const firstOptions = {
  chart: {
    type: "column"
  },
  title: {
    text: "Monthly Average Ratings"
  },
  subtitle: {
    text: "Provided to you by Foodies"
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    max: 5,
    title: {
      text: "Rates"
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [
    {
      name: "Dish",
      data: [4.9, 1.5, 1.4, 2.2, 4.0, 4.0, 3.6, 4.5, 2.4, 4.1, 4.8, 4.4]
    },
    {
      name: "Price",
      data: [3.9, 1.5, 2.4, 3.2, 3.0, 1.0, 4.6, 2.5, 1.4, 3.1, 3.8, 2.4]
    },
    {
      name: "Service",
      data: [1.9, 2.5, 3.4, 4.2, 5.0, 3.0, 2.6, 3.5, 4.4, 4.1, 1.8, 3.4]
    },
    {
      name: "Location",
      data: [2.9, 2.5, 3.4, 3.2, 4.0, 4.0, 1.6, 1.5, 2.4, 2.1, 4.8, 3.4]
    },
    {
      name: "Accessibility",
      data: [1.9, 1.5, 1.4, 1.2, 1.0, 2.0, 1.6, 1.5, 1.4, 1.1, 1.8, 1.4]
    }
  ]
};
class RestaurantStatistics extends Component {
  render() {
    return (
      <div>
        <RestaurantHeader withSections />
        <div
          style={{ margin: "2rem", marginRight: "8rem", marginLeft: "8rem" }}
        >
          <HighchartsReact highcharts={Highcharts} options={firstOptions} />
          <HighchartsReact highcharts={Highcharts} options={secondOptions} />
        </div>
      </div>
    );
  }
}

export default RestaurantStatistics;
