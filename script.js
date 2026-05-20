const themeToggle = document.getElementById("theme-toggle");

// Теми
function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.contains("dark-theme")
      ? setTheme("light")
      : setTheme("dark");
  });
}

// Слайдер Фото
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function changeSlide(direction) {
  if (slides.length === 0) return;
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

// --- СЛАЙДЕР СЕМЕСТРІВ ---
let currentSemester = 0;
const semesters = document.querySelectorAll(".semester-card");
function changeSemester(direction) {
  if (semesters.length === 0) return;
  semesters[currentSemester].classList.remove("active");
  currentSemester =
    (currentSemester + direction + semesters.length) % semesters.length;
  semesters[currentSemester].classList.add("active");
}
