export function calculateMean(numbers: number[]): number {
    const total = numbers.reduce((sum, value) => sum + value, 0);
    return total / numbers.length;
}
