function solution(A) {
    var minResult = Infinity;
    var temp;
    var initialRightSum = A.slice(1).reduce((acc, val) => acc + val );

    temp = A[0] - initialRightSum;
    if (Math.abs(temp) < minResult)
        minResult = Math.abs(temp);

    for (P = 1; P < A.length - 1; P++) {
        temp += (2 * A[P]);
        if (Math.abs(temp) < minResult)
            minResult = Math.abs(temp);
    }
    return minResult;

}