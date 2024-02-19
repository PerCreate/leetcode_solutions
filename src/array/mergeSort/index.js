var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var counter = 0;
function merge(left, right) {
    var arr = [];
    console.log(left, right);
    while (left.length && right.length) {
        counter += 1;
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], arr, true), left, true), right, true);
}
function mergeSort(arr) {
    if (arr.length < 2)
        return arr;
    var halfLength = arr.length / 2;
    var leftArr = arr.splice(0, halfLength);
    return merge(mergeSort(leftArr), mergeSort(arr));
}
// console.log(merge([10, 11, 12], [1, 2, 3, 4, 5]));
console.log(mergeSort([
    10, 1, 2, 11, 22, 3, 4, 5, 12, 10, 1, 2, 11, 22, 3, 4, 5, 12, 10, 1, 2, 11,
    22, 3, 4, 5, 12, 10, 1, 2, 11, 22, 3, 4, 5, 12,
]), counter);
