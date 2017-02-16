data Tree a = EmptyTree | Node a (Tree a) (Tree a) deriving (Show, Read, Eq) 

singleton :: a -> Tree a  
singleton x = Node x EmptyTree EmptyTree  
  
treeInsert :: (Ord a) => a -> Tree a -> Tree a  
treeInsert x EmptyTree = singleton x  
treeInsert x (Node a left right)   
    | x == a = Node x left right  
    | x < a  = Node a (treeInsert x left) right  
    | x > a  = Node a left (treeInsert x right)  

treeElem :: (Ord a) => a -> Tree a -> Bool  
treeElem x EmptyTree = False  
treeElem x (Node a left right)  
    | x == a = True  
    | x < a  = treeElem x left  
    | x > a  = treeElem x right  

nums = [8,6,4,1,7,3,5] 
numsTree = foldr treeInsert EmptyTree nums  

numsSecond = [21,121,21,21,34,56,7,8,9,32,35,656,878,9,3,2,6]
numsTreeSecond = foldr treeInsert EmptyTree numsSecond  

numsThird = [13, 3, 4, 12, 14, 10, 5, 1, 8, 2, 7, 9, 11, 6, 18]
numsTreeThird = foldr treeInsert EmptyTree numsThird  

main = do
	print $ numsTree
	print $ "break"
	print $ "break"
	print $ "break"
	print $ "break"
	print $ numsTreeSecond
	print $ "break"
	print $ "break"
	print $ "break"
	print $ "break"
	print $ numsTreeThird
	print $ 8 `treeElem` numsTree 
	print $ 100 `treeElem` numsTree  
	print $ 1 `treeElem` numsTree  
	print $ 10 `treeElem` numsTree  


