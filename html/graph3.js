



const x_labels

async function charit() {
    await getDATA_avg_weekly_1();
    await getDATA_avg_hourly_1();
    // await getDATA_avg_weekly_3();
  
    const ctx = document.getElementById("chart2").getContext("2d");
  
    
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: xlabels2_1,
        datasets: [
          {
            label: "-Average-weekly-hours-of-production-and-nonsupervisory-employees-computer-systems-design-and-related-services-not ",
            data: ytemps2_1,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            // borderColor: ["rgba(255, 99, 132, 1)"],
            // borderWidth: 1,
          }
        ],
      },
  
      options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          
          plugins: {
            zoom: {
              zoom: {
                wheel: {
                  enabled: true,
                },
                pinch: {
                  enabled: true
                },
                mode: 'xy',
              }
            }
          }
        }
    });
  }
  















async function getDATA_avg_hourly_1() {
    const response = await fetch("-Average-hourly-earnings-of-production-and-nonsupervisory-employees-1982-84-dollars-computer-systems-design-services-not-seasonally-.csv");
    const data = await response.text();
    const rows = data.split("\n");
    const sliced_rows = rows.slice(1); // this will remove the topmost head row
    sliced_rows.forEach((row_section) => {
      // console.log(row_section.split(','));
      const year = row_section.split(",")[0];
      // xlabels.push(year);
      const temp = row_section.split(",")[1];
      ytemps3_2.push(parseFloat(temp)*79.9);
      // console.log(year, temp);
    });
  }





