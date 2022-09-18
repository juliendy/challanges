// HEART CONSOLE

const n = 6;

for (let i = n / 2; i < n; i += 2) {
    // print first spaces
    // the first nested loop will print the spaces at the start. it will only print one space at the start.
    for (let j = 1; j < n - i; j += 2) {
        process.stdout.write(" ");
    }
    // print first stars
    // the second nested loop will print the *. in the first iteration, it will print three stars, j < i+1, i=3, and j=1.
    for (let j = 1; j < i + 1; j++) {
        process.stdout.write("*");
    }
    // print second spaces
    // the third nested loop will print the gap spaces between the starts. In the first iteration, it will print three spaces, j < n - i + 1, n=6 , i=3, and j=1.
    for (let j = 1; j < n - i + 1; j++) {
        process.stdout.write(" ");
    }
    // print second stars
    // the fourth nested loop will print the *. It prints the remaining star. in the first iteration, it will print three stars, j < i+1, i=3, and j=1 just like the second nested loop.
    for (let j = 1; j < i + 1; j++) {
        process.stdout.write("*");
    }
    console.log();
}
// lower part
// inverted pyramid
// this is the outer for loop; 5 iterations to complete the lower half of the heart.
for (let i = n; i > 0; i--) {
    // the first nested for loop will print the spaces. in the first iteration, it will print zero spaces as j < n - i, n=6, i=6, and j=0.
    for (let j = 0; j < n - i; j++) {
        process.stdout.write(" ");
    }
    // the second nested for loop will print the *. in the first iteration, it will print eleven stars as j < i * 2, i=6, and j=1.
    for (let j = 1; j < i * 2; j++) {
        process.stdout.write("*");
    }
    console.log();
}
