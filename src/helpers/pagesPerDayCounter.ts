export const countPagerPerDay = (pagesToWrite: number, daysLeft: number): number => {
    return Math.round(pagesToWrite / daysLeft);
};