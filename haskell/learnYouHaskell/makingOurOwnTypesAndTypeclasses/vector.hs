data Vector a = Vector a a a deriving (Show)  
  
vplus :: (Num t) => Vector t -> Vector t -> Vector t  
(Vector i j k) `vplus` (Vector l m n) = Vector (i+l) (j+m) (k+n)  
  
vectMult :: (Num t) => Vector t -> t -> Vector t  
(Vector i j k) `vectMult` m = Vector (i*m) (j*m) (k*m)  
  
scalarMult :: (Num t) => Vector t -> Vector t -> t  
(Vector i j k) `scalarMult` (Vector l m n) = i*l + j*m + k*n  

main = do
	print $ Vector 3 5 8 `vplus` Vector 9 2 8 
	print $ Vector 3 5 8 `vplus` Vector 9 2 8 `vplus` Vector 0 2 3  
	print $ Vector 3 9 7 `vectMult` 10
	print $ Vector 4 9 5 `scalarMult` Vector 9.0 2.0 4.0 
	print $ Vector 2 9 3 `vectMult` (Vector 4 9 5 `scalarMult` Vector 9 2 4) 