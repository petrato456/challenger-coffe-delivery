import { createContext, useState } from "react";

export const InfosOfPaymentContext = createContext({} as any);

export function InfosOfPaymentProvider({ children }: any) {
  const [typePayment, setTypePayment] = useState();
  const [dataForm, setDataForm] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  const typePaymentFunction = (payment: any) => {
    setTypePayment(payment);
  };

  console.log(dataForm);
  return (
    <InfosOfPaymentContext.Provider
      value={{
        typePayment,
        setTypePayment,
        typePaymentFunction,
        dataForm,
        setDataForm,
        authenticated,
        setAuthenticated,
      }}
    >
      {children}
    </InfosOfPaymentContext.Provider>
  );
}
