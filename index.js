// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Helper function to check if a number is even
  function isEven(number) {
    return number % 2 === 0;
  }
  
  // Helper function to check if a number is odd
  function isOdd(number) {
    return !isEven(number);
  }
  
  // Main function to demonstrate the use of helper functions
  function main() {
    // Generate a random number between 1 and 100
    const randomNumber = getRandomNumber(1, 100);
    
    // Check if the random number is even or odd
    if (isEven(randomNumber)) {
      console.log(randomNumber + ' is even.');
    } else {
      console.log(randomNumber + ' is odd.');
    }
  }
  
  // Call the main function to run the program
  main();
  