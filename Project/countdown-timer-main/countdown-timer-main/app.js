const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const dd = document.getElementById("dd");
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

const day_dot = document.querySelector(".day_dot");
const hr_dot = document.querySelector(".hr_dot");
const min_dot = document.querySelector(".min_dot");
const sec_dot = document.querySelector(".sec_dot");

const endDate = "05/19/2023 22:33:00";

//date format mm/dd/yyyy
const x = setInterval(function () {
  const now = new Date(endDate).getTime();
  const countDown = new Date().getTime();
  const distance = now - countDown;

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);

  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minute</span>";
  seconds.innerHTML = s + "<br><span>second</span>";

  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  day_dot.style.trnsform = `rotateZ(${d * 0.986}deg)`;
  hr_dot.style.trnsform = `rotateZ(${h * 15}deg)`;
  min_dot.style.trnsform = `rotateZ(${m * 6}deg)`;
  sec_dot.style.trnsform = `rotateZ(${s * 6}deg)`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").style.display = "none";
    document.querySelector(".newYear").style.display = "block";
  }
});
