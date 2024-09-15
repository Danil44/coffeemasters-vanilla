const Router = {
  init: function () {
    document.querySelectorAll("a.navlink").forEach((link) =>
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const path = event.target.getAttribute("href");

        this.go(path);
      }),
    );

    window.addEventListener("popstate", (event) => {
      if (event.state) {
        this.go(event.state.route, false);
      }
    });

    this.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let page = document.createElement("h1");

    switch (route) {
      case "/":
        page.textContent = "This is a Home page";
        break;

      case "/order":
        page.textContent = "Order list";
        break;

      default:
        page.textContent = "404, Page not found";
        break;
    }

    const container = document.querySelector("main");

    container.innerHTML = "";
    container.insertAdjacentElement("afterbegin", page);

    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
