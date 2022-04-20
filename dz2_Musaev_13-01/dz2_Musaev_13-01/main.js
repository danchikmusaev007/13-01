const obj ={
    example1: '*',
    example2: '**',
    example3: '***',
    example4: '****',
    example5: '*****',
    example6: '******',
    example7: '*******',
}
for (let example in obj){
    console.log(obj["example"])
}



let  lol= "*"
while (lol.length<=7) {
    console.log(lol);
    lol+="*";
}
for (let i = 1; i <= 100; i++){

    if (i % 6 === 0) {
    console.log(i, "FizzBuzz");
} else if (i % 3 === 0) {
    console.log(i, "Fizz");
} else if (i % 5 === 0) {
    console.log(i, "Buzz");
} else {
    console.log(i)
}
}