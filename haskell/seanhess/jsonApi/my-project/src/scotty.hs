{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty
import Data.Monoid ((<>))

-- routes :: ScottyM ()
-- routes = do
--   get "/hello" $ do
--     text "hello world!"

routes :: ScottyM ()
routes = do
  get "/hello" hello
  get "/hello/:name" $ do
    name <- param "name"
    text ("hello " <> name <> "!")
  get "/hello/:name/:job" $ do
    name <- param "name"
    job <- param "job"
    text ("hello " <> name <> " your job is " <> job <> "!")

hello :: ActionM ()
hello = do
  text "hello brazil!"

main = do
  putStrLn "Starting Server..."
  scotty 3000 routes