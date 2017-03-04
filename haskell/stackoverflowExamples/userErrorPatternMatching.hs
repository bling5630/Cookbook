-- import Control.Concurrent (forkIO)
-- import System.Environment (getArgs)

-- main= do
--     [a,b]<- getArgs
--     putStrLn $ "command line arguments: " ++ show [a,b]

import Control.Concurrent (forkIO)
import System.Environment (getArgs)

main = do
    args <- getArgs
    case args of
        [a, b] -> putStrLn $ "command line arguments: " ++ show [a, b]
        _      -> putStrLn "Invalid number of arguments"