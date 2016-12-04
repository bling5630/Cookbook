-- module Main where

-- main :: IO ()
-- main = do
--   putStrLn "hello world"

import Data.Time (getCurrentTime)

printTime = do
  time <- getCurrentTime
  putStrLn (show time)
