main = print (rInt "12",rBool "True")

rInt :: String -> Int
rInt = read

rBool :: String -> Bool
rBool = read