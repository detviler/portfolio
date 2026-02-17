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

  // Intersection Observer for staggered reveals
  var reveals = document.querySelectorAll(".reveal");
  reveals.forEach(function (el) {
    el.style.animationPlayState = "paused";
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(function (el) { observer.observe(el); });

  // Duplicate marquee content for seamless loop
  var track = document.querySelector(".marquee-track");
  if (track) {
    track.innerHTML += track.innerHTML;
  }
})();
