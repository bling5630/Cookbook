divideByTen :: (Floating a) => a -> a
divideByTen = (/10)
multiplyByTen = (*10)

main = do
  print(divideByTen 10000)
  print(multiplyByTen 53421)
