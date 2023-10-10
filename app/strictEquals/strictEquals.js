const strictEquals = (valueA, valueB) => Object.is(valueA, valueB);

console.log(strictEquals(2, 2));

export default strictEquals;
