export function fibTopDownApproach(n: number, memo: number[] = []): number {
  if (n <= 1) {
    return n;
  }
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = fibTopDownApproach(n - 1, memo) + fibTopDownApproach(n - 2, memo);
  return memo[n];
}
