($$) :: (a -> b) -> a -> b
($$) f x = f x

myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (head:tail) = f head : myMap f tail

main = print $ map (\(a,b) -> a + b) [(1,2),(3,5),(6,3),(2,6),(2,5)] 