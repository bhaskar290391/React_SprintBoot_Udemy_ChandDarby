var reviews = [4, 7, 9, 2, 5.5];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The average is " + average);
