import { Plus, Minus, ShoppingCart } from "phosphor-react";

export type clickedItemProps = {
  id: number;
  image: string;
  typeCoffe: string;
  nameCoffe: string;
  descriptionCoffe: string;
  value: number;
  amount: number;
};

export type CoffeOptionsProps = {
  cart: clickedItemProps[];
  cartCoffeSelectedItem: (state: clickedItemProps) => void;
  addQuantity: (state: clickedItemProps) => void;
  removeQuantity: (state: clickedItemProps) => void;
};

export function CoffeOptions({
  cart,
  cartCoffeSelectedItem,
  addQuantity,
  removeQuantity,
}: CoffeOptionsProps) {
  return (
    <section className="container m-auto flex flex-col mt-8 mb-24">
      <h2 className="font-extrabold text-2xl lg:text-4xl px-4 lg:px-0">
        Nossos cafés
      </h2>

      <div className=" w-full flex items-center justify-center flex-wrap mt-12 gap-8 lg:gap-16 lg:justify-start">
        {cart &&
          cart.map((content, id) => (
            <div
              className="w-64 h-80 bg-base-card flex flex-col items-center rounded-tl-md rounded-tr-3xl rounded-br-md rounded-bl-3xl"
              key={id}
            >
              <img
                className="w-32 relative bottom-4"
                src={content.image}
                alt={content.nameCoffe}
              />
              <span className="px-3 py-1 bg-yellow-light rounded-full text-yellow-dark text-xs relative bottom-3">
                {content.typeCoffe}
              </span>

              <h2 className="text-xl font-bold text-base-subtitle">
                {content.nameCoffe}
              </h2>
              <p className="text-center text-base-label text-sm mt-2 w-56">
                {content.descriptionCoffe}
              </p>
              <div className="w-full flex items-center justify-center mt-8">
                <div className="flex items-center justify-center gap-1 w-16 mr-4">
                  <p>R$</p>
                  <p className="text-2xl">{content.value.toFixed(2)}</p>
                </div>
                <div className="w-20 h-9 flex items-center justify-center bg-base-button rounded-md gap-2 ">
                  <Minus
                    className="cursor-pointer text-purple-normal"
                    onClick={() => removeQuantity(content)}
                  />
                  <p>{content.amount}</p>
                  <Plus
                    className="cursor-pointer text-purple-normal"
                    onClick={() => addQuantity(content)}
                  />
                </div>
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-purple-dark cursor-pointer ml-2 hover:bg-purple-normal"
                  onClick={() => cartCoffeSelectedItem(content)}
                >
                  <ShoppingCart className="text-white" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
