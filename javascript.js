// Digital Clock

function updateclock() {
  let date = new Date();

  let hrs = date.getHours();

  const ampm = hrs >= 12 ? "AM" : "PM";
  hrs = hrs % 12;
  hrs = hrs === 0 ? 12 : hrs;
  hrs = hrs.toString().padStart(2, 0);

  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);
  const timestring = `${hrs}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("clock").textContent = timestring;
}

updateclock();

setInterval(updateclock, 1000);
