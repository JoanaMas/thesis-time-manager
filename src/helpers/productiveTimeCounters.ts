export const countProductiveTime = (sleepTime: number, freeTime: number): number => {
    const nonProductiveHours = sleepTime + freeTime;
    const totalHours = 24;
    return totalHours - nonProductiveHours;
};