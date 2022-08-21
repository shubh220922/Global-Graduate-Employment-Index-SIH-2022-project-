


  const labels = [
    'Web Development',
    'Cloud',
    'Machine Learning',
    'Artificial Intelligence',
    'Data Science',
    'Android Development',
    'Language Development',
    'Quality Analyst'
  ];

  const data1 = {
    labels: labels,
    datasets: [{
      label: 'Estimated Job Vacancies',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [33450, 22345, 44567, 44654, 78965, 67865, 9233,15632],
    }]
  };


  const config = {
    type: 'line',
    data: data1,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );