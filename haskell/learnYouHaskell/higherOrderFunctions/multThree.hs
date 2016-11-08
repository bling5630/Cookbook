multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z

-- let multTwoWithNine = multThree 9

-- let multWithEighteen = multTwoWithNine 2

main = do
  print(multThree 1 2 3)
  print(((multThree 3) 5) 9)
  --print(multTwoWithNine 3)
  --print(multWithEighteen 3)
