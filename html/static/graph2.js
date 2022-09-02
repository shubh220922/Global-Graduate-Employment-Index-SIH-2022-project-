 

 
 
  const xlabels2_1 = [];


  const ytemps3_2 = [];

 

  charit();




async function charit() {
  await getDATA_avg_hourly_1();
  
  const ctx = document.getElementById("chart2").getContext("2d");

  const ylabels = [];
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels2_1,
      datasets: [
        {
          label: "-Average-hourly-earnings-of-production-and-nonsupervisory-employees-1982-84-computer-systems-design-services-not-seasonally",
          data: ytemps3_2,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          tension: 0.4,
          
          pointBackgroundColor: function(context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            
            if(index >= 396)
             return 'purple'
             else
             return 'red'

        }
      }],
    
  
       
    options: {
          scales: {
            y: {
              beginAtZero: true,
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







async function getDATA_avg_hourly_1() {
  const response = await fetch("/static/-Average-hourly-earnings-of-production-and-nonsupervisory-employees-1982-84-dollars-computer-systems-design-services-not-seasonally-.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels2_1.push(year);
    const temp = row_section.split(",")[1];
    ytemps3_2.push(parseFloat(temp)*79.9);
    // console.log(year, temp);
  });
}

