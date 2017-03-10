solveRPN :: (Num a, Read a) => String -> a  
solveRPN = head . foldl foldingFunction [] . words  
    where   foldingFunction (x:y:ys) "*" = (x * y):ys  
            foldingFunction (x:y:ys) "+" = (x + y):ys  
            foldingFunction (x:y:ys) "-" = (y - x):ys  
            foldingFunction xs numberString = read numberString:xs 

main = do 
	print $ solveRPN "10 4 3 + 2 * -"  
	print $ solveRPN "2 3 +"
	print $ solveRPN "90 34 12 33 55 66 + * - +"  
	print $ solveRPN "90 34 12 33 55 66 + * - + -"
	print $ solveRPN "90 34 12 33 55 66 + * - + -"  
	print $ solveRPN "90 3 -"   
	