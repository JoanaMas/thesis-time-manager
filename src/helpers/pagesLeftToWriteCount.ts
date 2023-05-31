export const pagesToWrite = (totalPages: number, pagesWritten: number): number => {
    return totalPages - pagesWritten;
};