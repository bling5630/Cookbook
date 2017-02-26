plusThree = ((+) 3)
plusFour = (+ 4)

main = do
	print $ map plusThree [1,2,3]
	print $ map plusFour [4,5,6]
	print $ map ((+) 5) [7,8,9] 	
	print $ map (+ 6) [10,11,12] 