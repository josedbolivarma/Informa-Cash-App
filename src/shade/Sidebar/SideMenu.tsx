export const MENUITEMS = [
  {
    menutitle: "Menu",
    Items: [
      {
        title: "Gastos",
        icon: (
          <svg className="side-menu__icon"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm64 320l-64 0 0-64c35.3 0 64 28.7 64 64zM64 192l0-64 64 0c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64l0 64-64 0zm64-192c-35.3 0-64-28.7-64-64l64 0 0 64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/agregargasto`,
            type: "link",
            selected: false,
            active: false,
            title: "AGREGAR GASTO",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gastos`,
            type: "link",
            selected: false,
            active: false,
            title: "LISTA DE GASTOS",
          },
        ],
      },
    ],
  },
  {
    menutitle: "Páginas",
    Items: [
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"><path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path></svg>
        ),
        type: "sub",
        selected: false,
        active: false,
        title: "Configuración",
        children: [
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="side-menu__icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"><path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path></svg>
            ),
            type: "sub",
            selected: false,
            active: false,
            title: "GASTOS",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/app/agregarcategoria`,
                type: "link",
                selected: false,
                active: false,
                title: "AGREGAR GATEGORIA",
              },
              {
                path: `${process.env.PUBLIC_URL}/app/listacategorias`,
                type: "link",
                selected: false,
                active: false,
                title: "LISTA CATEGORIAS",
              },
            ],
          },
        ],
      },
    ]
  },
];
