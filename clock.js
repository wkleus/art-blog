const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function pad(n) {
  return n < 10 ? "0" + n : String(n);
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  let ampm = "a.m.";

  if (h > 12) {
    h = h - 12;
    ampm = "p.m.";
  }

  hourEl.textContent = pad(h);
  minuteEl.textContent = pad(m);
  secondEl.textContent = pad(s);
  ampmEl.textContent = ampm;

  setTimeout(updateClock, 1000);
}

updateClock();
