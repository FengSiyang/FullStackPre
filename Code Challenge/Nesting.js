function solution(S) { 
    var stack = [];
    var dic = {')' : '('};

    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') stack.push('(');
        else {
            if (stack.length != 0) stack.pop();
            else return 0;
        }
    }
    if (stack.length != 0) return 0;
    return 1;
 }