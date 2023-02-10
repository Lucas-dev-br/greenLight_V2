// Dashboard 1 Morris-chart

Morris.Area({
  element: "morris-area-chart",
  data: [
    {
      period: "2019",
      Custo: 50,
      Volts: 80,
      Electrical: 20,
    },
    {
      period: "2020",
      Custo: 130,
      Volts: 100,
      Electrical: 80,
    },
    {
      period: "2021",
      Custo: 80,
      Volts: 60,
      Electrical: 70,
    },
    {
      period: "2022",
      Custo: 70,
      Volts: 200,
      Electrical: 140,
    },
    {
      period: "2023",
      Custo: 180,
      Volts: 150,
      Electrical: 140,
    },
  ],
  xkey: "period",
  ykeys: ["Custo", "Gasto", "Volts"],
  labels: ["Custo", "Gasto", "Volts"],
  pointSize: 3,
  fillOpacity: 0,
  pointStrokeColors: ["#006DF0", "#65b12d"],
  behaveLikeLine: true,
  gridLineColor: "#e0e0e0",
  lineWidth: 1,
  hideHover: "auto",
  lineColors: ["#006DF0", "#65b12d"],
  resize: true,
});
