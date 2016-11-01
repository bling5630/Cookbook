length' :: (Num b) => [a] -> b
length' [] = 0
length' (_:xs) = 1 + length' xs

main = do
  print(length [])
  print(length [1,2,3,4,5,6,7,8,9])
  print(head [1..1000])
  print(last [1..1000])
  print(length ("a....z"))
  print(length [1..1000])
  print(length ['a'..'z'])
  print(length "abrakadabra")
  print(last "abrakadabra")
