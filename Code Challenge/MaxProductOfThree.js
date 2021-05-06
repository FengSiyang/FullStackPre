function solution(A) {
    A.sort((a, b) => (a - b));
    var len = A.length;
    return Math.max(A[len - 1] * A[len - 2] * A[len - 3], A[0] * A[1] * A[len - 1]);
}