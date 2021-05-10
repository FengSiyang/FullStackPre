// The direction of 0, 1 is fixed!!!
// 0 ->; 1 <-;
// So! One fish can only eat the fished in the specific direction (Upstreamming or Downstreamming)

function solution(A, B) {
    var stack = [];
    var ct = A.length;

    for (let i = 0; i < A.length; i++) {
        if (B[i] == 1) stack.push(A[i]);

        else {
            while(stack.length > 0) {
                if (stack.slice(-1) > A[i]) {
                    ct--;
                    break;
                }
                else {
                    ct--;
                    stack.pop();
                }
            }
        }
    }
    return ct;
}