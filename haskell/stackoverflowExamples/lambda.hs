myMap :: (a -> b) -> [a] -> [b]
myMap addSomething [] = []
myMap addSomething (x:xs) = addSomething x : myMap addSomething xs

instance Show (a -> b) where
         show a = "function"

list = [0..4]
listTwo = [(5 :: Int)..9]

addSomething :: Int -> Int
addSomething x = x + 1

addSomethingTwo :: Num a => a -> a-> a
-- addSomethingTwo y = (\x->x+1) y
addSomethingTwo x = (\x->x+1)

main = do
	print $ myMap addSomething list
	print $ myMap addSomethingTwo listTwo