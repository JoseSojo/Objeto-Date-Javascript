const clock = document.getElementById('clock');
const actuHora = ()=>{
	const time = new Date();
	let hr = inserCero(time.getHours());
	let mn = inserCero(time.getMinutes());
	let sg = inserCero(time.getSeconds());

	clock.textContent = `${hr}:${mn}:${sg}` 
}
const inserCero = (date) => {
	if(date.toString().length < 2) return "0" + date;
	return date;
}

const styleDay = (id)=>{
	document.getElementById(id).classList.add('day-style');
}

let day = new Date().getDay();
console.log(day);
if (day == 0) styleDay('day-0')
else if (day == 1) styleDay('day-1')
else if (day == 2) styleDay('day-2')
else if (day == 3) styleDay('day-3')
else if (day == 4) styleDay('day-4')
else if (day == 5) styleDay('day-5')
else if (day == 6) styleDay('day-6')


const timeDate = ()=>{
	const time = new Date();
	let d = inserCero(time.getDay()+10);
	let m = inserCero(time.getMonth()+1);
	let y = inserCero(time.getYear()+1900);



	document.getElementById('date').textContent = `${d} / ${m} / ${y}` 
}
actuHora();
setInterval(()=>{
	actuHora();
	clock.style.animation = 'textAnimate .7s ease infinite alternate';
},1000)
timeDate();