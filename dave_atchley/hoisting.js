(function(){
   console.log(inc(4));  // 5
   console.log("a =",a); // a = undefined?

   var a = 1;
   function inc(n){ return ++n; }
})();
