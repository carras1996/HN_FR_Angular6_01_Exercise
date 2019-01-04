describe("Largest Number", function(){
    it("Sắp xếp mảng thành một số lớn nhất 9534330",function(){
        expect('9534330').toEqual(largestNumber([3, 30, 34, 5, 9]));
    });
    it("Sắp xếp mảng thành một số lớn nhất 999999799898",function(){
        expect('999999799898').toEqual(largestNumber([9, 99, 98, 998, 9997]));
    });
    it("Sắp xếp mảng thành một số lớn nhất 999897612",function(){
        expect('999897612').toEqual(largestNumber([12,9,89,99,76]));
    });
    it("Sắp xếp mảng thành một số lớn nhất 58553330",function(){
        expect('58553330').toEqual(largestNumber([3, 30, 53, 5, 58]));
    });
    it("Sắp xếp mảng thành một số lớn nhất 98807977772",function(){
        expect('98807977772').toEqual(largestNumber([7,77,72,98,79,80]));
    });
});

describe("Merge Sort", function(){
    it("Merge sort: [3,9,10,27,38,43,82]",function(){
        expect([3,9,10,27,38,43,82]).toEqual(mergeSort([38, 27, 43, 3, 9, 82, 10]));
    });
    it("Merge sort: [4,16,29,38,38,97,812]",function(){
        expect([4,16,29,38,38,97,812]).toEqual(mergeSort([38, 29, 4, 38, 97, 812, 16]));
    });
    it("Merge sort: [5, 6, 7 ,11 ,12, 13]",function(){
        expect([5, 6, 7 ,11 ,12, 13]).toEqual(mergeSort([12 ,11 ,13 ,5 ,6 ,7]));
    });
    it("Merge sort: [1,2,4,7,40,99,111,2323]",function(){
        expect([1,2,4,7,40,99,111,2323]).toEqual(mergeSort([1,4,7,99,2,40,111,2323]));
    });
    it("Merge sort: [1,4,6,16,19,20,22,43]",function(){
        expect([1,4,6,16,19,20,22,43]).toEqual(mergeSort([20,43,16,22,4,6,19,1]));
    });
    
});

describe("Quick Sort",function(){
    it("Quick Sort: [2, 3, 6, 7, 8, 11, 14]",function(){
        expect([2, 3, 6, 7, 8, 11, 14]).toEqual(quickSort([11, 8, 14, 3, 6, 2, 7], 0, 6));
    });
    it("Quick Sort: [1, 2, 3, 6, 7, 8, 11, 14]",function(){
        expect([1, 2, 3, 6, 7, 8, 11, 14]).toEqual(quickSort([11, 8, 14, 3, 6, 2, 1, 7], 0, 7));
    });
    it("Quick Sort: [2, 3, 5, 6, 7, 9, 11, 16]",function(){
        expect([2, 3, 5, 6, 7, 9, 11, 16]).toEqual(quickSort([16, 11, 9, 7, 6, 5, 3, 2], 0, 7));
    });
    // it("Quick Sort: [1,2,4,7,40,99,111,2323]",function(){
    //     expect([1,2,4,7,40,99,111,2323]).toEqual(quickSort([1,4,7,99,2,40,111,2323],0,7));
    // });
    // it("Quick Sort: [1,4,6,16,19,20,22,43]",function(){
    //     expect([1,4,6,16,19,20,22,43]).toEqual(quickSort([20,43,16,22,4,6,19,1],0,7));
    // });
});

describe("Hotel Bookings Possible",function(){
    it("Hotel Bookings Possible: true",function(){
        expect(true).toEqual(hotelBooking([1, 2,6,8], [4, 5, 9,10], 2));
    });
    // it("Hotel Bookings Possible: ",function(){
    //     expect().toEqual();
    // });
    // it("Hotel Bookings Possible: ",function(){
    //     expect().toEqual();
    // });
    // it("Hotel Bookings Possible: ",function(){
    //     expect().toEqual();
    // });
    // it("Hotel Bookings Possible: ",function(){
    //     expect().toEqual();
    // });
});

describe("Rotate Matrix",function(){
    it(`Rotate Matrix: [ [ 13, 9, 5, 1 ],
    [ 14, 10, 6, 2 ],
    [ 15, 11, 7, 3 ],
    [ 16, 12, 8, 4 ] ]`,function(){
        expect([ [ 13, 9, 5, 1 ],
            [ 14, 10, 6, 2 ],
            [ 15, 11, 7, 3 ],
            [ 16, 12, 8, 4 ] ]).toEqual(rotateMatrix([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ]));
    });
    // it("Rotate Matrix: ",function(){
    //     expect().toEqual();
    // });
    // it("Rotate Matrix: ",function(){
    //     expect().toEqual();
    // });
    // it("Rotate Matrix: ",function(){
    //     expect().toEqual();
    // });
    // it("Rotate Matrix: ",function(){
    //     expect().toEqual();
    // });
});

describe("Set Matrix Zeros",function(){
    it("Set Matrix Zeros: [ [ 0, 0, 0 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ]",function(){
        expect([ [ 0, 0, 0 ], [ 1, 0, 1 ], [ 1, 0, 1 ] ]).toEqual(setMatrixZeros([
            [1, 0, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]));
    });
    // it("Set Matrix Zeros: ",function(){
    //     expect().toEqual();
    // });
    // it("Set Matrix Zeros: ",function(){
    //     expect().toEqual();
    // });
    // it("Set Matrix Zeros: ",function(){
    //     expect().toEqual();
    // });
    // it("Set Matrix Zeros: ",function(){
    //     expect().toEqual();
    // });
});