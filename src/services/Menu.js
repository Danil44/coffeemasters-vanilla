import API from "./API.js";

async function load() {
  const data = await API.fetchMenu();

  app.store.setMenu(data);
}

const Menu = {
  load,
};

export default Menu;
