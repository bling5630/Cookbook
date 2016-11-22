sum' :: (Num a) => [a] -> a     
sum' xs = foldl (+) 0 xs  

-- fn x = ceiling (negate (tan (cos (max 50 x)))) 
fn = ceiling . negate . tan . cos . max 50  

main =  do
	print $ sum [1,2,3]
	print $ fn 5
	-- print $
	-- print $
	-- print $
	-- print $