const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const today = $('[data-testid="currentDayOfTheWeek"]')
const currentTime = $('[data-testid="currentUTCTime"]')

const daysNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];



  window.addEventListener("DOMContentLoaded", ()=>{
      const date = new Date();
      today.innerHTML = daysNames[date.getDay()];
      currentTime.innerHTML = date.getTime();
  })


