// Reference Variable to canvas
const canvasRef = document.getElementById("chart");

//Create the Chart Instance
let myChart = new Chart(canvasRef, {
  //Type
  type: "bar",
  // Data Configuration
  data: {
    //Labels for Data Points
    labels: ["Kit-Kat", "Hershey's", "Whoppers"],
    //datasets (you only need one)
    datasets: [
      {
        label: "Candy Sold",
        data: [5, 12, 1],
        //backgroundColor: ["#000000", "#666666", "#2534ef"],
        backgroundColor: ["#53ed2440"],
      },
    ],
  },
});

//Create an Object for Storing Chart Info
const allCharts = {
  bar: {
    name: "Bar",
    config: {
      type: "bar",
      // Data Configuration
      data: {
        //Labels for Data Points
        labels: ["Kit-Kat", "Hershey's", "Whoppers"],
        //datasets (you only need one)
        datasets: [
          {
            label: "Candy Sold",
            data: [5, 12, 1],
            //backgroundColor: ["#000000", "#666666", "#2534ef"],
            backgroundColor: ["#53ed2440"],
          },
        ],
      },

      options: {
        scales: {
            y: {
                min: 0,
                max: 20,
            },
        },
      },
    },
  },
  pie: {
      name: "Pie",
      config: {
        type: "pie",
        // Data Configuration
        data: {
          //Labels for Data Points
          labels: ["Kit-Kat", "Hershey's", "Whoppers"],
          //datasets (you only need one)
          datasets: [
            {
              label: "Candy Sold",
              data: [5, 12, 1],
            },
          ],
        },
      },
    },
    line: {
        name: "Line",
        config: {
          type: "line",
          // Data Configuration
          data: {
            //Labels for Data Points
            labels: ["10/8", "10/9", "10/10"],
            //datasets (you only need one)
            datasets: [
              {
                label: "temp",
                data: [79, 81, 89],
                backgroundColor: ["#53ed2440"],
                borderColor: ["#53ed24"]
              },
            ],
          },
          options:{
            scales: {
                y: {
                    min: 60,
                    max: 100,
                },
            },
          }
        },
      },
};

//console.log(Object.values(allCharts));

Object.values(allCharts).forEach(function (chart) {
  //Create a Button Element
  const newButton = document.createElement("button");
  newButton.innerHTML = `Add ${chart.name} Chart`;
  newButton.onclick = function () {
    console.log(chart.name);
    myChart.destroy();
    myChart = new Chart(canvasRef, chart.config);
  };
  //Add the button to the actual DOM
  document.querySelector("#chartButtons").appendChild(newButton);
});

function removeDatapoint() {
    myChart.data.labels.pop();
    myChart.update();
}

function addDatapoint() {
    const numValue = parseFloat(document.getElementById("num").value);
    const labelValue = document.getElementById("label").value;

    myChart.data.labels.push(labelValue);
    myChart.data.datasets[0].data.push(numValue);

    myChart.update();
}
