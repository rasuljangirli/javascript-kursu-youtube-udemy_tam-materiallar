//? https://camo.githubusercontent.com/53a3a4d5ce584e243bbe783d5825bb0fe1a1bc148ab72b608c946d5b26832eaa/68747470733a2f2f7777772e73697465736261792e636f6d2f646174612d7374727563747572652f696d616765732f707573682d6f7065726174696f6e2e676966
//? https://sivabharathy.in/assets/images/event-loop-df1cd0a90bd90897f4194b9b4c6b6e43.gif
//?

//? LIFO  -- Last in first out
//? FIFO  -- First in first out

// function f1() {
//   console.log("f1");
//   f2();
// }

// function f2() {
//   console.log("f2");
//   f3();
// }

// function f3() {
//   console.log("f3");
// }

// f1();

function f1() {
  console.log("f1");
}

function f2() {
  console.log("f2");
}

function f3() {
  console.log("f3");
}

f1();
f2();
f3();
