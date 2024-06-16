export function fibBottomUpApproach(n: number): number {
  if (n <= 1) {
    return n;
  }
  let fibTable: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibTable[i] = fibTable[i - 1] + fibTable[i - 2];
  }
  return fibTable[n];
}


