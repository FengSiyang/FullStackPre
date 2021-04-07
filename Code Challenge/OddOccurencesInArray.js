function solution(A) {
    var counts = {};
    // A.forEach(function(x) {
    //     counts[x] = (counts[x] || 0) + 1;
    // });
    A.forEach(e => counts[e] = (counts[e] || 0) + 1);
    for (let k in counts) {
        if (counts[k] % 2 == 1) {
            return k;
        }
    }
    return null;
}