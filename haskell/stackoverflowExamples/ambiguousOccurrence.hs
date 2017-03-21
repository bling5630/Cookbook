data Algebra = Empty
	|   Nmbr Int Algebra
	|   Smbl Char Algebra

instance Eq Algebra where
	Empty == Empty              = True
	(Nmbr x xl) == (Nmbr y yl)  = (x == y) && (xl==yl)
	(Smbl x xl) == (Smbl y yl)  = (x == y) && (xl==yl)
	_ == _                  = False
