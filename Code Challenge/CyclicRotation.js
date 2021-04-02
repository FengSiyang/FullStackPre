function solution(A, K) {  
    var len = A.length;
    var rotations_rest = len - (K % len);
    var left = A.slice(0, rotations_rest), right = A.slice(rotations_rest);
    return right.concat(left);
}