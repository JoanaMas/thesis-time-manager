export const getCurrentDay = () => {
    const today = new Date();
    const year = String(today.getFullYear());
    let month = String(today.getMonth() + 1);
    let day = String(today.getDate());

    console.log(day);


    if (month.length < 2) {
        month = '0' + month;
      }
    
      if (day.length < 2) {
        day = '0' + day;
      }
    

    return `${year}-${month}-${day}`;
};