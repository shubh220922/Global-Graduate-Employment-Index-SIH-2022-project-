const xlabels_b = [];
  const ytemps_b = [];
  
  // charit();

async function charit() {
  await getDATA_bar();
  // await getDATA2();
  const ctx = document.getElementById("chart0").getContext("2d");

  
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: xlabels_b,
      datasets: [
        {
          label: "Employability Indices for different fields",
          data: ytemps_b,
          backgroundColor: ["rgb(255, 99, 132)"],
          
          
     
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

async function getDATA_bar() {
  const response = await fetch("/static/-Women-employees-thousands-computer-systems-design-and-related-services-not-seasonally-.csv");
  const data = await response.text();
  const rows = data.split("\n");
  const sliced_rows = rows.slice(1); // this will remove the topmost head row
  sliced_rows.forEach((row_section) => {
    // console.log(row_section.split(','));
    const year = row_section.split(",")[0];
    xlabels_b.push(year);
    const temp = row_section.split(",")[1];
    ytemps_b.push(parseFloat(temp));
    // console.log(year, temp);
  });
}
