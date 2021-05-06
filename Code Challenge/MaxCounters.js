function solution(N, A) {
    var ls = Array(N).fill(0);
    // var preMax = 0;
    var maxValue = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] == N + 1) { // if A[i] is larger than N, fill all list value into recorded max value
            ls.fill(maxValue);
            // preMax = maxValue;
            continue;
        }
        ls[A[i] - 1]++;
        // maxValue = (ls[A[i] - 1] > maxValue) ? ls[A[i] - 1] : maxValue;
        if (ls[A[i] - 1] > maxValue) maxValue = ls[A[i] - 1];        
    }
    return ls;
}


let N = 5;
let A = [3,4,4,6,1,4,4];
var v = solution(N, A);
console.log(v);