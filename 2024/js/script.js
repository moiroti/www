window.onload = () => {
  const navbarBurger = document.getElementById("navbar-burger");

  navbarBurger.addEventListener("click", () => {
    const navbar = document.getElementById(navbarBurger.dataset.target);

    navbarBurger.classList.toggle("is-active");
    navbar.classList.toggle("is-active");
  });
};
