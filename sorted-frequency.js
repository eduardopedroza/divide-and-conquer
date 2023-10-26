function sortedFrequency(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] === val){
            right = middle - 1;
        }
        else if(arr[middle] < val){
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return arr.length - left
}

module.exports = sortedFrequency