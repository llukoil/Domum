document.addEventListener('DOMContentLoaded', calendarSize);
window.addEventListener('resize', calendarSize);
document.addEventListener('DOMContentLoaded', fillCalendar);

let calendar = document.getElementById('calendar');

const JUNE = [
	[0, 0, 0, 0, 0, 1, 2],
	[3, 4, 5, 6, 7, 8, 9],
	[10, 11, 12, 13, 14, 15, 16],
	[17, 18, 19, 20, 21, 22, 23],
	[24, 25, 26, 27, 28, 29, 30],
	[0, 0, 0, 0, 0, 0, 0]
];
const JULY = [
	[1, 2, 3, 4, 5, 6, 7],
	[8, 9, 10, 11, 12, 13, 14],
	[15, 16, 17, 18, 19, 20, 21],
	[22, 23, 24, 25, 26, 27, 28],
	[29, 30, 31, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0]
];
const AUGUST = [
	[0, 0, 0, 1, 2, 3, 4],
	[5, 6, 7, 8, 9, 10, 11],
	[12, 13, 14, 15, 16, 17, 18],
	[19, 20, 21, 22, 23, 24, 25],
	[26, 27, 28, 29, 30, 31, 0],
	[0, 0, 0, 0, 0, 0, 0]
];
const SEPTEMBER = [
	[0, 0, 0, 0, 0, 0, 1],
	[2, 3, 4, 5, 6, 7, 8],
	[9, 10, 11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20, 21, 22],
	[23, 24, 25, 26, 27, 28, 29],
	[30, 0, 0, 0, 0, 0, 0]
];
const OCTOBER = [
	[0, 1, 2, 3, 4, 5, 6],
	[7, 8, 9, 10, 11, 12, 13],
	[14, 15, 16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25, 26, 27],
	[28, 29, 30, 31, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0]
];
const NOVEMBER = [
	[0, 0, 0, 0, 1, 2, 3],
	[4, 5, 6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15, 16, 17],
	[18, 19, 20, 21, 22, 23, 24],
	[25, 26, 27, 28, 29, 30, 0],
	[0, 0, 0, 0, 0, 0, 0]
];
const DECEMBER = [
	[0, 0, 0, 0, 0, 0, 1],
	[2, 3, 4, 5, 6, 7, 8],
	[9, 10, 11, 12, 13, 14, 15],
	[16, 17, 18, 19, 20, 21, 22],
	[23, 24, 25, 26, 27, 28, 29],
	[30, 31, 0, 0, 0, 0, 0]
];

const MONTHS = [JUNE, JULY, AUGUST, SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER];
const MONTHS_NAME = ['Червень 2019', 'Липень 2019', 'Серпень 2019', 'Вересень 2019', 'Жовтень 2019', 'Листопад 2019', 'Грудень 2019']
const MAX_DAY = [30, 31, 31, 30, 31, 30, 31];
let month = 0;

let isArrive = true;
let term = 0;

let arrive = {
	month: '',
	day: ''
};

let leave = {
	month: '',
	day: ''
};

function calendarSize()
{
	let width = calendar.offsetWidth;
	let height = width * 0.75;
	calendar.style.height = `${height}px`;
	let last_row = 1;

	if (MONTHS[month][5][0] == 0)
		last_row = 0;

	calendar.style.gridTemplateRows = `repeat(${MONTHS[month].length + last_row}, 1fr)`;
	calendar.style.fontSize = `${((calendar.offsetHeight - 8) / (MONTHS[month].length + last_row) / 3)}px`;
}

function fillCalendar()
{
	calendarSize();
	let count = 0;
	let days = document.querySelectorAll('.calendar-cell');
	let curr_month = document.getElementById('curr_month');
	curr_month.innerHTML = MONTHS_NAME[month];

	for (let i = 0; i < 6; i++)
	{
		for (let k = 0; k < 7; k++)
		{
			let item = MONTHS[month][i][k];
			days[count].innerHTML = '';
			days[count].style.backgroundColor = 'white';
			if (item != 0)
			{
				days[count].innerHTML = `<br>${item}`;
				if (month == arrive.month && item == arrive.day)
				{
					days[count].style.backgroundColor = 'green';
				}
				else if (isArrive && item > arrive.day && item < leave.day && month == leave.month)
				{
					days[count].style.backgroundColor = 'yellow';
				}
				else if (isArrive && item > arrive.day && item <= 31 && month == arrive.month && month < leave.month)
				{
					days[count].style.backgroundColor = 'yellow';
				}
				else if (isArrive && item < leave.day && month > arrive.month && month == leave.month)
				{
					days[count].style.backgroundColor = 'yellow';
				}
				else if (isArrive && month > arrive.month && month < leave.month)
				{
					days[count].style.backgroundColor = 'yellow';
				}
				else if (isArrive && item == leave.day && month == leave.month)
				{
					days[count].style.backgroundColor = 'red';
				}
				else
				{
					days[count].style.backgroundColor = 'white';
				}
			}
			count++;
		}
	}
}

function selectDate(event)
{
	let day = +event.currentTarget.innerHTML.match(/\d+/)[0];
	if (day < 1 || day > 31)
		return;

	if (isArrive)
	{
		leave.month = '';
		leave.day = '';
		arrive.month = month;
		arrive.day = day;
		term = 1;
		isArrive = false;
	}
	else if ((month < arrive.month) || (month == arrive.month && day < arrive.day))
	{
		leave.month = arrive.month;
		leave.day = arrive.day;
		arrive.month = month;
		arrive.day = day;
		dateDiff(arrive.month, arrive.day, leave.month, leave.day);
		isArrive = true;		
	}
	else
	{
		leave.month = month;
		leave.day = day;
		dateDiff(arrive.month, arrive.day, leave.month, leave.day);
		isArrive = true;
	}
	fillCalendar();
	document.getElementById('total_price').innerHTML = +document.getElementById('price').innerHTML * term;
}

function dateDiff(arrive_month, arrive_day, leave_month, leave_day)
{
	if (arrive_month == leave_month)
		term = leave_day - arrive_day + 1;

	else
	{
		term = 0;
		while (arrive_month < leave_month)
		{
			if (arrive_day > MAX_DAY[arrive_month])
			{
				arrive_day = 1;
				arrive_month++;
			}
			else
			{
				term++;
				arrive_day++
			}
		}
		term += leave_day;
	}
}

document.getElementById('prev_month').addEventListener('click', function() {
	if (month <= 0)
		return;
	
	month--;
	fillCalendar();
});

document.getElementById('next_month').addEventListener('click', function() {
	if (month >= MONTHS.length - 1)
		return;
	
	month++;
	fillCalendar();
});

document.querySelectorAll('.calendar-cell').forEach(function(element) {element.addEventListener('click', selectDate)});