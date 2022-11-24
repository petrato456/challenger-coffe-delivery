import successImage from "../../assets/success-image.png";
import { MapPin, Timer, CurrencyDollarSimple } from "phosphor-react";

export type RequestConfirmedProps = {
  formPayment: string;
  request: {
    amount: number;
    nameCoffe: string;
  }[];
  infosUser: {
    Rua: string;
    Numero: number;
    Bairro: string;
    Cidade: string;
    UF: string;
  };
};

export function RequestConfirmed({
  formPayment,
  request,
  infosUser,
}: RequestConfirmedProps) {
  return (
    <main className="container m-auto px-4 xl:px-0">
      <section className="">
        <header className="mt-10 flex flex-col gap-2">
          <h1 className="text-yellow-dark text-[32px] font-extrabold">
            Uhu! Pedido confirmado
          </h1>
          <p className="text-base-subtitle font-normal text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </header>
        <div className="flex flex-col lg:flex-row lg:gap-[102px]">
          <div className="w-full max-w-[526px] gradient-css p-10 mt-10 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 text-white bg-purple-dark rounded-full">
                <MapPin />
              </div>
              {infosUser && (
                <p className="text-base-text">
                  Entrega em{" "}
                  <strong>
                    {infosUser.Rua}, {infosUser.Numero}
                  </strong>{" "}
                  {infosUser.Bairro} - {infosUser.Cidade}, {infosUser.UF}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 text-white bg-yellow-normal rounded-full">
                <Timer />
              </div>
              <div>
                <p className="text-base-text">Previsão de entrega </p>
                <p>20 min - 30 min</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 text-white bg-yellow-dark rounded-full">
                <CurrencyDollarSimple />
              </div>
              <div>
                <p className="text-base-text">Pagamento na entrega </p>
                <p>{formPayment}</p>
              </div>
            </div>
            <div>
              <h2>Dados do pedido</h2>
              {request &&
                request.map((content) => (
                  <div className="flex gap-2">
                    <p>{content.amount}</p>
                    <p>{content.nameCoffe}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full mt-20 mb-20 xl:mt-0 lg:mb-0 flex items-end">
            <img
              src={successImage}
              alt="imagem-de-sucesso-ao-finalizar-compra"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
