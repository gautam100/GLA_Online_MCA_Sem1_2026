function abc() {
  let ar = [
    10,
    20,
    30,
    5,
    7,
    2,
    "john",
    true,
    function () {
      return 10;
    },
  ];
  let sum = 0;
  for (let a of ar) {
    if (typeof a === "number") {
      sum = sum + a;
    } else if (typeof a === "function") {
      console.log(a());
    } else {
      console.log(a);
    }
  }
  // for(let i=0;i<ar.length;i++){
  //     sum = sum + ar[i]
  // }
  return sum;
}
console.log(abc());

/*
ar = 10 20 30 5 7 2
sum = 74
a = 2

*/
