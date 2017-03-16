import Control.Applicative

data Profession = Fighter | Archer | Accountant  
  
data Race = Human | Elf | Orc | Goblin  
  
data PlayerCharacter = PlayerCharacter Race Profession  

newtype CharList = CharList { getCharList :: [Char] } deriving (Eq, Show)  
 
main = do 
	print $ getZipList $ ZipList [(+1),(*100),(*5)] <*> ZipList [1,2,3]  
	print $ CharList "this will be shown!"  
	print $ CharList "benny" == CharList "benny" 
	print $ CharList "benny" == CharList "oisters" 