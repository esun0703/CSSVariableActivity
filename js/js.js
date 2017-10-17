// VARIABLES
// ========================================================
  const inputs = document.querySelectorAll('.controls input')
  console.log(inputs);

// FUNCTIONS
//==========================================================
  function handleUpdate(){
    const value = this.value;
    const name = this.name;
    
    // grabs element's data attribute of 'sizing', and sets to variable suffix or else nothing, so that it doesn't come up undefined.
    const suffix = this.dataset.sizing || '';
    console.log("value: " + value + " name: " + name + " suffix: " + suffix);
      
    // documentElement grabs the root element set in css.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      // console.log(this.value);
  }

  // PROCESS
  // ========================================================== 
    // grabs the const 'inputs', and for each of the items in the node list runs function. takes input as an argument and adds an event listener to each input on change and on mousemove.
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));