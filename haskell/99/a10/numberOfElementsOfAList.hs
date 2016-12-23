-- (*) Find the number of elements of a list.
-- Example in Haskell:
-- Prelude> myLength [123, 456, 789]
-- 3
-- Prelude> myLength "Hello, world!"
-- 13

myLength :: [a] -> Int
myLength [] =  0
myLength (_:xs) = 1 + myLength xs

myLengthSumMap :: [a] -> Int
myLengthSumMap = sum . map (\_->1)

main = do
	print $ myLength [1,2,3,5656,7676,4343]
	print $ myLength "sdfdsf dsadsadf"
	print $ myLength [2]
	print $ myLengthSumMap [286382,323,323,232,43535,23121,212]
	print $ myLengthSumMap "dsnaoasnd dsandpsan dasndpasndnaps"