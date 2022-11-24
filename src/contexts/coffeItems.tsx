import { createContext, useState } from "react";
import coffeHavaiano from "../assets/cofees/coffe-havaiano.png";
import americano from "../assets/cofees/americano.png";
import cremoso from "../assets/cofees/cremoso.png";
import gelado from "../assets/cofees/gelado.png";
import cafeComLeite from "../assets/cofees/cafe-com-leite.png";
import latte from "../assets/cofees/latte.png";
import capuccino from "../assets/cofees/capuccino.png";
import macchiato from "../assets/cofees/machiato.png";
import mocaccino from "../assets/cofees/moccacino.png";
import chocolateQuente from "../assets/cofees/chocolate-quente.png";

const cofeeData = [
  {
    id: 1,
    image: `${coffeHavaiano}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Expresso Tradicional",
    descriptionCoffe: "O tradicional café feito com água quente e grãos moídos",
    value: 9.9,
    amount: 1,
  },
  {
    id: 2,
    image: `${americano}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Expresso Americano",
    descriptionCoffe: "Expresso diluído, menos intenso que o tradicional",
    value: 12.9,
    amount: 1,
  },
  {
    id: 3,
    image: `${cremoso}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Expresso Cremoso",
    descriptionCoffe: "Café expresso tradicional com espuma cremosa",
    value: 12.9,
    amount: 1,
  },
  {
    id: 4,
    image: `${cafeComLeite}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Café com Leite",
    descriptionCoffe:
      "Meio a meio de expresso tradicional com leite vaporizado",
    value: 9.9,
    amount: 1,
  },
  {
    id: 5,
    image: `${latte}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Latte",
    descriptionCoffe:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 9.9,
    amount: 1,
  },
  {
    id: 6,
    image: `${capuccino}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Capuccino",
    descriptionCoffe:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 17.9,
    amount: 1,
  },
  {
    id: 7,
    image: `${macchiato}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Macchiato",
    descriptionCoffe:
      "Café expresso misturado com um pouco de leite quente e espuma",
    value: 19.9,
    amount: 1,
  },
  {
    id: 8,
    image: `${mocaccino}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Mocaccino",
    descriptionCoffe:
      "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.9,
    amount: 1,
  },
  {
    id: 9,
    image: `${chocolateQuente}`,
    typeCoffe: "Tradicional",
    nameCoffe: "Chocolate Quente",
    descriptionCoffe:
      "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 9.9,
    amount: 1,
  },
];
export type clickedItemProps = {
  id: number;
  image: string;
  typeCoffe: string;
  nameCoffe: string;
  descriptionCoffe: string;
  value: number;
  amount: number;
};

export const CoffeItemsContext = createContext({} as any);

export function CoffeItemsProvider({ children }: any) {
  const [cart, setCart] = useState(cofeeData);
  const [cartCoffeSelected, setCartCoffeSelected] = useState<
    clickedItemProps[]
  >([]);

  const addQuantity = (clickedItem: clickedItemProps) => {
    const valueInitial: any = cofeeData.find((id) => id.id === clickedItem.id);
    console.log(valueInitial);
    setCart((prev) => {
      return prev.map((content) =>
        content.id === clickedItem.id
          ? {
              ...content,
              value: valueInitial?.value * (content.amount + 1),
              amount: content.amount + 1,
            }
          : content
      );
    });
  };

  const removeQuantity = (clickedItem: clickedItemProps) => {
    const valueInitial: any = cofeeData.find((id) => id.id === clickedItem.id);

    setCart((prev) => {
      return prev.map((content) =>
        content.id === clickedItem.id && content.amount > 1
          ? {
              ...content,
              value: content.value - valueInitial.value,
              amount: content.amount - 1,
            }
          : content
      );
    });
  };

  const cartCoffeSelectedItem = (clickedItem: clickedItemProps) => {
    setCartCoffeSelected((prev) => {
      const itemInCart = prev.find((i) => i.id === clickedItem.id);
      if (itemInCart) {
        return [...prev];
      }
      return [...prev, clickedItem];
    });
  };
  const addQuantityItemInCartFinal = (clickedItem: clickedItemProps) => {
    setCartCoffeSelected((prev) => {
      addQuantity(clickedItem);
      return prev.map((content) =>
        clickedItem.id === content.id
          ? {
              ...content,
              amount: content.amount + 1,
              value: content.value + 10,
            }
          : content
      );
    });
  };

  const removeQuantityItemInCartFinal = (clickedItem: clickedItemProps) => {
    setCartCoffeSelected((prev) => {
      removeQuantity(clickedItem);
      return prev.map((content) =>
        clickedItem.id === content.id && clickedItem.amount > 1
          ? {
              ...content,
              amount: content.amount - 1,
              value: content.value - 10,
            }
          : content
      );
    });
  };

  const removeItemInCartFinal = (clickedItem: clickedItemProps) => {
    setCartCoffeSelected((prev) => {
      return prev.filter((i) => i.id !== clickedItem.id);
    });
  };

  const total = cartCoffeSelected.map((a) => a.value);
  const totalValueOfCart = total.reduce((acc, numero) => acc + numero, 0);
  const numberOfItemsInCart = cartCoffeSelected.length;

  return (
    <CoffeItemsContext.Provider
      value={{
        cart,
        setCart,
        cartCoffeSelectedItem,
        cartCoffeSelected,
        numberOfItemsInCart,
        addQuantityItemInCartFinal,
        removeQuantityItemInCartFinal,
        removeItemInCartFinal,
        totalValueOfCart,
        addQuantity,
        removeQuantity,
      }}
    >
      {children}
    </CoffeItemsContext.Provider>
  );
}
