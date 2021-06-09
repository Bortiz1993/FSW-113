//spread Operator function
function chkLang(...values) {
    console.log(values);
   const filter = values.filter(language => {
        if (language === values[0]){
            return language;
            
        }
    
    })
    console.log(filter)
//check if condition is truthy.
    if (filter.length > 1){
        document.getElementById('TestResult').textContent = `Congratulations! You know ${filter[0]}. You can proceed with the rest of the application process.`
    }
    //check if condition is falsy.
    else {
        document.getElementById('TestResult').textContent = `Sorry, if you don't know ${filter[0]}, you cannot proceed with the rest of the application process.`
    }
    
  //  for(let i in values){
     //   console.log(values[i]);
   // }
}

//chkLang('HTML', 'CSS', 'Java', 'PHP', 'Python','Ruby');
