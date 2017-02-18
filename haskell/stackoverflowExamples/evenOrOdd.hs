whatNumber n = length evenFactors == length oddFactors
  where evenFactors = [x | x <- [2, 4..(n-1)], n `mod` x == 0]
        oddFactors  = [x | x <- [3, 5..(n-1)], n `mod` x == 0]

main = do
	print $ whatNumber 123
	print $ whatNumber 122