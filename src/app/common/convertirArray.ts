export function convertirArray(numeros: string): number[] {
    return numeros.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
}