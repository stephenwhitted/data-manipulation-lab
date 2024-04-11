// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50); //true

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd); //true

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25); //true

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique); //true
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
console.log(isValid);
// Finally, log the results.
console.log(isValid); //true

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  console.log(dontDoThis); //ture


  // The initial numbers that must be verified.
const a1 = 10;
const a2 = 15;
const a3 = 20;
const a4 = 5;
//Q1: Check to see if the numbers above are divisbile by 5 or in other words use (%5)

const divby5 = (a1 %5) + (a2 %5) + (a3 %5) + (a4 %5) ==0
console.log(divby5) //true


//Q2: Check if the first number is larger than the last.
const isFirstGreaterthanlast = a1 > a4;
console.log(isFirstGreaterthanlast) //true

//Q3: Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
//Multiply the result by the third number.
//Find the remainder of dividing the result by the fourth number. //
const aChain = ((a2 - a1) * (a3)) % a4;
console.log(aChain); //0

//Q4:Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isNotOver25 = !(a1 =< 25 && a2 =< 25 && a3 <= 25 && a4 =< 25); //true

//End of Part 1//

//Begin Part 2//
//The distance of the trip, in total, is 1,500 miles.
//Your car’s fuel efficiency is as follows:
//At 55 miles per hour, you get 30 miles per gallon.
//At 60 miles per hour, you get 28 miles per gallon.
//At 75 miles per hour, you get 23 miles per gallon.
//You have a fuel budget of $175.
//The average cost of fuel is $3 per gallon.

const mPh1 = 55;
const mPh2= 60;
const mPh3 = 75;
const mPg1 = 30;
const mPg2 = 28;
const mPg3 = 23;
const nDollars = 175;
const nCost = 3;
const nMiles = 1500

//Q1: How many gallons of fuel will you need for the entire trip?
const nGallons1 = nMiles / mPg1;
console.log (nGallons1);
//

const nGallons2 = nMiles / mPg2;
console.log (nGallons2);
//

const nGallons3 = nMiles /mPg3;
console.log (nGallons3);

