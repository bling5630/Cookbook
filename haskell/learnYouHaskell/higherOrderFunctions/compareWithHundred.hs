compareWithHundred :: (Num a, Ord a) => a -> Ordering
compareWithHundred x = compare 100 x

main = do
  print(compareWithHundred 1012)
  print(compareWithHundred 10)
  print(compareWithHundred 100) 
