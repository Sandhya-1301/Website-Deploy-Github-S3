function showMessage() {
  alert("Hello, Thulasiram! Your site is running smoothly.");
}

// 🕒 Display current time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); // e.g., "8:24:01 AM"
  document.getElementById('current-time').textContent = timeString;
}

// 📅 Display current date
function updateDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById("update-date").textContent = formatted;
}

// setInterval(updateTime, 1000); // Refresh time every second
updateTime(); // Initial time
updateDate(); // Set date on load