let reviews: number[] = [4, 7, 9, 2, 5.5];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log("The average is " + average);
