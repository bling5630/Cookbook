head' :: [a] -> a
head' [] = error "Can't call head on an empty list, dummy!"
head' (x:_) = x

main = do
  print(head' [1,2,3])
  print(head' [2,3,2])
  print(head' "Hello")
  print(head' "Yo")
  print(head' "cabal")
  print(head' "")
