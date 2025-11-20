const progressInput = document.getElementById("progressValue");

progressInput.addEventListener("input", () => {
  let val = parseInt(progressInput.value, 10);
  if (isNaN(val)) {
    val = 0;
  }
  val = Math.max(0, Math.min(100, val));
  progressInput.value = val;
});
