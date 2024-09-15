const API = {
  url: "/data/menu.json",

  fetchMenu: async function () {
    const data = await fetch(this.url);

    return data.json();
  },
};

export default API;
