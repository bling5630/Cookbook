
-- lista
-- list comprehension
-- lambda fgv
-- tipusvaltozok

main = do
    print $ peldaLista
    print $ myMap (\x -> x * 3) peldaLista
    print $ myFilter (\x -> x `mod` 2 == 0) peldaLista
    print $ peldaLista +++ peldaLista
    print $ myReverse [1,2,3,4]
    print $ [ e | e <- [1..20] ]
    print $ [ (x,y) | x <- [1,3,5] , y <- [2,4,6] ]
    print $ [ (x,y) | x <- [1,3,5] , y <- [2,4,6] , (x + y == 5) ]
    print $ [ (x,y) | x <- [1..20] , y <- [1..20] , ((x + y) `mod` 2 == 1) ]
    print $ [ (x,y) | x <- [1..20] , y <- [1..20] , isOdd x && isEven y || isEven x && isOdd y ]
    print $ peldaMyList
    where



        peldaLista = [1,2,3,4,5,6,7]
        peldaMyList = generateMyList peldaLista
        isOdd x  = x `mod` 2 == 1
        isEven x = x `mod` 2 == 0

infixr 0 $$$
($$$) :: (a -> b) -> a -> b
($$$) f x = f x

(...) :: (b -> c) -> (a -> b) -> (a -> c)
(...) f g = \x -> f (g x)

myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (x:xs) =
    ( f x : (myMap f xs) )

myFilter :: (a -> Bool) -> [a] -> [a]
myFilter _ [] = []
myFilter p (x:xs)
    | p x       = x : myFilter p xs
    | otherwise = myFilter p xs

(+++) :: [a] -> [a] -> [a]
(+++) [] []    = []
(+++) [] list2 = list2
(+++) list1 [] = list1
(+++) (x:xs) list2@(y:ys) =
    x : (xs +++ list2)

myReverse :: [a] -> [a]
myReverse [] = []
myReverse (x:xs) = myReverse xs ++ [x]

data MyMaybe a = MyJust a
          | MyNothing
          deriving (Show)


data MyList a = MyCons a (MyList a)
              | MyNil
              deriving (Show)

(++++) :: (MyList a) -> (MyList a) -> (MyList a)
(++++) MyNil MyNil = MyNil
(++++) MyNil list2 = list2
(++++) list1 MyNil = list1
(++++) list1@(MyCons x tail1) list2@(MyCons y tail2) =
    MyCons x (tail1 ++++ list2)


generateMyList :: [a] -> (MyList a)
generateMyList [] = MyNil
generateMyList (x:xs) = MyCons x (generateMyList xs)

