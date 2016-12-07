routes :: ScottyM ()
routes = do
  get "/"      (text "homepage!")
  get "/hello" (text "hello")