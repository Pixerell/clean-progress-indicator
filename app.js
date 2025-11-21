const progressInput = document.getElementById("progressValue");
const progressAnimate = document.getElementById("progressAnimate");
const progressHide = document.getElementById("progressHide");
const indicator = document.getElementById("progressIndicator");
const container = document.getElementById("progressContainer");

const ratio = Number(indicator.getAttribute("r")) || 45;
const circumference = 2 * Math.PI * ratio;

indicator.style.strokeDasharray = `${circumference} ${circumference}`;

function setValueToIndicator(value) {
  const offset = circumference - (value / 100) * circumference;
  indicator.style.strokeDashoffset = offset;
  container.setAttribute("aria-valuenow", value);
}

progressInput.addEventListener("input", () => {
  let val = parseInt(progressInput.value, 10);
  if (isNaN(val)) {
    val = 0;
  }
  val = Math.max(0, Math.min(100, val));
  progressInput.value = val;
  setValueToIndicator(val);
});

progressAnimate.addEventListener("change", () => {
  if (progressAnimate.checked) {
    container.style.animation = "rotateAnimation 2s linear infinite";
  } else {
    container.style.animation = "none";
  }
});

progressHide.addEventListener("change", () => {
  if (progressHide.checked) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
});
