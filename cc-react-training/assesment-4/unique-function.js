function unique(arr) {
  let  val=[...new Set(arr)];
  return val;
}

let value=["green", "green", "red", "red",  "yellow", "pink", "pink", "yellow"];

console.log(unique(value))