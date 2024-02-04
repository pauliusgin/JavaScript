const recipes = [
  {
    id: "chicken__salad",
    title: "Vištiena su salotom",
    imageSrc: "./styles/assets/images/salad.jpeg",
    imageId: "chicken__salad_image",
    ingredients: [
      {
        id: "chicken__salad_chicken",
        name: "Vištiena",
        units: "g",
        amount: 150,
      },
      {
        id: "chicken__salad_salad",
        name: "Salotos",
        units: "g",
        amount: 100,
      },
      {
        id: "chicken__salad_feta",
        name: "Fetos sūris",
        units: "g",
        amount: 50,
      },
      {
        id: "chicken__salad_tomato",
        name: "Pomidorai",
        units: "vnt.",
        amount: 1,
      },
      {
        id: "chicken__salad_oliveoil",
        name: "Alyvuogių al.",
        units: "šaukšt.",
        amount: 1,
      },
    ],
  },

  {
    id: "blueberry__cake",
    title: "Tortas su mėlynėm",
    imageSrc: "./styles/assets/images/cake.jpeg",
    imageId: "blueberry__cake_image",
    ingredients: [
      {
        id: "blueberry__cake_flour",
        name: "Miltai",
        units: "g",
        amount: "250",
      },
      {
        id: "blueberry__cake_eggs",
        name: "Kiaušiniai",
        units: "vnt.",
        amount: 1,
      },
      {
        id: "blueberry__cake_blueberries",
        name: "Mėlynės",
        units: "g",
        amount: 50,
      },
      {
        id: "blueberry__cake_sugar",
        name: "Cukrus",
        units: "šaukšt.",
        amount: 1,
      },
    ],
  },
  {
    id: "beef__noodles",
    title: "Makaronai su mėsa",
    imageSrc: "./styles/assets/images/noodles.jpeg",
    imageId: "beef__noodles_image",
    ingredients: [
      {
        id: "beef__noodles_noodles",
        name: "Makaronai",
        units: "g",
        amount: 120,
      },
      {
        id: "beef__noodles_beef",
        name: "Jautiena",
        units: "g",
        amount: 100,
      },
      {
        id: "beef__noodles_soy",
        name: "Soja",
        units: "g",
        amount: "40",
      },
      {
        id: "beef__noodles_ginger",
        name: "Imbieras",
        units: "šaukšt.",
        amount: 0.5,
      },
      {
        id: "beef__noodles_variousVegetables",
        name: "Įvairios daržovės",
        units: "g",
        amount: 100,
      },
    ],
  },
];

export { recipes };
