function t(s,d){
 for(var p in d)
   s=s.replace(new RegExp('{'+p+'}','g'), d[p]);
 return s;
}

console.log(t("Hello {who}!", { who: "JavaScript" }));
// "Hello JavaScript!"

console.log(t("Hello {who}! It's {time} ms since epoch.", { who: "JavaScript", time: Date.now }));
// "Hello JavaScript! It's 1299680443046 ms since epoch."
