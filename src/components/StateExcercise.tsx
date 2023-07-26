import React from "react";
import { useState } from "react";

//const [game, setGame] = useState({
//  id: 1,
//  player: {
//    name: "Teo",
//  },
//});

//const handleClick = () => {
//  setGame({ ...game, player: { ...game.player, name: "Juana" } });
//};

//  const [pizza, setPizza] = useState({
//    name: "Napolitana",
//    toppings: ["Tomate", "Queso", "ajo"],
//  });

//  const handleClick = () => {
//    setPizza({ ...pizza, toppings: [...pizza.toppings, "Sal y Salsa"] });
//  };

const StateExcercise = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });

    return (
      <div>
        <h1>Hola</h1>
      </div>
    );
  };
};

export default StateExcercise;
