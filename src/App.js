let dates = [];
let betweenDates = 0;

const getDatesBetweenDates = (startDate, endDate) => {

  //to avoid modifying the original date
  const theDate = new Date(startDate)
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)]
    theDate.setDate(theDate.getDate() + 1)
    betweenDates++
  }
  return console.log(dates, betweenDates);
}

const today = new Date()
const oneMonthFromNow = new Date(today)
oneMonthFromNow.setDate( oneMonthFromNow.getDate() + 31)
getDatesBetweenDates(today, oneMonthFromNow)

for (let i = 1; i <= betweenDates + 1; i++){
  let year = dates[i].getFullYear();
  let month = dates[i].getMonth() + 1;
  let day = dates[i].getDate();
  console.log( i + "は" + year + '年' + month + '月' + day + '日');
}

