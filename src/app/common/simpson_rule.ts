export function simpson(x0: number, x1: number, n: number, func: (x: number) => number): number {

    const h = (x1 - x0) / n;
    let sum = func(x0) + func(x1);

    for (let i = 1; i < n; i++) {
        const x = x0 + i * h;
        sum += (i % 2 === 0 ? 2 : 4) * func(x);
    }

    return (h / 3) * sum;
}

export function errorSimpson(x0: number, x1: number, n: number, func: (x: number) => number, error: number): number {
    let previousResult = 0;
    let currentResult = 0;

    while (currentResult === 0 || Math.abs(currentResult - previousResult) > error) {
        previousResult = currentResult || simpson(x0, x1, n, func);
        n *= 2;
        currentResult = simpson(x0, x1, n, func);
    }

    return parseFloat(currentResult.toFixed(3));
}



export function twoX(x: number): number {
    return 2 * x;
}

export function x2(x: number): number {
    return x * x;
}

export function oneOverX(x: number): number {
    return 1 / x;
}



// function gamma(x: number): number {
//     // Γ(x) = (x - 1)!
//     if (Number.isInteger(x)) {
//         let result = 1;
//         for (let i = 1; i < x; i++) {
//             result *= i;
//         }
//         return result;
//     }
//     else {
//         const pi = Math.PI;
//         if (x < 1) {
//             return Math.sqrt(pi / x) * Math.pow(x / Math.E, x);
//         }
//         return Math.sqrt(2 * pi / x) * Math.pow(x / Math.E, x);
//     }
// }

// function tDistribution(x: number, dof: number): number {
//     const gammaDofPlus1 = gamma((dof + 1) / 2);
//     const gammaDofOver2 = gamma(dof / 2);
//     const coefficient = gammaDofPlus1 / (gammaDofOver2 * Math.sqrt(dof * Math.PI));

//     const integral = simpson(0, x, 1000, t => 1 / Math.pow(1 + (t * t) / dof, (dof + 1) / 2));

//     // F(x)
//     return 0.5 + (coefficient * integral);
// }
