//Used in the bootloader html file
const hasPassedSetup = false;


if (hasPassedSetup === false) {
  setTimeout(function () {
    window.location.href = 'index.html';
  }, 10500);
} else {
  setTimeout(function () {
    window.location.href = 'workspace.html';
  }, 10500);
}
