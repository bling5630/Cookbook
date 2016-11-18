addTwoToAllElements :: [Int] -> [Int]
addTwoToAllElements [] = []
addTwoToAllElements (head:tail) = (head + 2) : addTwoToAllElements tail

addThreeToAllElements :: [Int] -> [Int]
addThreeToAllElements [] = []
addThreeToAllElements (head:tail) = (head + 3) : addThreeToAllElements tail

main = do 
	print $ addTwoToAllElements [1,2,3]
	print $ addThreeToAllElements [1,2,3]