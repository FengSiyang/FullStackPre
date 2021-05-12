/// Maximum Slice Problem

function solution(A) {
    var negtiveCheck = true;
    for (i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            negtiveCheck = false;
            break;
        }
    }

    if (negtiveCheck) {
        var max_slice = A[0];
        for(i = 0; i < A.length; i++)
            max_slice = Math.max(max_slice, A[i]);
    }
    else {
        var max_end = 0, max_slice = 0;
        for (i = 0; i < A.length; i++) {
            max_end = Math.max(0, max_end + A[i]);
            max_slice = Math.max(max_slice, max_end);
        }
    }
    
    return max_slice;
}