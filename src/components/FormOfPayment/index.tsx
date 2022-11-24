import { Money, CreditCard, Bank, CurrencyDollar } from "phosphor-react";

export type FormOfPayment = {
  payment: (value: string) => void;
  paymentSaved: string;
};

const cards = [
  { name: "Cartão de crédito", icon: <CreditCard /> },
  { name: "Cartão de débito", icon: <Bank /> },
  { name: "Dinheiro", icon: <Money /> },
];

export default function FormOfPayment({
  payment,
  paymentSaved,
}: FormOfPayment) {
  return (
    <div className="container m-auto mt-3 xl:mb-36 px-4 xl:p-0 flex items-center justify-center xl:block">
      <div className="max-w-[640px] bg-base-card p-10 rounded-md">
        <header className="flex mb-8">
          <CurrencyDollar className="text-purple-dark text-2xl relative top-1" />
          <div className="flex flex-col">
            <h2 className="text-base-subtitle">Pagamento</h2>
            <p className="text-base-label">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </header>
        <div className="flex flex-wrap gap-3 md:flex-row md:flex-nowrap">
          {cards.map((content, index) => (
            <div
              className="flex items-center relative gap-2 bg-base-button w-full md:w-[180px] h-[50px] cursor-pointer rounded-md hover:bg-base-hover"
              key={index}
            >
              <input
                name="payment"
                id={content.name}
                onChange={(e) => payment(e.target.value)}
                value={content.name}
                type="radio"
                checked={content.name === paymentSaved}
              />
              <label
                htmlFor={content.name}
                className="flex items-center gap-2 cursor-pointer w-full h-full"
              >
                <p className="text-purple-dark pl-3">{content.icon}</p>
                <p className="text-base-text">{content.name}</p>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
