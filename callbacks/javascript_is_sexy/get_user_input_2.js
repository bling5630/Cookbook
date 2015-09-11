//Note that we have added an extra parameter for the callback object, called "callbackObj"​
​function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here​
​
    // The use of the Apply function below will set the this object to be callbackObj​
    callback.apply (callbackObj, [firstName, lastName]);
}