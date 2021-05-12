function solution(N) {
    if (N == 1) return 1;
    var factors = new Set();
    var root = Math.sqrt(N);
    for (i = 1; i <= root; i++) {
        if (N % i == 0) {
            factors.add(i);
            factors.add(N / i);
        }
    }
    return factors.size;
}