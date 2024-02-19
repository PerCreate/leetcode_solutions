function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 1 && nums[0] === target) {
    return [0, 0];
  }

  let left = 0;
  let right = nums.length - 1;
  const result: number[] = [];

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const mid = nums[midIndex];

    if (!mid) return [];

    if (mid === target) {
      console.log(left, right, result);
      while (left !== nums.length - 1 && right !== 0) {
        if (result[0] !== undefined && result[1] !== undefined) return result;

        if (nums[left] === target && !result[0] !== undefined) {
          result[0] = left;
        } else if (!result[0] !== undefined) {
          left += 1;
        }

        if (nums[right] === target && !result[1] !== undefined) {
          result[1] = right;
        } else if (!result[1] !== undefined) {
          right -= 1;
        }
      }
    }

    if (mid > target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return [-1, -1];
}

console.log(searchRange([1, 4], 4));

// function searchRotated(nums: number[], target: number): number {
//   let left: number = 0;
//   let right: number = nums.length - 1;
//   while (left <= right) {
//     //устанавливаем середину на интересующем отрезке
//     let mid: number = Math.floor((left + right) / 2);

//     //проверяем на сужение отрезка до искомого числа
//     if (nums[mid] === target) return mid;

//     //проверяем левую половину на "несломанность/упорядоченность"
//     if (nums[left] <= nums[mid]) {
//       //есть ли таргет в привычном числовом порядке между крайними значениями левого отрезка?
//       //если да - сужаем отрезок справа на 1
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//         //если нет - пошли в правую половину, суженную с левой части на 1
//       } else {
//         left = mid + 1;
//       }
//       // если в первое условие не прошли
//     } else {
//       // есть ли таргет в привычном числовом порядке между крайними значениями правого отрезка?
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//         // если нет - пошли в левую половину, суженную с правой части на 1
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
//   //не нашли - вернули -1
//   return -1;
// }
