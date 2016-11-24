main = do
    putStrLn $ "--------------------"
    print $ [1,2,3] +++ [4,5,6]
    print $ (+++) [1,2,3] [4,5,6]
    print $ append [1,2,3] [4,5,6]
    print $ [1,2,3] `append` [4,5,6]
    putStrLn $ "--------------------"
    print $ haskellListToMyList [1,2,3,4,5]
    print $ myListToHaskellList $ Cons 1 (Cons 2 (Cons 3 (Cons 4 (Cons 5 Nil))))
    putStrLn $ "--------------------"
    print $ listAppend myList1 myList2
    putStrLn $ "--------------------"
    where
        myList1 = Cons 1 (Cons 2 (Cons 3 Nil))
        myList2 = Cons 4 $ Cons 5 $ Cons 6 Nil



infixr 5 +++
(+++) :: [a] -> [a] -> [a]
(+++) [] list2 = list2
(+++) list1 [] = list1
(+++) (x:xs) list2 = x : xs +++ list2

append :: [a] -> [a] -> [a]
append [] list2 = list2
append list1 [] = list1
append (x:xs) list2 = x : append xs list2



data List a
    = Cons a (List a)
    | Nil
    deriving (Show)

-- valahogy igy gondolj az adatkonstruktorokra:
--   Cons :: a -> List a -> List a
--   Nil :: List a



infixr 5 ++++
(++++) :: List a -> List a -> List a
(++++) Nil list2 = list2
(++++) list1 Nil = list1
(++++) (Cons x xs) list2 = Cons x (xs ++++ list2)
-- (++++) (Cons x xs) list2 = Cons x $ xs ++++ list2

listAppend :: List a -> List a -> List a
listAppend Nil list2 = list2
listAppend list1 Nil = list1
listAppend (Cons x xs) list2 = Cons x (listAppend xs list2)
-- listAppend (Cons x xs) list2 = Cons x $ listAppend xs list2





haskellListToMyList :: [a] -> List a
haskellListToMyList []     = Nil
haskellListToMyList (x:xs) = Cons x (haskellListToMyList xs)
-- haskellListToMyList (x:xs) = Cons x $ haskellListToMyList xs

myListToHaskellList :: List a -> [a]
myListToHaskellList Nil         = []
myListToHaskellList (Cons x xs) = x : myListToHaskellList xs




