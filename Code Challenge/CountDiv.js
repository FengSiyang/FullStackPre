// function solution(A, B, K) {
//     var startValue = (A % K == 0) ? A : A + K - (A % K);
//     var result = [];
//     for (let i = 0; startValue + K * i <= B; i++) {
//         result.push(startValue + K * i);
//     }

//     return result;
// }

// O(1)
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    var startValue = (A % K == 0) ? A : A + K - (A % K);
    var gap = B - startValue + 1;
    return Math.ceil(gap / K);
}