function isInt(number) {
    return number % 1 === true;
}

let F0 = +prompt('Write the first number from the Fibonacci series');
while (isInt(F0) || isNaN(F0)) {
    F0 = +prompt('Incorrect input, write again first number');
}

let F1 = +prompt('Write the second number from the Fibonacci series');
while (isInt(F1) || isNaN(F1)) {
    F1 = +prompt('Incorrect input, write again first number');
}

let n = +prompt('Write n:');
while (isInt(n) || isNaN(n)) {
    n = +prompt('Incorrect input, write again n-number');
}

function fibonacciPosit(F0, F1, n) {
    if (n == 1) {
        return F0;
    }
    else if (n == 2) {
        return F1;
    }
    else {
        let relativeRes;
        for (let i = 2; i < n; i++) {
            relativeRes = F0 + F1;
            F0 = F1;
            F1 = relativeRes;
        }
        return relativeRes;
    }
}

function fibonacciNegat(F0, F1, n) {
    let relativeRes;
    for (let i = 2; i < n; i++) {
        relativeRes = F0 - F1;
        F0 = F1;
        F1 = relativeRes;
    }
    return relativeRes;
}

if (F0 > 0 && F1 > 0) {
    alert(`n-th number in the Fibonacci sequence is: ${fibonacciPosit(F0, F1, n)}`);
}
else {
    alert(`n-th number in the Fibonacci sequence is: ${fibonacciNegat(F0, F1, n)}`);
}