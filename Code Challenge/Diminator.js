// Leader Section
// Leader is the value appears more than n/2 times in n numbers list.
// O(N2) --- Naive Solution
// O(NlogN) --- quick sort and find the mid value
// O(N) --- Stack to remove every two difference values on the top of stack, the rest is the leader!
// Caution: Should determind if the leader exist or not FIRST!

function solution(A) {
    var stack = [];
    var countDic = {};
    var mark = A.length / 2;
    for (let i = 0; i < A.length; i++) {
        if (stack.length == 0) stack.push(A[i]);
        else if (stack.slice(-1) != A[i]) stack.pop();
        else stack.push(A[i]);

        if (countDic[A[i]] == undefined)
            countDic[A[i]] = 1;
        else countDic[A[i]] += 1;
    }

    if (stack.length == 0) return -1;
    var t = stack.slice(-1);
    if (countDic[t] > mark) return A.indexOf(t);
    else return -1;
}