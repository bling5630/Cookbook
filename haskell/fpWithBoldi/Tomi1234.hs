main = do
    print feladat11
    print feladat12
    print feladat2
    print feladat3
    print $ True  == search "káposztás" "elkelkáposztástalaníthatatlanságoskodásaitokért"
    print $ False == search "ISeeQ"     "elkelkáposztástalaníthatatlanságoskodásaitokért"



-- ide kell pattern matching ? gyakorolni ?

--   Mi itt a feladat? A resz-listakat osszegezni?
--   Vagy az egeszet osszegezni?

-- reszlistak osszege
feladat11 = map sum $ [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]
-- egesz osszege
feladat12 = sum $ map sum $ [[0,3,5,9],[10,0,0,9],[8,5,1,-1]]



-- if you want to completely flatten [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]],
-- which is a list of lists of lists, you have to concatenate it twice, how?
feladat2 = concat $ concat [[[2,3],[3,4,5],[2]],[[2,3],[3,4]]]


-- Ez nalam fordult:
feladat3 = head $ dropWhile (\(val,y,m,d) -> val < 1000) stock
    where
        stock = [(994.4,2008,9,1),(995.2,2008,9,2),(999.2,2008,9,3),(1001.4,2008,9,4),(998.3,2008,9,5)]




-- Eleg zavaros a konyvnek ez a needle-haystack peldaja, en inkabb igy irnam meg:
search :: (Eq a) => [a] -> [a] -> Bool
-- Ures lista onmagat tartalmazza (Specialis megallasi feltetel)
search [] [] = True
-- Elso parameter mar csak nem-ures lista lehet, azt nem tartalmazhatja az ures lista (Altalanos megallasi feltetel)
search _ [] = False
-- Ha az elso parameter prefixe a madosiknak, kesz vagyunk, ha nem, akkor megyunk a tail-lel tovabb ujra rekurzivan
search needle haystack@(_:haystackTail)
    | isPrefixOf needle haystack = True
    | otherwise                  = search needle haystackTail
    where
        -- ez az isPrefixOf fgv amugy megtalalhato a Data.List-ben
        isPrefixOf :: (Eq a) => [a] -> [a] -> Bool
        isPrefixOf prefix list =
            prefix == take (length prefix) list
