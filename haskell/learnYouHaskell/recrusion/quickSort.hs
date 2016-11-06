quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
    let smallerSorted = quicksort [a | a <- xs, a <= x]
        biggerSorted = quicksort [a | a <- xs, a > x]
    in  smallerSorted ++ [x] ++ biggerSorted

main = do
    print(quicksort [12,1,2,3,5,7,6587,68,8,568,678,21312,1,2,3,4])
    print(quicksort [1,3,4,2,5,67,9])
    print(quicksort "List comprehensions. So, let's dive in and define this function.")
