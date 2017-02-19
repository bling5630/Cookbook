import Prelude hiding (elem)

class Eq1 a where
   (===), (=/=) :: a -> a -> Bool
   x === y = not $ x =/= y
   x =/= y = not $ x === y 

elem :: Eq1 a => a -> [a] -> Bool
x `elem`  []            = False
x `elem` (y:ys)         = x===y || (x `elem` ys)

data TrafficLight = Red | Yellow | Green  

instance Eq1 TrafficLight where  
    Red === Red = True  
    Green === Green = True  
    Yellow === Yellow = True  
    _ === _ = False 


instance Show TrafficLight where  
    show Red = "Red light"  
    show Yellow = "Yellow light"  
    show Green = "Green light" 

main = do
	print $ Red === Red
	print $ Red === Yellow 
	print $ [Red, Yellow, Green] 
	print $ Red `elem` [Red, Yellow]