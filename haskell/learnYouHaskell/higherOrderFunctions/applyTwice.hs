applyTwice :: (a -> a) -> a -> a
applyTwice f x = f (f x)
multThree x y z = x * y * z

main = do
  print(applyTwice (+2) 3)
  print(applyTwice (3: ) [5])
  print(applyTwice (++ " hahaha ") "hehehe")
  print(applyTwice (multThree 2 2) 3)
