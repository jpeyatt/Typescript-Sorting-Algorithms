
export const mergeSort = (arr: any[]): any[] => {
	if (arr.length === 1) {
		return arr;
	}
	const arrMiddle = arr.length / 2;
	const leftArr = arr.slice(0, arrMiddle);
	const rightArr = arr.slice(arrMiddle);
	return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (left: any[], right: any[]) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}