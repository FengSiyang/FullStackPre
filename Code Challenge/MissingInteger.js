function solution(A) {
    var minInt = 1;
    const sortedA = A.sort((x, y) => x - y);
    // OR: const sortedA = A.sort(function(x, y) {return x - y});

    sortedA.forEach(element => {
        if (element == minInt)
            minInt++;
    });

    return minInt;
}