expressRouter.get("/api/ledgers/:id", function(req, res) {
  UserService.getLedgerById(req.params.id, function(err, ledger) {
    if (err) {
      res.status(404).json({
        "message": "Not Found"
      });
    } else {
      res.status(200).json(ledger);
    }
  });
});

expressRouter.patch("/api/users/:id", function(req, res) {
  UserService.getUserById(req.params.id, function(err, user) {
    if (err) {
      res.status(404).json({
        "message": "Not Found"
      });
    } else {
      UserService.updateUser(id, req.body, function(err, user) {
        if (err) {
          res.status(400).json({
            "message": "Invalid data provided"
          });
        } else {
          res.status(200).json(user);
        }
      });
    }
  });
});