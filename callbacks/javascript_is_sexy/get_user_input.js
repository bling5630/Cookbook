getUserInput("Barack", "Obama", clientData.setUserName);​
console.log(clientData.fullName); // Not Set​
​​ // The fullName property was initialized on the window object​
console.log(window.fullName); // Barack Obama