sayHello :: IO String
sayHello = do
  name <- getLine
  putStrLn ("Hello " ++ name)
  return name

main = sayHello