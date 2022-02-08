/*
From the year you were born until now is a certain number of years. What year was it that many years before your birth year?

For example, if a person was born in 2000 and it is now 2021, their "flip year" would be 1979. (Because they are 21 years old, and there are 21 years between 1979 and 2000.)
*/

// My Solution
function solution(birth_year, current_year) {
    const diff = current_year - birth_year;
    const flip = birth_year - diff
    return flip
}