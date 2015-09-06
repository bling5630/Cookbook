//+ fullName :: String -> String -> String -> String 

var fullName = function(first, middle, last) {
	return first + ' ' + middle + ' ' + last;
}.autoCurry();

fullName('Hunter', 'Stockton', 'Thompson'); // Hunter Stockton Thompson

var billSomething= fullName('Bill');

billSomething('Henry', 'Cosby'); // Bill Henry Cosby

var billJefferson = billSomething('Jefferson');

billJefferson('Clinton'); // Bill Jefferson Clinton