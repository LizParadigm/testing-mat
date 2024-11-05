export function vacio(data: string | null | undefined): boolean {
    return !data || data.trim() === '';
}