{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty

main = do
    putStrLn "Starting Server..."
    scotty 3000 $ do
        get "/hello" $ do
            text "hello world!"
        get "/mello" $ do
            text "hello carmelo!"        
        get "/" $ do
            text "not your turn!"