helloMe :: CoolBool -> String  
helloMe (CoolBool _) = "hello"  

newtype CoolBool = CoolBool { getCoolBool :: Bool } 

main = print $ helloMe undefined