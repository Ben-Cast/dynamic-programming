export function fibWithSimpleRecursion(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibWithSimpleRecursion(n - 1) + fibWithSimpleRecursion(n - 2);
}
