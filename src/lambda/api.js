exports.handler = async (event, context) => {
  const today = new Date()
  const todaysDate = today.getDate();

  // the return value
  let response;

  // november
  if (todaysDate === 30) {
    response = {
      message: "Hello from the BeanAPI",
    }
  }

  // december
  if (todaysDate === 1) {

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
    body: JSON.stringify(response)
  };
};
