import qualified Data.Map as Map

main = print $ Map.toList . Map.insert 9 2 $ Map.singleton 4 3 