var Twig = require("twig"),
    express = require('express'),
    app = express();

// This section is optional and used to configure twig.
app.set("twig options", {
    strict_variables: false
});

app.get('/', function(req, res){
  res.render('index.twig', {
    message : "Hello World",
    message_1 : "6.1 Az Ügyfél a IseeQ által kiszámlázott összegeket a számla kiállításának napjától számított 15 napon belül köteles megfizetni. "
  });
});

app.listen(9999);
