 

 
 
  const xlabels3_11 = [];


  const ytemps3_11 = [];

  charit();

async function charit() {
  await getDATA_weekly_hourly_1();
  
  const ctx = document.getElementById("chart3").getContext("2d");

  
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels3_11,
      datasets: [
        {
          label: "-Average-weekly-hours-of-production-and-nonsupervisory-employees-custom-computer-programming-services-seasonally-",
          data: ytemps3_11,
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
        y: {
           
            beginAtZero: true,    
        }
      }
    },
    
  });
}


async function getDATA_weekly_hourly_1() {
  const response = await fetch("/static/-Average-weekly-hours-of-production-and-nonsupervisory-employees-custom-computer-programming-services-seasonally-(1).csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels3_11.push(year);
    const temp = row_section.split(",")[1];
    ytemps3_11.push(parseFloat(temp));
    // console.log(year, temp);
  });
}

