/*
Write a function that computes the sum of all values between n and m, inclusive.

There is a formula you can use to compute the sum from 1 to n:

total = n * (n + 1) / 2
But we've misplaced the formula for the sum from n to m!

Think outside the box... is there some way to use that formula, n, and m to get the answer? You don't have to come up with a new formula; there's a way to use the existing one to solve it.
*/

// My Solution
function solution(n, m) {
    const sum = m * (m + 1) / 2
    const less = n - 1
    const toN = less * (less + 1) / 2
    return sum - toN
}
