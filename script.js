(function () {
  var toggle = document.getElementById("themeToggle");
  var root = document.documentElement;
  var STORAGE_KEY = "theme";

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    setTheme(saved);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }

  toggle.addEventListener("click", function () {
    var current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
})();
