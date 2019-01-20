function twoSum(nums, target){
  let sum = 0;
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    for (let x = i+1; x < nums.length; x++) {
      sum = nums[i] + nums[x];
      //console.log(i,x,sum);
      if (sum === target) {
        index.push(i,x);
        return index;
      }
    }
  }
      
}


//console.log(twoSum([2, 7, 11, 15, 23], 34));



/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/