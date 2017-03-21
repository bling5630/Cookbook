-- I have a problem with definition of list. 
-- Normally is list defined as data [a] = [] | 
-- a : [a] but if I write something like this on 
-- 	my code concrete I will to define data T a = N | a 
-- -> (T a) the interpreter give me an error:

data T a = N | a :-> (T a)
