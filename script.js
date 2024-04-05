const userInput = document.getElementById("date")
const result = document.getElementById("result")
const ageResult = document.getElementById("age")

const ageInMonth = document.getElementById("age-month")
const weekResult = document.getElementById("week-result")
const dayResult = document.getElementById("day-result")
const hourResult = document.getElementById("hour-result")
const minuteResult = document.getElementById("minute-result")
const secondResult = document.getElementById("second-result")

// Disible Future Date 
userInput.max = new Date().toISOString().split("T")[0];
function calculateAge() {
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;// month starts from the 0
    let y1 = birthDate.getFullYear();

    let today = new Date();//current date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;// month starts from the 0
    let y2 = today.getFullYear();

    let d3, m3, y3;// stores the difference in the year month day

    y3 = y2 - y1;
    if (m2 >= m1) { m3 = m2 - m1; }
    else { y3--; m3 = 12 + m2 - m1; }

    if (d2 >= d1) { d3 = d2 - d1; }
    else { m3--; d3 = getDaysInMonth(y1, m1) + d2 - d1 }

    if (m3 < 0) { m3 = 11; y3--; }

    // result.innerHTML = `You are ${y3}, ${m3} months and ${d3} days`
    age.innerHTML = `YOUR AGE: ${y3} YEARS, ${m3} MONTHS AND ${d3} DAYS`

    const ageInDays = getAgeInDays(birthDate, today);
    const ageInWeeks = getAgeInWeeks(birthDate, today);
    const ageInMonths = getAgeInMonths(birthDate, today);
    const ageInHours = getAgeInHours(birthDate, today);
    const ageInMinutes = getAgeInMinutes(birthDate, today);
    const ageInSeconds = getAgeInSeconds(birthDate, today);

}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();

}
function getAgeInDays(birthDate, today) {
    // Calculate the difference in milliseconds between the two dates
    let differenceInMilliseconds = today - birthDate;
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    let ageInDays = Math.floor(differenceInMilliseconds / millisecondsInOneDay);

    // Display the age in days
    dayResult.textContent = ageInDays;
}
function getAgeInWeeks(birthDate, today) {// Calculate the difference in milliseconds between the two dates
    let differenceInMilliseconds = today - birthDate;

    // Convert milliseconds to days
    const millisecondsInOneDay = 1000 * 60 * 60 * 24;
    let ageInDays = Math.floor(differenceInMilliseconds / millisecondsInOneDay);
    // Calculate the age in weeks
    let ageInWeeks = Math.floor(ageInDays / 7);

    // Display the age in weeks
    weekResult.textContent = ageInWeeks;
}
function getAgeInMonths(birthDate, today) {
    // Extract year and month components from birthDate
    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth();

    // Extract year and month components from today's date
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();

    // Calculate the age in months
    let ageInMonths = (currentYear - birthYear) * 12 + (currentMonth - birthMonth);

    // Display the age in months
    ageInMonth.textContent = ageInMonths;
}
function getAgeInHours(birthDate, today) {
    let differenceInMilliseconds = today - birthDate;

    // Convert milliseconds to hours
    const millisecondsInOneHour = 1000 * 60 * 60;
    let ageInHours = Math.floor(differenceInMilliseconds / millisecondsInOneHour);

    // Display the age in hours
    hourResult.textContent = ageInHours.toLocaleString();
}
function getAgeInMinutes(birthDate, today) {
    // Calculate the difference in milliseconds between the two dates
    let differenceInMilliseconds = today - birthDate;

    // Convert milliseconds to minutes
    const millisecondsInOneMinute = 1000 * 60;
    let ageInMinutes = Math.floor(differenceInMilliseconds / millisecondsInOneMinute);

    // Display the age in minutes
    minuteResult.textContent = ageInMinutes.toLocaleString();
}
function getAgeInSeconds(birthDate, today) {
    // Calculate the difference in milliseconds between the two dates
    let differenceInMilliseconds = today - birthDate;

    // Convert milliseconds to seconds
    const millisecondsInOneSecond = 1000;
    let ageInSeconds = Math.floor(differenceInMilliseconds / millisecondsInOneSecond);

    // Display the age in seconds
    secondResult.textContent = ageInSeconds.toLocaleString();
}