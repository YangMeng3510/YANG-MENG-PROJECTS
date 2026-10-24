// Scale the 1920px Illustrator reference grid proportionally on desktop.
// Every title, paragraph, caption and image remains an ordinary DOM element.
const shell = document.getElementById('stage-shell');
const stage = document.getElementById('design-stage');
const mobile = window.matchMedia('(max-width: 960px)');
function resizeStage() {
  if (mobile.matches) {
    stage.style.transform = '';
    shell.style.height = '';
    return;
  }
  const scale = Math.min(shell.clientWidth / 1920, 1);
  stage.style.transform = `scale(${scale})`;
  shell.style.height = `${Math.ceil(1100 * scale)}px`;
}
new ResizeObserver(resizeStage).observe(shell);
mobile.addEventListener('change', resizeStage);
resizeStage();
