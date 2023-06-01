export const countProductiveTime = (sleepTime: number, freeTime: number): number => {
    return 24 - (sleepTime + freeTime);
};