// sekumpulan program untuk menyelesaikan proses khusus

function bmi(weight: number, height: number) {
  let index: string[] = [
    "less weight",
    "ideal",
    "overweight",
    "very overweight",
    "obesity",
  ];
  const resultBmi = weight / (height * height);
  if (resultBmi < 18.5) {
    return index[0];
  } else if (resultBmi >= 18.5 && resultBmi <= 24.9) {
    return index[1];
  } else if (resultBmi >= 25 && resultBmi <= 29.9) {
    return index[2];
  } else if (resultBmi >= 30 && resultBmi <= 39.9) {
    return index[3];
  } else if (resultBmi > 39.9) {
    return index[4];
  } else {
    return null;
  }
}

console.log(bmi(66, 1.71));
console.log(bmi(100, 1.5));
console.log(bmi(80, 4));

// excercise 02

function fizzBuzz(n: number) {
  const result: (string | number)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(", ");
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(15));
