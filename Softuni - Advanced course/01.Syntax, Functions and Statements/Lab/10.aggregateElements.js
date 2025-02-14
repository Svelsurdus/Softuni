function aggregateElements(elements) {
  aggregate(elements, 0, (a, b) => a + b);
  aggregate(elements, 0, (a, b) => a + 1 / b);
  aggregate(elements, "", (a, b) => a + b);
  function aggregate(arr, initVal, func) {
    let val = initVal;
    for (let i = 0; i < arr.length; i++) val = func(val, arr[i]);
    console.log(val);
  }
}
aggregateElements([1, 2, 3]);
// Expected Output:
// 6
// 1.8333333333333333
// 123
aggregateElements([2, 4, 8, 16]);
// Expected Output:
// 30
// 0.9375
// 24816