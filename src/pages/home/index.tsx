import { useContext } from "react";

import { CoffeItemsContext } from "../../contexts/coffeItems";

import { CoffeOptions } from "../../components/CoffeOptions";
import { Header } from "../../components/Header";
import { MainCoffe } from "../../components/MainCoffe";

function Home() {
  const {
    numberOfItemsInCart,
    addQuantity,
    removeQuantity,
    cart,
    cartCoffeSelectedItem,
  } = useContext(CoffeItemsContext);
  return (
    <div className="App">
      <div className="bg-[url('assets/fundo.png')] bg-cover">
        <Header numberItemsCart={numberOfItemsInCart} />
        <MainCoffe />
      </div>
      <CoffeOptions
        cart={cart}
        cartCoffeSelectedItem={(state) => cartCoffeSelectedItem(state)}
        addQuantity={(state) => addQuantity(state)}
        removeQuantity={(state) => removeQuantity(state)}
      />
    </div>
  );
}

export default Home;
