function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let nameInput = document.getElementById("name");

  // If the user has left a recommendation, display a pop-up
  if (
    recommendation &&
    recommendation.value != null &&
    recommendation.value.trim() !== ""
  ) {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");

    var messageText = recommendation.value.trim();
    element.innerHTML =
      '<div class="recommendation_content">' +
      '<span class="quote_mark quote_start" aria-hidden="true">&#8220;</span> ' +
      messageText +
      ' <span class="quote_mark quote_end" aria-hidden="true">&#8221;</span>' +
      "</div>";

    if (nameInput && nameInput.value && nameInput.value.trim() !== "") {
      var authorTag = document.createElement("div");
      authorTag.className = "recommendation_author";
      authorTag.innerText = "— " + nameInput.value.trim();
      element.appendChild(authorTag);
    }

    // Add this element to the end of the list of recommendations
    var container = document.getElementById("all_recommendations");
    if (container) {
      container.appendChild(element);
    }

    // Call showPopup to confirm
    showPopup(true);

    // Reset the value of the input fields
    recommendation.value = "";
    if (nameInput) {
      nameInput.value = "";
    }
  }
}

function showPopup(bool) {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("popup_overlay");
  if (popup) {
    if (bool) {
      popup.style.visibility = "visible";
      popup.classList.add("show");
      if (overlay) {
        overlay.style.visibility = "visible";
        overlay.classList.add("show");
      }
      var closeBtn =
        popup.querySelector(".popup_close_btn") ||
        popup.querySelector("button");
      if (closeBtn) closeBtn.focus();
    } else {
      popup.classList.remove("show");
      if (overlay) overlay.classList.remove("show");
      setTimeout(function () {
        if (!popup.classList.contains("show")) {
          popup.style.visibility = "hidden";
          if (overlay) overlay.style.visibility = "hidden";
        }
      }, 300);
    }
  }
}

function closePopup() {
  showPopup(false);
}

// Support closing pop-up with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    showPopup(false);
  }
});

// Scroll to top button functionality
function initScrollTop() {
  const scrollBtn = document.getElementById("scroll_top_btn");
  if (!scrollBtn) return;

  function toggleScrollBtn() {
    if (window.scrollY > 280) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", toggleScrollBtn, { passive: true });
  toggleScrollBtn();

  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Navigation menu toggle with accessibility support
function initNavToggle() {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("primary-nav");

  if (!menuBtn || !navMenu) return;

  function toggleMenu(isOpen) {
    const shouldOpen =
      typeof isOpen === "boolean"
        ? isOpen
        : !navMenu.classList.contains("active");

    navMenu.classList.toggle("active", shouldOpen);
    menuBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    menuBtn.setAttribute(
      "aria-label",
      shouldOpen ? "Close navigation menu" : "Open navigation menu",
    );

    const icon = menuBtn.querySelector("i");
    if (icon) {
      if (shouldOpen) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
  }

  // Toggle button click
  menuBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Close menu when selecting any nav link
  const navLinks = navMenu.querySelectorAll(".topmenu");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMenu(false);
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      navMenu.classList.contains("active") &&
      !navMenu.contains(e.target) &&
      !menuBtn.contains(e.target)
    ) {
      toggleMenu(false);
    }
  });

  // Close menu on Escape key and return focus to toggle button
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu(false);
      menuBtn.focus();
    }
  });

  // Prevent transition animation during window resize and reset desktop state
  let resizeTimer;
  window.addEventListener("resize", function () {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.body.classList.remove("resize-animation-stopper");
    }, 200);

    // Reset menu state when viewport is resized above mobile breakpoint
    if (window.innerWidth >= 768 && navMenu.classList.contains("active")) {
      toggleMenu(false);
    }
  });
}

// Initialize interactivity on DOM load
function initApp() {
  initNavToggle();
  initScrollTop();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
