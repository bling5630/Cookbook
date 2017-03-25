type Birds = Int  
type Pole = (Birds,Birds)

landLeft :: Birds -> Pole -> Maybe Pole  
landLeft n (left,right)  
    | abs ((left + n) - right) < 4 = Just (left + n, right)  
    | otherwise                    = Nothing  
  
landRight :: Birds -> Pole -> Maybe Pole  
landRight n (left,right)  
    | abs (left - (right + n)) < 4 = Just (left, right + n)  
    | otherwise                    = Nothing  

x -: f = f x 

banana :: Pole -> Maybe Pole  
banana _ = Nothing  

(>>>) :: (Monad m) => m a -> m b -> m b  
m >>> n = m >>= \_ -> n  

main = do
	print $ landLeft 2 (0,0) 
	print $ landLeft 10 (0,3) 
	print $ landRight 1 (0,0) >>= landLeft 2
	print $ Nothing >>= landLeft 2  
	print $ return (0,0) >>= landRight 2 >>= landLeft 2 >>= landRight 2 
	print $ return (0,0) >>= landLeft 1 >>= landRight 4 >>= landLeft (-1) >>= landRight (-2) 
	print $ return (0,0) >>= landLeft 1 >>= banana >>= landRight 1 
	print $ Nothing >>> Just 3
	print $ Just 3 >>> Just 4 

