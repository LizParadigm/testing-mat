export function factorial(x: number): number {
    // Si x es negativo o mayor que 15, retornamos 0
    if (x < 0 || x > 15) {
        return 0;
    }

    // Si x es 0, el factorial es 1
    if (x === 0) {
        return 1;
    }

    // Cálculo del factorial
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }

    return result;
}
