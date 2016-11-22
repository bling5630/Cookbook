-- function composition
-- (.) :: (b -> c) -> (a -> b) -> a -> c  
-- f . g = \x -> f (g x)

main =  do
	print $ map (\x -> negate (abs x)) [5,-3,-6,7,-3,2,-19,24]  
	print $ map (negate . abs) [5,-3,-6,7,-3,2,-19,24] 
	print $ map (\xs -> negate (sum (tail xs))) [[1..5],[3..6],[1..7]]  
	print $ map (negate . sum . tail) [[1..5],[3..6],[1..7]] 
	print $ sum (replicate 5 (max 6.7 8.9))
	print $ sum . replicate 5 . max 6.7 $ 8.9
	print $ replicate 3 (product (map (*3) (zipWith max [1,2,3,4,5] [4,5,6,7,8])))
	print $ replicate 3 . product . map (*3) . zipWith max [1,2,3,4,5] $ [4,5,6,7,8]