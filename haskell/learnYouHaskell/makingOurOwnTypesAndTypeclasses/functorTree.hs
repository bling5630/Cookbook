import Prelude hiding (fmap, Functor)

data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq) 

class Functor f where  
    fmap :: (a -> b) -> f a -> f b

instance Functor Tree where  
	fmap f EmptyTree = EmptyTree  
	fmap f (Node x leftsub rightsub) = Node (f x) (fmap f leftsub) (fmap f rightsub)  

singleton :: a -> Tree a  
singleton x = Node x EmptyTree EmptyTree 

treeInsert :: (Ord a) => a -> Tree a -> Tree a  
treeInsert x EmptyTree = singleton x  
treeInsert x (Node a left right)   
    | x == a = Node x left right 
     | x < a  = Node a (treeInsert x left) right  
    | x > a  = Node a left (treeInsert x right)

main = do
	print $ fmap (*2) EmptyTree 
	print $ fmap (*4) (foldr treeInsert EmptyTree [5,7,3,2,1,7]) 