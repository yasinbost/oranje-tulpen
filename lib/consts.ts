const menu_items = [
    {
      name: "Home",
      link: "/",
      hasSubMenu: false,
    },
    {
      name: "Wat is Ebru?",
      link: "/watisEbru",
      hasSubMenu: false,
    },
    {
      name: "Workshops",
      link: "#",
      hasSubMenu: true,
      submenu: [
        { title: "Boekbinding", link: "/workshop1" },
        { title: "Sjaal Marmering", link: "/workshop2" },
        { title: "Akkase Marmering", link: "/workshop3" },
      ],
    },
    {
      name: "Shop",
      link: "/shop",
      hasSubMenu: false,
    },
  ];

  export default menu_items;