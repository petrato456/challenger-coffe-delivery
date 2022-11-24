import { useContext, useEffect } from "react";

import { CoffeItemsContext } from "../../contexts/coffeItems";
import { InfosOfPaymentContext } from "../../contexts/InfosOfPayment";

import { Header } from "../../components/Header";
import { RequestConfirmed } from "../../components/RequestConfirmed";

export function Success() {
  const { cartCoffeSelected } = useContext(CoffeItemsContext);
  const { typePayment, dataForm, authenticated } = useContext(
    InfosOfPaymentContext
  );

  useEffect(() => {
    if (!authenticated) {
      return history.back();
    }
  }, []);
  return (
    <>
      {authenticated && cartCoffeSelected && (
        <>
          <Header hiddenCart resetApp />
          <RequestConfirmed
            infosUser={dataForm}
            formPayment={typePayment}
            request={cartCoffeSelected}
          />
        </>
      )}
    </>
  );
}
