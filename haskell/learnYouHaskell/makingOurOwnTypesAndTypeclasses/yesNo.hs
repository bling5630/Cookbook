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
{-
main = do
	print $ Red === Red
	print $ Red === Yellow 
	print $ Red `elem` [Red, Yellow]
	print $ [Red, Yellow, Green] -}

data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq)  

class YesNo a where  
    yesno :: a -> Bool

instance YesNo Int where  
    yesno 0 = False  
    yesno _ = True  

instance YesNo [a] where  
    yesno [] = False  
    yesno _ = True 

instance YesNo Bool where  
    yesno = id   

instance YesNo (Maybe a) where  
    yesno (Just _) = True  
    yesno Nothing = False  

instance YesNo (Tree a) where  
    yesno EmptyTree = False  
    yesno _ = True 

instance YesNo TrafficLight where  
    yesno Red = False  
    yesno _ = True  

yesnoIf :: (YesNo y) => y -> a -> a -> a  
yesnoIf yesnoVal yesResult noResult = if yesno yesnoVal then yesResult else noResult 

main = do
	print $ yesno $ length [] 
	print $ yesno "haha" 
	print $ yesno "" 
	print $ yesno $ Just 0 
	print $ yesno True  
	print $ yesno EmptyTree 
	print $ yesno [] 
	print $ yesno [0,0,0] 
	print $ Red === Red
	print $ Red === Yellow 
	print $ Red `elem` [Red, Yellow]
	print $ [Red, Yellow, Green]
	print $ yesnoIf [] "YEAH!" "NO!"  
	print $ yesnoIf [2,3,4] "YEAH!" "NO!"
	print $ yesnoIf True "YEAH!" "NO!"
	print $ yesnoIf (Just 500) "YEAH!" "NO!"
	print $ yesnoIf Nothing "YEAH!" "NO!"
