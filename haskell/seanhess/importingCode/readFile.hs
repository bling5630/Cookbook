import System.IO (readFile)

-- main = do
--   contents <- readFile "readme.md"
--   putStrLn contents

printConfig = do
  contents <- readFile "readme.md"
  putStrLn contents