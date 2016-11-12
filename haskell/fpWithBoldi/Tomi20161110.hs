-- sudo apt-get install sublime-text
-- haskell-platform haskell.org-rol
-- sublime text 2
--kifejezes `futtasd` strategia


main = do
    --putStrLn (show 2)
    print 6
    print 3434
    --print (multiply 2 3)
    --print (2 `multiply` 3)
    --print (isTwo 2)
    --print (isThisKutya Beka)
    putStrLn (show2 (Macska2 20 "bela"))
    --print ()
    print (getRuhaMarkaFromAllatIfItIsPulover (Macska3 20 "bela" (Pulover "H&M")))



multiply :: Int -> Int -> Int
multiply x1 x2 = x1 * x2

ketto :: Int
ketto = 2

isTwo :: Double -> Bool
isTwo x =
    if (x == 2)
        then True
        else False

isTwo2 :: Double -> Bool
isTwo2 x
    | x == 2 = True
    | otherwise = False

isTwoOrFour :: Int -> Bool
isTwoOrFour x =
    if (x == 2)
        then True
        else if (x == 4)
            then True
            else False

-- == , /=


-- ADT
data Allat
    = Macska
    | Kutya
    | Beka

isThisKutya :: Allat -> Bool
isThisKutya Kutya = True
isThisKutya _ = False

isKetto :: Int -> Bool
isKetto 2 = True
isKetto _ = False



-- ADT masik

-- Allat2 : tipus (tipuskonstruktor)
-- Macska2: Adatkonstruktor
data Allat2
    = Macska2 Int String
    | Kutya2 Int String
    | Beka2 Int String
    --deriving (Show)

--Macska2 :: Int -> String -> Allat2

show2 :: Allat2 -> String
show2 (Macska2 kora neve) = "En egy macska vagyok, aki " ++ show kora ++ " eves es " ++ neve ++ "-nak hivjak."
show2 _ = "akarmi"

data AllatRuha
    = Pulover String
    | Polo String

data Allat3
    = Macska3 Int String AllatRuha

getRuhaMarkaFromAllatIfItIsPulover :: Allat3 -> String
getRuhaMarkaFromAllatIfItIsPulover allat@(Macska3 kora@_ neve@_ ruhaja@(Pulover marka)) = marka
getRuhaMarkaFromAllatIfItIsPulover _ = "ez nem kell"

getRuhaMarkaFromAllatIfItIsPulover2 :: Allat3 -> String
getRuhaMarkaFromAllatIfItIsPulover2 x =
    case x of
        (Macska3 _ _ (Pulover marka)) -> marka
        _                             -> "ez nem kell"


ujNevHaNemBelanakHivjakEsReturnAllatEsKora :: Allat3 -> (Allat3, Int)
ujNevHaNemBelanakHivjakEsReturnAllatEsKora (Macska3 kora "Bela" ruha) = (Macska3 kora "Margit" ruha, kora)
ujNevHaNemBelanakHivjakEsReturnAllatEsKora macska@(Macska3 kora _ _) = (macska, kora)



bonyolultAlgebraiSzamolas :: Int -> Int
bonyolultAlgebraiSzamolas x = k
    where
        y = x * 2
        z = y * 7
        k = y + z

bonyolultAlgebraiSzamolas2 :: Int -> Int
bonyolultAlgebraiSzamolas2 x =
    let y = x + 2 in 10 + y



