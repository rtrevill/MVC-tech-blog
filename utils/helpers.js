// 2 functions to be globally available to reformat dates and times

module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getDate()}/${new Date(date).getMonth()+1}/${
      new Date(date).getFullYear()}`;
  },
};
