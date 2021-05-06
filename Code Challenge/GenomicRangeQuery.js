function solution(S, P, Q) { 
    var subDNA = '';
    var output = [];

    for (let i = 0; i < P.length; i++) {
        subDNA = S.slice(P[i], Q[i] + 1);
        if (subDNA.includes('A'))
            output.push(1);
        else if (subDNA.includes('C'))
            output.push(2);
        else if (subDNA.includes('G'))
            output.push(3);
        else
            output.push(4);
    }

    return output;
 }