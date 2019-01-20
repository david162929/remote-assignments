function calculate(args){
  let result;
  if(args.op==="+"){
    result=args.n1+args.n2;
  }else if(args.op==="-"){
    result=args.n1-args.n2;
  }else{
    result="Not supported";
  }
  return result;
}
// Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4});
And, you should find another way to create a proper object.
// your way
*/

/*first way*/
const input1 = {};
input1.n1 = 7;
input1.n2 = 9;
input1.op = "+";

calculate(input1);
//console.log(calculate(input1));

/*second way*/
const input2 = {};
input2["n1"] = 7;
input2["n2"] = 9;
input2["op"] = "-";

calculate(input2);
//console.log(calculate(input2));



