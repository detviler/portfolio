(function () {
  const toggle = document.getElementById("themeToggle");
  const root = document.documentElement;
  const STORAGE_KEY = "theme";

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.textContent = theme === "dark" ? "\u2600" : "\u263E";
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Determine initial theme: saved preference > OS preference > light
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  toggle.addEventListener("click", function () {
    const current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
