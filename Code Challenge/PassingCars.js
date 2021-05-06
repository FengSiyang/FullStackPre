function solution(A) {
    var res = 0;
    var countZero = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] == 0)
            countZero++;
        else
            res += (countZero * 1);
    }

    if (res > 1000000000)
        res = -1;

    return res;
}