 

 
 
  const xlabels7_1 = [];


  const ytemps7_1 = [];

  charit();

async function charit() {
  await plot7();
  
  const ctx = document.getElementById("chart7").getContext("2d");

  
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels7_1,
      datasets: [
        {
          label: "Average-weekly-hours-of-production-and-nonsupervisory-employees-engineering-and-drafting-services-seasonally",
          data: ytemps7_1,
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


async function plot7() {
  const response = await fetch("/static/-Average-weekly-hours-of-production-and-nonsupervisory-employees-engineering-and-drafting-services-seasonally-.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels7_1.push(year);
    const temp = row_section.split(",")[1];
    ytemps7_1.push(parseFloat(temp));
    // console.log(year, temp);
  });
}

