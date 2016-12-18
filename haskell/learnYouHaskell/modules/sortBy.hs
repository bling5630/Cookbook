import Data.List  

let xs = [[5,4,5,4,4],[1,2,3],[3,5,4,3],[],[2],[2,2]] 

main = print $ sortBy (compare `on` length) xs  