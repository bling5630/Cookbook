repeat' :: a -> [a]
repeat' x = x:repeat' x

main = print(repeat "yo")
