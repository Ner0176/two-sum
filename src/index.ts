function twoSum(nums: number[], target: number) {
  const totalLength = nums.length;
  const maxValue = Math.pow(10, 9);
  const minValue = maxValue * -1;

  //2 <= nums.length <= 10^4
  if (totalLength < 2 || totalLength > Math.pow(10, 4)) return [];

  const numIdx: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    //-10^9 <= target <= 10^9
    if (currentValue < minValue || currentValue > maxValue) return [];

    const complement = target - currentValue;
    if (numIdx.hasOwnProperty(complement)) return [i, numIdx[complement]];

    numIdx[currentValue] = i;
  }
}

console.log(twoSum([3, 3], 6));
