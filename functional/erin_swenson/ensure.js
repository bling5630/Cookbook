function ensure(notOkCode, notOkMessage, response, okFx) {
  return function(err) {
    if (err) {
      response.status(notOkCode).json({
        "message": notOkMessage
      });
    } else {
      okFx.apply(okFx, Array.prototype.slice.call(arguments, 1));
    }
  };
}

var ensureFound = _.partial(ensure, 404, "Not Found"),
  ensureValid = _.partial(ensure, 400, "Bad Request");

expressRouter.get("/api/ledgers/:id", function(req, res) {
  UserService.getLedgerById(req.params.id, ensureFound(res, function(ledger) {
    res.status(200).json(ledger);
  }));
});

expressRouter.patch("/api/users/:id", function(req, res) {
  UserService.getUserById(req.params.id, ensureFound(res, function(user) {
    UserService.updateUser(user, req.body, ensureValid(res, function(updated) {
      res.status(200).json(updated);
    }));
  }));
});