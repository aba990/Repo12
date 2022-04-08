function rangeOfNumbers(startN, endN){
    if (startN > endN) {
    return [];
    } else {
	var myArr = rangeOfNumbers(startN, endN - 1);
    myArr.push(endN);
    return myArr;
    }
};
	
console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
