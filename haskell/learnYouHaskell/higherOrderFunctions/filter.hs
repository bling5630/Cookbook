($$) :: (a -> b) -> a -> b
($$) f x = f x

myFilter :: (a -> Bool) -> [a] -> [a]  
myFilter _ [] = []  
myFilter predicate (head:tail)   
    | predicate head       = head : myFilter predicate tail  
    | otherwise = myFilter predicate tail 

main = do
	print $ myFilter (>3) [1,5,3,2,1,6,4,3,2,1]  
	print $	myFilter (==3) [1,2,3,4,5] 
	print $	myFilter even [1..10]  
	print $	let notNull x = not (null x) in myFilter notNull [[1,2,3],[],[3,4,5],[2,2],[],[],[]]  
	print $	myFilter (`elem` ['a'..'z']) "u LaUgH aT mE BeCaUsE I aM diFfeRent" 
	print $	myFilter (`elem` ['A'..'Z']) "i lauGh At You BecAuse u r aLL the Same" 