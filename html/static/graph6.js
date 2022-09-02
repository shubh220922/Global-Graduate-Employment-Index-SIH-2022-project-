 

 
 
  const xlabels6_1 = [];


  const ytemps6_1 = [];

  charit();

async function charit() {
  await plot6();
  
  const ctx = document.getElementById("chart6").getContext("2d");

  
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xlabels6_1,
      datasets: [
        {
          label: "All-employees-thousands-architectural-and-engineering-services-not-seasonally",
          data: ytemps6_1,
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


async function plot6() {
  const response = await fetch("/static/-All-employees-thousands-architectural-and-engineering-services-not-seasonally-.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels6_1.push(year);
    const temp = row_section.split(",")[1];
    ytemps6_1.push(parseFloat(temp));
    // console.log(year, temp);
  });
}

