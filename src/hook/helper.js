export function getDayAfterCurrentMonth(dayOfWeek) {
    let countDaysAfter = 0;
      switch(dayOfWeek) {
        case 'Sunday' : 
          countDaysAfter =  6;
          break;
        case 'Monday' : 
          countDaysAfter =  5;
          break;
        case 'Tuesday' : 
          countDaysAfter =  4;
          break;
        case 'Wednesday' : 
          countDaysAfter =  3;
          break;
        case 'Thursday' : 
          countDaysAfter =  2;
          break;
        case 'Friday' : 
          countDaysAfter =  1;
          break;
        case 'Satursday' : 
          countDaysAfter =  0;
          break;
        default: 
          break;
    }
    return countDaysAfter;
  }
   
export function getDayBeforeCurrentMonth(dayOfWeek) {
  let countDaysBefore = 0;
    switch(dayOfWeek) {
      case 'Sunday' : 
        countDaysBefore =  0;
        break;
      case 'Monday' : 
        countDaysBefore =  1;
        break;
      case 'Tuesday' : 
        countDaysBefore =  2;
        break;
      case 'Wednesday' : 
        countDaysBefore =  3;
        break;
      case 'Thursday' : 
        countDaysBefore =  4;
        break;
      case 'Friday' : 
        countDaysBefore =  5;
        break;
      case 'Satursday' : 
        countDaysBefore =  6;
        break;
      default: 
        break;
    }
    return countDaysBefore;
  }

export const lastDate = (new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0));
export const firstDate = (new Date(new Date().getFullYear(), new Date().getMonth(), 1));