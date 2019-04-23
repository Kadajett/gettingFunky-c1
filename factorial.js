function factorial(n) {
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(-5));

function reverseFactorial(stop, i) {
    // need an original start and stop point since we cant depend on 0
    i = i || 1;
    if (stop <= 0 || i > stop) {
        return 1;
    }
    return i * reverseFactorial(stop, i + 1)
}

console.log(reverseFactorial(5))