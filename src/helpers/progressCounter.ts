export const countWrittenPageProgress = (totalPages: number, writtenPages: number): number => {
    const pagesRatio = writtenPages / totalPages;
    const progressCompleted = Math.round(pagesRatio * 100);    
    return progressCompleted;
};