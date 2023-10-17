window.onload = () => {
  const navbarBurger = document.getElementById("navbar-burger");

  navbarBurger.addEventListener("click", () => {
    const navbar = document.getElementById(navbarBurger.dataset.target);

    navbarBurger.classList.toggle("is-active");
    navbar.classList.toggle("is-active");
  });

  const burgerStyle = getComputedStyle(navbarBurger);

  if (burgerStyle.display != "none") {
    const dropdown = document.querySelector(".navbar-dropdown");

    if (!dropdown) {
      return;
    }

    dropdown.classList.add("is-hidden");
    const dropdownLink = dropdown.parentElement.querySelector(".navbar-link");

    if (!dropdownLink) {
      return;
    }

    dropdownLink.addEventListener("click", () => {
      dropdown.classList.toggle("is-hidden");
    });
  }
};
