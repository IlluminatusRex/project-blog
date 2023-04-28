export const dateToStr = function(date){
    return date.toISOString().slice(0, 10);
  };