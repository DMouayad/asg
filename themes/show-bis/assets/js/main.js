const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.classList.contains("is-inViewport")) {
      if (entry.target.classList.contains("repeat-animation")) {
        entry.target.classList.remove("is-inViewport");
      }
      return;
    }
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
// Attach observer to every [data-inviewport] element:
document.querySelectorAll('[animate-data]').forEach(el => {
  Obs.observe(el, obsOptions);
});
/**
 * @returns {Object}
 */
function defaultFadeConfig() {
  return {
    easing: "linear",
    iterations: 1,
    direction: "normal",
    fill: "forwards",
    delay: 0,
    endDelay: 0,
  };
}

/**
 * @param {HTMLElement} el
 * @param {number} durationInMs
 * @param {Object} config
 * @returns {Promise}
 */
async function fadeOut(el, durationInMs, config = defaultFadeConfig()) {
  return new Promise((resolve, reject) => {
    const animation = el.animate(
      [
        { opacity: "1" },
        { opacity: "0", offset: 0.5 },
        { opacity: "0", offset: 1 },
      ],
      { duration: durationInMs, ...config }
    );
    animation.onfinish = () => {
      el.remove();
      return resolve();
    };
  });
}
const nav = document.getElementById("navigation");
const navbarCollapse = document.getElementById("navbarNav");
const navServicesDropdown = document.getElementById("nav-dropdown");

navbarCollapse.addEventListener("show.bs.collapse", function () {
  nav.classList.remove("transl");
});

navbarCollapse.addEventListener("hide.bs.collapse", function () {
  if (window.scrollY < 100) {
    nav.classList.add("transl");
  }
});
navServicesDropdown.addEventListener("mouseleave", (event) => {
  if (event.clientY > 120) {
    navServicesDropdown.classList.toggle("dropdown-closed");
    nav.style.overflow = "hidden";
  }
});
document.getElementById("nav-dropdown-btn").addEventListener("mouseenter", () => {
  navServicesDropdown.classList.remove("dropdown-closed");
  nav.style.overflow = "visible";
});
document.getElementById("nav-dropdown-btn").addEventListener("click", () => {
  navServicesDropdown.classList.toggle("dropdown-closed");
});
window.addEventListener("DOMContentLoaded", async function () {
  document.getElementById("animateCSS-link").rel = 'stylesheet';
  if (document.getElementById("nonCriticalCSS-link")) {
    document.getElementById("nonCriticalCSS-link").rel = 'stylesheet';
  }
  if (isNavbarTransparent()) {
    document.getElementById("navigation").classList.add("transl");

  }
  await fadeOut(preloader, 800);
});
function isNavbarTransparent() {
  const isHome = ["/", "/ar/", "/contact-us/", "/ar/contact-us/", "/about-us/", "/ar/about-us/"].includes(document.location.pathname);
  return isHome;
}
window.addEventListener("scroll", function () {
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }

  navServicesDropdown.classList.add("dropdown-closed");
  nav.style.overflow = "hidden";

  if (isNavbarTransparent() && window.scrollY < 100) {
    document.getElementById("navigation").classList.add("transl");
  }
  else {
    document.getElementById("navigation").classList.remove("transl");
  }
});

const expandImagesBtn = document.getElementById("expand-imgs-btn");
const collapseImagesBtn = document.getElementById("collapse-imgs-btn");
const extraImages = document.querySelectorAll("#hidden-project-imgs");
const entranceAnimation = ["animate__animated", "animate__zoomIn"];
const exitAnimation = ["animate__animated", "animate__zoomOut"];
if (expandImagesBtn) {
  expandImagesBtn.addEventListener("click", () => {
    extraImages.forEach(element => {
      element.classList.add(...entranceAnimation);
      element.removeAttribute("hidden");
    });
    expandImagesBtn.setAttribute("hidden", "");
    collapseImagesBtn.removeAttribute("hidden");
  });
}
if (collapseImagesBtn) {
  collapseImagesBtn.addEventListener("click", async () => {
    extraImages.forEach(async element => {
      element.classList.remove(...entranceAnimation);
      element.classList.add(...exitAnimation);
      await new Promise(r => setTimeout(r, 450));
      element.setAttribute("hidden", "");
      element.classList.remove(...exitAnimation);
    });
    document.getElementById("project-imgs-sec").scrollIntoView();

    await new Promise(r => setTimeout(r, 450));
    expandImagesBtn.removeAttribute("hidden");
    collapseImagesBtn.setAttribute("hidden", "");
  });
}



// lazy loading background images
const initialiseStyleBackgroundIntersectionObserver = () => {
  const lazyBackgrounds = Array.from(document.querySelectorAll('[data-background-image]'));

  if (lazyBackgrounds.length === 0) {
    return;
  }

  let lazyBackgroundObserver;

  const loadBackgroundIfElementOnScreen = (entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
      lazyBackgroundObserver.unobserve(entry.target);
    }
  };

  const observeElementVisibility = (lazyBackground) => {
    lazyBackgroundObserver.observe(lazyBackground);
  };

  const setBackground = (element) => {
    element.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
  };

  if (typeof window.IntersectionObserver === 'function') {
    lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach(loadBackgroundIfElementOnScreen);
    });
    lazyBackgrounds.forEach(observeElementVisibility);
  } else {
    lazyBackgrounds.forEach(setBackground);
  }
};

if (typeof document.readyState === 'string' && document.readyState === 'complete') {
  initialiseStyleBackgroundIntersectionObserver();
} else {
  document.addEventListener('DOMContentLoaded', initialiseStyleBackgroundIntersectionObserver, true);
}