module Main where

greet name = "Hello " ++ name ++ "!"

main :: IO ()
main = do
  putStrLn "hello world"
  putStrLn (greet "bobby")
  putStrLn (greet "everyone")
