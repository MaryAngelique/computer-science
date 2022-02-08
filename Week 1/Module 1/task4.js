/*
Write a function that computes the sum of all values between 1 and n, inclusive.

There is a formula you can use to compute this:

total = n * (n + 1) / 2
*/

// My Solution
function solution(n) {
    let sum = 0
    let i = 0
    
    while (i <= n) {
        sum = sum + i
        i += 1
    }
    
    return sum
}