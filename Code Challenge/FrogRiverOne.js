function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!A || A.length == 0) 
        return -1;
    var target = (1 + X) * X / 2;
    const seen = new Set();
    var countSum = 0;

    for ( let i = 0; i < A.length; i++) {
        if (seen.has(A[i]))
            continue;
        // if A[i] not in seen
        seen.add(A[i]);
        countSum += A[i]
        if (countSum == target)
            return i;
    }
    return -1;
}
