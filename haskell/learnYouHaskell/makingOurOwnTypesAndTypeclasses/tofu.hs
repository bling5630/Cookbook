class Functor f where   
    fmap :: (a -> b) -> f a -> f b  

class Tofu t where  
    tofu :: j a -> t a j 

instance Tofu Frank where  
    tofu x = Frank x 

data Frank a b  = Frank {frankField :: b a} deriving (Show)  

data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq) 

data Barry t k p = Barry { yabba :: p, dabba :: t k }  

{-instance Functor (Barry a b) where  
    fmap f (Barry {yabba = x, dabba = y}) = Barry {yabba = f x, dabba = y}  
-}
main = do
	print $ Frank {frankField = Just "HAHA"} 
	print $ Frank {frankField = "YES"} 
	print $ Frank {frankField = Node 'a' EmptyTree EmptyTree} 
