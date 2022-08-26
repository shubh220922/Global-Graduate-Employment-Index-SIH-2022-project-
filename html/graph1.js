// const labels = [
//   'Web Development',
//   'Cloud',
//   'Machine Learning',
//   'Artificial Intelligence',
//   'Data Science',
//   'Android Development',
//   'Language Development',
//   'Quality Analyst'
// ];

// const data1 = {
//   labels: labels,
//   datasets: [{
//     label: 'Estimated Job Vacancies',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [33450, 22345, 44567, 44654, 78965, 67865, 9233,15632],
//   }]
// };

// const config = {
//   type: 'line',
//   data: data1,
//   options: {}
// };

// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

  const xlabels = [];
  const ytemps = [];
  // const ytemps2 = []; 
  charit();

async function charit() {
  await getDATA();
  // await getDATA2();
  const ctx = document.getElementById("chart").getContext("2d");

  const ylabels = [];
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels,
      datasets: [
        {
          label: "All employees thousands computer systems design and related services seasonally",
          data: ytemps,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          tension: 0.4,
          // borderColor: ["rgba(255, 99, 132, 1)"],
          // borderWidth: 1,
          pointBackgroundColor: function(context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            // return value < 0 ? 'red' :  // draw negative values in red
            //     index % 2 ? 'blue' :    // else, alternate values in blue and green
            //         'green';
            // feb 2023
            if(index >= 396)
             return 'purple'
             else
             return 'red'

        }
      }],
    
  
       
    
    // {
    //   label: "Women employees thousands computer systems design and related services not seasonally",
    //   data: ytemps2,
    //   backgroundColor: ["rgba(255, 99, 132, 0.2)"],
    //   tension: 0.6,
    //   // borderColor: ["rgba(255, 99, 132, 1)"],
    //   // borderWidth: 1,
    //   pointBackgroundColor: function(context) {
    //     var index = context.dataIndex;
    //     var value = context.dataset.data[index];
    //     // return value < 0 ? 'red' :  // draw negative values in red
    //     //     index % 2 ? 'blue' :    // else, alternate values in blue and green
    //     //         'green';
    //     // feb 2023
    //     if(index >= 211)
    //      return 'purple'
    //      else
    //      return 'red'

    // },
   

    options: {
          scales: {
            y: {
              beginAtZero: true,
              // title: {
              //    display: true,
              //    text: 'In thousands'
              // }
            },
          },
        },
  },

  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'In years'
       }
      },
        y: {
            // ticks: {
            //     // Include a dollar sign in the ticks
            //     callback: function(value, index, ticks) {
            //         return value + "000";
            //     }
            // },
            beginAtZero: true,
              title: {
                 display: true,
                 text: 'In thousands'
              }
        }
      }
    },
});
}

async function getDATA() {
  const response = await fetch("graph1_number_of_employees.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels.push(year);
    const temp = row_section.split(",")[1];
    ytemps.push(parseFloat(temp));
    // console.log(year, temp);
  });
}




