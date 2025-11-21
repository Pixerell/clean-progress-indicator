function ProgressBlock({
  container,
  indicator,
  progressInput,
  progressAnimate,
  progressHide,
}) {
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
      container.classList.add("progress-animated");
    } else {
      container.classList.remove("progress-animated");
    }
  });

  progressHide.addEventListener("change", () => {
    if (progressHide.checked) {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
}

// Я подумал что не прибитый к вёрстке, это значит не прибитый напрямую к id-шкам
// И вынесенный в подобие компоненты как из фреймворков, чтобы можно было переиспользовать
document.querySelectorAll(".progress-wrapper").forEach((wrapper) => {
  const progressInput = wrapper.querySelector(".progress-api-progressValue");
  const progressAnimate = wrapper.querySelector(".progress-api-animate");
  const progressHide = wrapper.querySelector(".progress-api-hide");
  const indicator = wrapper.querySelector(".progress-circle-indicator");
  const container = wrapper.querySelector(".progress-circle");

  ProgressBlock({
    container: container,
    indicator: indicator,
    progressInput: progressInput,
    progressAnimate: progressAnimate,
    progressHide: progressHide,
  });
});
