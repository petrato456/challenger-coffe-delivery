import { useContext, useEffect } from "react";

import { CoffeItemsContext } from "../../contexts/coffeItems";
import { InfosOfPaymentContext } from "../../contexts/InfosOfPayment";

import CoffesSelected from "../../components/CoffeesSelected";
import FormOfPayment from "../../components/FormOfPayment";
import { Header } from "../../components/Header";
import OrderEntry from "../../components/OrderEntry";

export default function Checkout() {
  const {
    cartCoffeSelected,
    numberOfItemsInCart,
    addQuantityItemInCartFinal,
    removeQuantityItemInCartFinal,
    removeItemInCartFinal,
    totalValueOfCart,
  } = useContext(CoffeItemsContext);
  const { typePayment, typePaymentFunction, setAuthenticated, authenticated } =
    useContext(InfosOfPaymentContext);
  const { setDataForm, dataForm } = useContext(InfosOfPaymentContext);

  const validationOfItens =
    cartCoffeSelected.length > 0 &&
    typePayment !== undefined &&
    dataForm !== undefined;

  useEffect(() => {
    setAuthenticated(validationOfItens);
  }, [validationOfItens]);

  return (
    <>
      <Header numberItemsCart={numberOfItemsInCart} />
      <div className="container m-auto flex flex-col xl:flex-row xl:gap-8">
        <div>
          <OrderEntry
            dataFormProps={(data: any) => setDataForm(data)}
            dataForm={dataForm}
          />
          <FormOfPayment
            payment={(value) => typePaymentFunction(value)}
            paymentSaved={typePayment}
          />
        </div>
        <CoffesSelected
          coffeItem={cartCoffeSelected}
          addQuantityItemInCart={(state) => addQuantityItemInCartFinal(state)}
          removeQuantityItemInCart={(state) =>
            removeQuantityItemInCartFinal(state)
          }
          removeItemInCart={(state) => removeItemInCartFinal(state)}
          totalValue={totalValueOfCart}
          isAuthenticated={authenticated}
        />
      </div>
    </>
  );
}
