"""
BinaryGap:

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
"""
class Binary_gap:
    def sulution(self, N):
        self.N = N
        str_n = str(bin(self.N))[2:]
        list_n = list(str_n)
        max_gap = 0
        
        first_one = list_n.index('1')
        rest_list = list_n[first_one + 1: ]
        while True:
            try:
                second_index = rest_list.index('1')
            except ValueError:
                break
            if max_gap < second_index:
                max_gap = second_index
                rest_list = rest_list[second_index + 1:]

        return max_gap

if __name__ == '__main__':
     n = 2315
     print(Binary_gap().sulution(n))