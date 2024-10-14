export function calculateStdDev(numbers: number[]): number {
    const mean = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
    const squaredDiffs = numbers.map(value => Math.pow(value - mean, 2));
    const avgSquaredDiff = squaredDiffs.reduce((sum, value) => sum + value, 0) / (numbers.length - 1);
    return Math.sqrt(avgSquaredDiff);
}
