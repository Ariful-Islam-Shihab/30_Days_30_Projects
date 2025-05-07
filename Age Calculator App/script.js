let userInput = document.getElementById('date');
document.getElementById('calculate').addEventListener('click', calculateAge);
userInput.max = new Date().toISOString().split('T')[0];
let result=document.getElementById('result')
function calculateAge() {
    let birthdate = new Date(userInput.value);
    let today = new Date();

    let birthDay = birthdate.getDate();
    let birthMonth = birthdate.getMonth();
    let birthYear = birthdate.getFullYear();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    if (ageDays < 0) {
        // Borrow days from previous month
        ageMonths--;
        let prevMonth = (currentMonth - 1 + 12) % 12;
        let prevMonthYear = (prevMonth === 11) ? currentYear - 1 : currentYear;
        ageDays += getDaysInMonth(prevMonthYear, prevMonth);
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    console.log(`Age: ${ageYears} years, ${ageMonths} months, ${ageDays} days`);
    result.innerHTML=`You are <span>${ageYears}</span> years,<span>${ageMonths}</span> months and <span>${ageDays}</span> days old.`
}

function getDaysInMonth(year, month) {
    // month is 0-indexed (0 = January, ..., 11 = December)
    return new Date(year, month + 1, 0).getDate();
}
