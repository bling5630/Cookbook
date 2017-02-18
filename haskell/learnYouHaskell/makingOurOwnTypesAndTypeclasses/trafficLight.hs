class Eq1 a where
   (===), (=/=) :: a -> a -> Bool
   x === y = not $ x =/= y
   x =/= y = not $ x === y  

myelem :: Int -> [Int] -> Bool
myelem x [] = False
myelem x (y:ys)
 | x == y = y : x myelem ys 

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
	print $ Red `myelem` [Red, Yellow, Green]  
