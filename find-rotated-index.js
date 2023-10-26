function findRotatedIndex(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === val){
            return mid;
        }
        else if(arr[mid] > val){
            if(arr[left] <= val && arr[mid] > val){
                right = mid - 1
            }
            else{
                left = mid + 1;
            }
            
        }
        else {
            if(arr[right] >= val && arr[mid] < val){
                left = mid + 1;
            } 
            else {
                right = mid - 1;
            }
        }
    }
    return -1;
}