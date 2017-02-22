import Prelude hiding (Either, Right, Left)
instance Functor (Either a) where  
    fmap f (Right x) = Right (f x)  
    fmap f (Left x) = Left x 

data Either a b = Left a | Right b      

