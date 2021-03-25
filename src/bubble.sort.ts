
export const bubbleSort = (arr: any[]) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                const cache = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = cache;
            }
        }
    }
    return arr;
};
