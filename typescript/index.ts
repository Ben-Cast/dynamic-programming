import { fibWithSimpleRecursion } from "./step1_simpleRecursion";
import { fibTopDownApproach } from "./step2_topDownApproach";
import { fibBottomUpApproach } from "./step3_bottomUpApproach";
import { fibOptimized } from "./step4_finalOptimization";

console.time("fibonacci with simple recursion");
console.log(fibWithSimpleRecursion(40));
console.timeEnd("fibonacci with simple recursion");

console.time("fibonacci with top down approach");
console.log(fibTopDownApproach(40));
console.timeEnd("fibonacci with top down approach");

console.time("fibonacci with bottom up approach");
console.log(fibBottomUpApproach(40));
console.timeEnd("fibonacci with bottom up approach");

console.time("fibonacci with optimized approach");
console.log(fibOptimized(40));
console.timeEnd("fibonacci with optimized approach");
