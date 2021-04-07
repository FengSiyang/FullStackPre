// Missing value can be calculated by:
// (N+1) - (Sum([1...N+1]) - Sum([1 ... N]))
// = Sum([1 ... N+1]) - Sum([1 ... N+1])
//     N+1 numbers          N numbers

function solution(A) {
    if (A.length == 0 || !A)
        return 1;
        
    var maxNadd1 = A.length + 1;
    var sumA = A.reduce((acc, val) => acc + val);
    var sumNadd1 = (1 + maxNadd1) * (A.length + 1) / 2;
    return sumNadd1 - sumA;
}