function greetUser(customerName, sex)  {
   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}
​
​// Pass the greetUser function as a callback to getUserInput​
​getUserInput("Bill", "Gates", "Man", greetUser);
​
​// And this is the output​
Hello, Mr. Bill Gates