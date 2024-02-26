console.log('%c [Javascript]', 'color:red; font-size: 1.5em')
const arr = [5, 3, 8, 1, 4];
arr.sort((a, b) => {
    return b - a; // 降順
});
console.log(arr);

arr.sort((a, b) => {
    return a - b; // 昇順
});
console.log(arr);