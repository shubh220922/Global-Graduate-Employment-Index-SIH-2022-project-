
  const xlabels8_1 = [];


  const ytemps8_1 = [];

  charit();

async function charit() {
  await plot8();
  
  const ctx = document.getElementById("chart8").getContext("2d");

  
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels8_1,
      datasets: [
        {
          label: "All-employees-thousands-engineering-and-drafting-services-not-seasonally",
          data: ytemps8_1,
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


async function plot8() {
  const response = await fetch("/static/-All-employees-thousands-engineering-and-drafting-services-not-seasonally-.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels8_1.push(year);
    const temp = row_section.split(",")[1];
    ytemps8_1.push(parseFloat(temp));
    // console.log(year, temp);
  });
}

