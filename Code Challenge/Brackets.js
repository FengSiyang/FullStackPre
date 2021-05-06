function solution(S) {
    var bracketsDict = {
        "}": "{",
        ")": "(",
        "]": "["
    };

    var stack = [];
    
    for (let i = 0; i < S.length; i++) {
        if (bracketsDict[S[i]] == undefined)
            stack.push(S[i]);
        else if (stack.slice(-1) == bracketsDict[S[i]])
            stack.pop();
        else return 0;
    }
    if (stack.length != 0) return 0;
    return 1;
}