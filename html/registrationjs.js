degreetype = [];

function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    // formJSON.skillset_group = data.getAll('Degree-type');
    degreetype.push(data.getAll('Degree-type'));
    formJSON.degrees_selected = degreetype;
    

    
    const results = document.querySelector('.results pre');
    // results.innerText = JSON.stringify(formJSON, null, 2);
    console.log(JSON.stringify(formJSON, null, 2));


    localStorage.setItem('stored_values',JSON.stringify(formJSON));
    

    
  }
  
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', handleFormSubmit);