function max(...numbers) {
  let allAmount = numbers.length;
  let bigNum = numbers[0];
  for (let i = 1; i < allAmount; i++) {
    if (numbers[i] > bigNum) {
      bigNum = numbers[i];
    };
  };
  return bigNum;
  //document.write(numbers, "<br>", allAmount,"<br>", bigNum);
};

//document.write(max(1,2,55,67,8,1,-3));
