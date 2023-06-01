export const getDaysCount = (date : Date): number => {
    const today = new Date();
    const dueDate = new Date(date);
    const timeDiff = dueDate.getTime() - today.getTime();
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return days;
  };