function findFloor(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        
        if(arr[mid] === val){
            return val;
        }
        else if(arr[mid] > val){
            if(arr[mid-1] <= val){
                return arr[mid-1]
            }
            else {
                right = mid - 1;
            }
        }
        else {
            if(arr[mid+1] === val){
                return arr[mid+1];
            }
            else if(arr[mid+1] < val && arr[mid+2] > val){
                return arr[mid+1];
            }
            else {
                left = mid + 1;
            }
        }
    }
    return -1;
}

module.exports = findFloor