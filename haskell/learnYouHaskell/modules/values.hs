import Data.List

let values = [-4.3, -2.4, -1.2, 0.4, 2.3, 5.9, 10.5, 29.1, 5.3, -2.4, -14.5, 2.9, 2.3]

main =  do
	print $ groupBy (\x y -> (x > 0) == (y > 0)) values
	print $ groupBy ((==) `on` (> 0)) values