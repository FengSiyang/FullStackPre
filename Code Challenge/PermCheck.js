function solution(A) {
    const lengthA = A.length;

    // checking duplicate
    const setArray = new Set(A);
    if (setArray.size != lengthA)
        return 0;

    const supposedSum = (1 + lengthA) * lengthA / 2;
    var arraySum = A.reduce((acc, val) => acc + val);
    if (supposedSum != arraySum) {
        return 0;
    }
    return 1;
}