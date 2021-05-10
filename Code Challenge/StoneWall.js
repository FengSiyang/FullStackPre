// Stack
/// ***************

function solution(H) { 
    var stack = [];
    blockCount = 0;
    for (let i = 0; i < H.length; i++) {
        // if the current wall <<< than previous one [the last one in stack], a block is closed.
        while(stack.length > 0 && H[i] < stack.slice(-1)) {
            stack.pop();
            blockCount++;
        }
        // if the current wall >>> than previous one [last one in stack], a block open [count while closed]
        // if stack is Empty, add new in stack directly.
        if (stack.length == 0 || H[i] > stack.slice(-1))
            stack.push(H[i]);

        // If current wall == previous --> no block will added [ignore]
    }
    blockCount += stack.length;
    return blockCount;
 }