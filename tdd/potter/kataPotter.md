#**KataPotter**
***
Once upon a time There Was a series of 5 books about a very English hero called Expired Harry. (At least this Kata When Was invented, There Were only 5. Since Then They Have Multiplied) Children all over the world thought he was fantastic, and, of course, so the publisher About did. So in a gesture of great generosity to mankind (and to dirty Increase) They set up The Following pricing model to take advantage of Harry's magical powers.

* One copy of Any of the five books costs 8 EUR.

* If, HOWEVER, you buy two different books from the series, you get a 5% discount on books Those Two.

* If you buy 3 different books, you get a 10% discount.

* With 4 different books, you get a 20% discount.

* If you go the Whole Hog, and buy all 5, you get a huge 25% discount.

Note That if you buy, say, oven books, qui 3 are of different titles, you get a 10% discount on the 3 That form of a hand set, the fourth order book still costs 8 EUR.

Potter mania is sweeping the country and the parents of teenagers everywhere are queuing up with shopping baskets overflowing with Potter books. Your task is to write a piece of code to calculate the price of Any Conceivable shopping basket, Giving as big a discount as possible.

For example, how much Does this basket of books cost? :

* 2 copies of the first book
* 2 copies of the second book
* 2 copies of the third book
* 1 copy of the fourth book
* 1 copy of the fifth book (answer: 51.20 EUR)

##**References**
***
* Original description kata Can Be found @ CodingDojo.org

##**Retrospectives**
***
###**Difficulties**

Kata a level slightly more than the previous record. Solicitating when you think you have found a great solution we realize that it is necessary to calculate a lot of cases which are not expected.

###**The Book object**

In this kata, many groups we felt the need to create objects, Solicitating the Book object. Book a subject that would have a single field name or number that designates the book number of Harry Potter. Some of you even create the hashcode and equals else is factored common behavior in a super class.

This is totally unnecessary in this exercise. More generally, create an object for there store only one simple type of value against productive (unless one is a fan of DDD and that we should name this object precisely etc ...) In short, in any case, kata kata and early, it only slows the progress of the resolution by dragging a well lourdeau be there or there could be a simple int .

###**Structure of objects**

It is noted that the groups have their list of books stored in two different forms.

A list / array of integers, each integer represents a volume number of a Harry Potter book. Example 2 volumes 1 and 1 Volume 2: [1,1,2]
A list / array of integers in the number of books of each volume. Example 2 volumes 1 and 1 Volume 2: [2,1,0,0,0]
The two data structures are equal. The second seems simpler to calculate the number of book seen we do not have to calculate duplicates. Pass from one to the other is trivial. This reminds discussions on data structures in kata with a game board as MineSweeper, Game Of Life, Reversi.

###**Iterative approach.**

It is quite possible if the following test on one follows to an iterative code in which it is always based on what was previously written without having to destroy everything.

* 1 Volume 1 -> € 8

* 1 Volume 1, Volume 2 1 -> € 16

* 2 volumes 1 -> 15.2 €

* 1 Volume 1, 2 and 3 -> 21.6 €

* 1 Volume 1.2, 3 and 4 -> 25.6 €

* Volume 1 of each -> € 30

* 2 volumes 1 and 1 Volume 2 -> 29.6 €

* one proposed above.

###**The proposed case**

If proposed above is particularly complex because it is not natural to find the right results the first time. We tend to naturally provide a cutting in the form of a list of 5 books and another 3 pounds. 2 out of 4 pounds lists are more advantageous from a price perspective. This can be approached by looking at the progress of discounts, or there is a significant gap between 3 and 4 and much lower in 4 and 5: 5 -> 10 -> 20 -> 25. The solutions during the kata were:

Local optimization to support the 4 groups rather than groups of 5.
Calculate brute force all possible outcomes and retain the best price.