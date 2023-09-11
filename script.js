// Get the current UTC time in milliseconds
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const currentUTCTime = new Date().getTime();
currentUTCTimeElement.textContent = currentUTCTime;
