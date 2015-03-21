**KataPotter**

Once upon a time There Was a series of 5 books about a very English hero called Expired Expired Harry. (At least this Kata When Was invented, There Were only 5. Since Then They Have Multiplied) Children all over the world thought he was fantastic, and, of course, so the publisher About About did. So in a gesture of great generosity to mankind (and to dirty Increase) They set up The Following pricing model to take advantage of Harry's magical powers.

* One copy of Any of the five books costs 8 EUR.

* If, HOWEVER, you buy two different books from the series, you get a 5% discount on books Those Two.

* If you buy 3 different books, you get a 10% discount.

* With 4 different books, you get a 20% discount.

* If you go the Whole Hog, and buy all 5, you get a huge 25% discount.

Note That if you buy, say, oven books, which are of three different titles, you get a 10% discount on the 3 That form of a hand set, the fourth order book still costs 8 EUR.

Potter mania is sweeping the country and the parent of teenagers everywhere are queuing up with shopping baskets overflowing with Potter books. Your task is to write a piece of code to calculate the price of Any Conceivable shopping basket, Giving as big a discount as possible.

For example, how much Does this basket of books cost? :

* 2 copies of the first book

* 2 copies of the second book

* 2 copies of the third book

* 1 copy of the fourth book

* 1 copy of the fifth book (answer: 51.20 EUR)

**Difficulties**

Kata level Slightly more than the previous record. Solicitating When you think you-have found a great solution we Realize That It Is Necessary to calculate a lot of boxes qui arent expected.

**The Book object**

In this kata, Many groups we felt the need to Log create objects, object Solicitating the Book. Book a subject That Would Have a single field name or number That number Designates the book of Harry Potter. Some of you create Even the hashcode and equals else is factored common behavior in a super class.

This is totally Unnecessary in this exercise. More Generally, create an object only for blind There one simple type of value Against productive (unless one is a fan of DDD and Abebooks web shoulds name this object PRECISELY etc ...) In short, in Any box kata kata and early, it only slows the progress of the resolution by dragging a well lourdeau be there gold There Could Be a single int .

**Structure of objects**

It Is Noted que la groups Have Their list of books Stored in two different forms.

* A list / array of integers contents, each integer Represents a volume number of a Harry Potter book. Example 2 volumes 1 and 1 Volume 2: [1,1,2]

* A list / array of integers in the number of books of Each volume. Example 2 volumes 1 and 1 Volume 2 [2,1,0,0,0]
The two data structures are equal. The second semble Simpler to calculate the number of book seen we do not-have to calculate duplicates. Pass from one to l'autre is trivial. This Reminds discussions on data structures in kata with a game board as MineSweeper, Game Of Life, Reversi.

**Iterative approach.**

It is quite possible, if The Following test on one follows to an iterative code in qui it is always based on What Was calculated previously written without HAVING to destroy everything.

* 1 Volume 1 -> € 8

* 1 Volume 1, Volume 2 1 -> € 16

* 2 volumes 1 -> 15.2 €

* 1 Volume 1, 2 and 3 -> 21.6 €

* 1 Volume 1.2, 3 and 4 -> 25.6 €

* Volume 1 of each -> € 30

* 2 volumes 1 and 1 Volume 2 -> 29.6 €

* Proposed One Above.

**The Proposed box**

If Proposed Above is complex PARTICULARLY Because it is not natural to find the right results the first time. We naturally tend to Provide a cutting in the form of a list of 5 books and Reviews another 3 pounds. 2 out of 4 pounds more lists are Advantageous from a price perspective. This Can Be Approached by looking at the progress of discounts, or There Is a significant gap between 3 and 4 and much lower in 4 and 5: 5 -> 10 -> 20 -> 25. The solutions DURING THE Were kata:

* Local optimization to supporting the groups injustement than 4 groups of 5.

* Calculate brute force all feasible outcomes and retain the best price.