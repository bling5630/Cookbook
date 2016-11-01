capital :: String -> String
capital "" = "Empty string, whoops!"
capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x]

main = do
  print(capital "")
  print(capital "dadadas")
  print(capital "ADFDSF")
