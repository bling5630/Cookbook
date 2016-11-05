program = let
  zoot x y z = x * y * z
  in zoot 3 9 2

programTwo = let
  boot x y z = x + y + z
  in boot 3 9 2
main = do
  print(program)
  -- 54
  print(programTwo)
  -- 14
