export const getDataFromLocalStorage = () => {
    const storedValues = localStorage.getItem('userData');
    if(!storedValues) return {
        name: 'User',
        totalPages: 500,
        pagesCompleted: 50,
        hoursForSleep: 7,
        freeHours: 9,
        dueDate: new Date(2023, 12, 3),
        productivityPeak: 'morning',
        weekendWork: 'on'
    };

    return JSON.parse(storedValues);
};