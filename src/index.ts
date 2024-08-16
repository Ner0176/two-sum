//-10^9 <= target <= 10^9
function isValidNum(num: number) {
  const maxValue = Math.pow(10, 9);
  const minValue = maxValue * -1;
  return minValue <= num && num <= maxValue;
}

function twoSum(nums: number[], target: number) {
  const totalLength = nums.length;

  //2 <= nums.length <= 10^4
  if (totalLength < 2 || totalLength > Math.pow(10, 4)) return [];

  for (let i = 0; i < nums.length - 1; i++) {
    const op1 = nums[i];
    if (!isValidNum(op1)) return [];
    for (let j = i + 1; j < nums.length; j++) {
      const op2 = nums[j];
      if (!isValidNum(op2)) return [];
      if (op1 + op2 === target) return [i, j];
    }
  }
}

console.log(twoSum([3, 3], 6));
