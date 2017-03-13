-- 4 Problem 14
-- (*) Duplicate the elements of a list.

dupli [] = []
dupli (x:xs) = x:x:dupli xs

dupliSecond list = concat [[x,x] | x <- list]

main = do 
	print $ dupli [1,2,3,4,5]
	print $ dupliSecond [6,7,8,9]