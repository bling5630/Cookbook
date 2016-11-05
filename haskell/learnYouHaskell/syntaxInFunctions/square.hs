program = let
  square x = x * x
  in (square 5, square 3, square 2)

main = print(program)
-- [(25,9,4)]  
