// 🌙 Dark Mode Toggle
const toggleModeBtn = document.createElement("button");
toggleModeBtn.className = "toggle-mode";
toggleModeBtn.innerText = "Dark Mode";
document.body.appendChild(toggleModeBtn);

toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleModeBtn.innerText = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// 🔥 Scroll Animation for Journal Entries
const journalEntries = document.querySelectorAll(".journal-entry");

const showOnScroll = () => {
  journalEntries.forEach((entry) => {
    const entryTop = entry.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (entryTop < windowHeight - 50) {
      entry.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
showOnScroll();
