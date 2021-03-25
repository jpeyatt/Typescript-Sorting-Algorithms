import { selectionSort } from '../index';


let testCase = [4, 3, 2, 9];
let testCaseExpect = [2, 3, 4, 9];
test('Selection Sort: Case 1', () => {
    expect(selectionSort(testCase)).toEqual(testCaseExpect);
});

testCase = [0, 0, -1, 99, 44];
testCaseExpect = [-1, 0, 0, 44, 99];
test('Selection Sort: Case 2', () => {
    expect(selectionSort(testCase)).toEqual(testCaseExpect);
});

testCase = [101, 1000, 20, 1, 0, 50, 55];
testCaseExpect = [0, 1, 20, 50, 55, 101, 1000];
test('Selection Sort: Case 3', () => {
    expect(selectionSort(testCase)).toEqual(testCaseExpect);
});