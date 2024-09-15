import Store from "./services/Store.js";
import Menu from "./services/Menu.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  console.log("here");
  await Menu.load();

  app.router.init();
});
