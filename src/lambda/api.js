exports.handler = async (event, context) => {
  const today = new Date((new Date).toLocaleString("en-US"));
  const todaysDate = today.getDate();
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(todaysDate)
  };



  // the return value
  let response = {
    message: null,
  }

  // november
  if (todaysDate === 30) {
    response.message = "Hello from the Bean API"
  }

  // december
  if (todaysDate === 1) {
    response.message = "it is the first day oF the high eneRgy advent calendar. encOded in this message is the name of our Gayest friend. to confirm you have cracked the code, send a coded message to high energy"
  }

  if (todaysDate === 2) {
    
  }
  
  if (todaysDate === 3) {
    
  }

  if (todaysDate === 4) {
    
  }

  if (todaysDate === 5) {
    
  }

  if (todaysDate === 6) {
    
  }

  if (todaysDate === 7) {
    
  }

  if (todaysDate === 8) {
    
  }

  if (todaysDate === 9) {
    
  }

  if (todaysDate === 10) {
    
  }
  
  if (todaysDate === 11) {
    
  }
  
  if (todaysDate === 12) {
    
  }
  
  if (todaysDate === 13) {
    
  }
  
  if (todaysDate === 14) {
    
  }
  
  if (todaysDate === 15) {
    
  }
  
  if (todaysDate === 16) {
    
  }

  if (todaysDate === 17) {
    
  }

  if (todaysDate === 18) {
    
  }

  if (todaysDate === 19) {
    
  }
  
  if (todaysDate === 20) {
    
  }
  
  if (todaysDate === 21) {
    
  }
  
  if (todaysDate === 22) {
    
  }
  
  if (todaysDate === 23) {
    
  }
  
  if (todaysDate === 24) {
    
  }
  
  if (todaysDate === 25) {
    
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(response)
  };
};
