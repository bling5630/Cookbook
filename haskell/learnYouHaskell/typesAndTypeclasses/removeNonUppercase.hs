removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]

main = print(removeNonUppercase "FFSfd2344343fdsfsdADFS")
