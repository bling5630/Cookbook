main = do
    --print $ "--- Running ---"
    --print $ [1,2,3,4,5]
    --print [1,2,3]
    --print ( transformWith multiplyBy2 4)
    --print $ (multiplyBySomething 2) 3
    --print $ tesztFnc1 [1,2,3] [4,5]
    --print (multiplyBySomething 2 (multiplyBySomething 2 (multiplyBySomething 2 3)))
    --print $ multiplyBySomething 2 $ multiplyBySomething 2 $ multiplyBySomething 2 3
    --                                     --(multiplyBySomething 2) $ 6
    --                                     --multiplyBySomething 2 6
    --print $ map multiplyBy2 [1, 2, 3]
    --print $ [multiplyBy2 1, multiplyBy2 2, multiplyBy2 3]
    --print $ map (multiplyBySomething 2) [1,2,3]
    --print $ [ (x, y) | x <- tiznelKisebb , y <- tiznelKisebb , x + y == 5 ]
    --print $ [ x | x <- [1,3..20] ]

    print $ "1 : 2 : 3 : []"
    print $ showMyListInt $ MyCons 1 (MyCons 2 (MyCons 3 MyNil))

    print $ addTwoToAllElements [1, 2, 3]

    --1:[2,3] = (1 + 2) : addTwoToallElements [2,3]

    --2 + 2 : addTwoToallElements [3]
    --3 + 2 : addTwoToallElements []

    print $ [1,2,3] +++ [4,5,6]
    print $ reverseList [1,2,3,4]

    print $ myMap multiplyBy2 [1,2,3]

    -- print $ vilagvegeigRekurzio [1,2,3]


    where
        tiznelKisebb = [0..9]


data MyList a = MyCons a (MyList a)
              | MyNil

showMyListInt :: MyList Int -> String
showMyListInt MyNil = "[]"
showMyListInt (MyCons head tail) = show head ++ " : " ++ showMyListInt tail

addTwoToAllElements :: [Int] -> [Int]
addTwoToAllElements [] = []
addTwoToAllElements (head:tail) = (head + 2) : addTwoToAllElements tail



    --print $ map ($ 2) [multiplyBySomething 2, addThree]

--($ 2) (multiplyBySomething 2)

--($ 2)     :: (Int -> b) -> b
--($ 2)     f = f 2

($$) :: (a -> b) -> a -> b
($$) f x = f x

transformWith :: (Int -> Int) -> Int -> Int
transformWith f x = f x

multiplyBy2 :: Int -> Int
multiplyBy2 x = x * 2

addThree :: Int -> Int
addThree x = x + 3

multiplyBySomething :: Int -> (Int -> (Int))
multiplyBySomething x y = x * y

--multiplyBySomething :: Int -> Int
--multiplyBySomething y = 2 * y

--fnc :: Int -> (Int -> (Int -> (Int -> Int)))
--fnc x1 x2 x3 x4 = x1 * x2 * x3 * x4

--fnc 1 2 3 4
--(fnc 1 2 3) 4
--((fnc 1 2) 3) 4
--(((fnc 1) 2) 3) 4

tesztFnc1 :: [a] -> [a] -> [a]
tesztFnc1 x y = x ++ y


(+++) :: [a] -> [a] -> [a]
(+++) [] [] = []
(+++) [] list2@(x:xs) = list2
(+++) list1@(x:xs) [] = list1
(+++) l1@(x:xs) l2@(y:ys) = x : (xs +++ l2)

--x1 : x2 : (xs +++ l2)
-- ...

--x1 : x2 : x3 : l2

reverseList :: [a] -> [a]
reverseList [] = []
reverseList (x:xs) = reverseList xs +++ [x]


myMap :: (a -> b) -> [a] -> [b]
myMap _ [] = []
myMap f (head:tail) = f head : myMap f tail

-- Rekurzio
-- 1) Megallasi feltetel
-- 2) Elso vagy Koztes lepes vegiggondolasa
-- 3) Mindenkepp hivja meg onmagat a fgv

vilagvegeigRekurzio :: [a] -> [a]
vilagvegeigRekurzio lista = vilagvegeigRekurzio lista