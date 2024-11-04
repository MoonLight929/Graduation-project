// updateDateDisplay函数用于更新日期显示。
// generateCalendar函数根据当前日期生成日历，包括月份和年份以及日期的网格。
// showCalendar和hideCalendar函数用于显示和隐藏日历。
// updateCalendarNavigation函数为日历的导航按钮（上一个月和下一个月）添加事件监听器。
// init函数初始化日期显示、生成日历、设置事件监听器等。
const dateDisplay = document.getElementById('dateDisplay');
const dateDisplay2 = document.getElementById('dateDisplay2');
const calendar = document.getElementById('calendar');
const calendarDays = document.getElementById('calendarDays');
const calendarMonthYear = document.getElementById('calendarMonthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');


let currentDate = new Date();
let selectedDate = new Date(currentDate);

function updateDateDisplay() {
    dateDisplay.textContent = `${('0' + (selectedDate.getMonth() + 1)).slice(-2)}月${('0' + selectedDate.getDate()).slice(-2)}日`;
    dateDisplay2.textContent = `${('0' + (selectedDate.getMonth() + 1)).slice(-2)}月${('0' + selectedDate.getDate()).slice(-2)}日`;
}

function generateCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarMonthYear.textContent = `${year}年${('0' + (month + 1)).slice(-2)}月`;

    calendarDays.innerHTML = '';

    // Fill empty days before the first day of the month  
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.classList.add('calendar-day', 'empty');
        calendarDays.appendChild(emptyDay);
    }

    // Fill days of the month  
    for (let day = 1; day <= daysInMonth; day++) {
        const calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');
        calendarDay.textContent = day;
        calendarDay.dataset.date = `${year}-${('0' + (month + 1)).slice(-2)}-${('0' + day).slice(-2)}`;

        calendarDay.addEventListener('click', () => {
            selectedDate = new Date(calendarDay.dataset.date);
            updateDateDisplay();
            hideCalendar();
        });

        calendarDays.appendChild(calendarDay);
    }
}

function showCalendar() {
    calendar.style.display = 'block';
    const rect = dateDisplay.getBoundingClientRect();
    // calendar.style.left = `${rect.left}px`;
    // calendar.style.top = `${rect.bottom + window.scrollY}px`;
}

function hideCalendar() {
    calendar.style.display = 'none';
}

function updateCalendarNavigation() {
    prevMonthBtn.addEventListener('click', () => {
        const currentDate = new Date(selectedDate);
        currentDate.setMonth(currentDate.getMonth() - 1);
        generateCalendar(currentDate);
    });

    nextMonthBtn.addEventListener('click', () => {
        const currentDate = new Date(selectedDate);
        currentDate.setMonth(currentDate.getMonth() + 1);
        generateCalendar(currentDate);
    });
}

function init() {
    updateDateDisplay();
    generateCalendar(currentDate);
    updateCalendarNavigation();

    dateDisplay.addEventListener('click', showCalendar);
    calendar.addEventListener('mouseleave', hideCalendar);
}

init();

// 酒店推荐
// tab选项卡
const roomBtn = document.getElementById('roomBtn').getElementsByTagName('button');
const roomContent = document.getElementById('roomContent').getElementsByTagName('div');
for(let x=0;x<roomBtn.length;x++){
    roomBtn[x].onclick=function(){
        for(let y=0;y<roomBtn.length;y++){
            roomContent[y].style.display="none";
        }
        roomContent[x].style.display="block";
    }
}