import { Plus, Minus, Trash } from "phosphor-react";
import { Link } from "react-router-dom";

export type ItemInCoffe = {
  image: string;
  nameCoffe: string;
  value: number;
  amount: number;
};
export type CoffeItemsProps = {
  coffeItem: ItemInCoffe[];
  removeQuantityItemInCart: (state: ItemInCoffe) => void;
  addQuantityItemInCart: (state: ItemInCoffe) => void;
  removeItemInCart: (state: ItemInCoffe) => void;
  totalValue: number;
  isAuthenticated: boolean;
};

export default function CoffesSelected({
  coffeItem,
  removeQuantityItemInCart,
  addQuantityItemInCart,
  removeItemInCart,
  totalValue,
  isAuthenticated,
}: CoffeItemsProps) {
  const entrega = 3.5;
  return (
    <div className="container px-4 mb-20 xl:mb-0 flex items-center justify-center flex-col xl:block">
      <div className="w-full max-w-[640px] mt-auto">
        <h1 className="mt-7 mb-4  text-lg font-bold">Cafés selecionados</h1>
      </div>
      <div className="w-full max-w-[640px] bg-base-card flex flex-col gap-6 items-center justify-center px-4 py-10 md:p-10 radius-css xl:max-w-[448px] ">
        <header className="w-full flex flex-col items-center max-h-[400px] h-full overflow-auto justify-center gap-6">
          {coffeItem.length <= 0 && (
            <p className="mb-5">Carrinho vazio, escolha um café!</p>
          )}
          {coffeItem &&
            coffeItem.map((content, index) => (
              <div
                className="flex w-full gap-2 max-w-[368px] border-b-[3px] border-base-button pb-6"
                key={index}
              >
                <img
                  src={content.image}
                  alt={content.nameCoffe}
                  className="w-[64px] h-[64px]"
                />
                <div className="flex flex-col w-full gap-3">
                  <div className="flex justify-between w-full">
                    <p>{content.nameCoffe}</p>
                    <p>R$ {content.value.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 bg-base-button p-2 rounded-md">
                      <Minus
                        className="text-purple-normal cursor-pointer"
                        onClick={() => removeQuantityItemInCart(content)}
                      />
                      <p>{content.amount}</p>
                      <Plus
                        className="text-purple-normal cursor-pointer"
                        onClick={() => addQuantityItemInCart(content)}
                      />
                    </div>
                    <div
                      className="bg-base-button p-2 cursor-pointer flex items-center gap-2 rounded-md hover:bg-base-hover"
                      onClick={() => removeItemInCart(content)}
                    >
                      <Trash className="text-purple-normal" />
                      <p>remover</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </header>
        <div className="flex flex-col w-full max-w-[340px] gap-3">
          <div className="flex justify-between">
            <p>Total de itens</p>
            <p>R$ {totalValue ? totalValue.toFixed(2) : 0}</p>
          </div>
          <div className="flex justify-between">
            <p>Entrega</p>
            <p>R$ {totalValue ? entrega.toFixed(2) : 0}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>R$ {totalValue ? (totalValue + entrega).toFixed(2) : 0}</p>
          </div>
        </div>
        <footer className="flex items-center justify-center px-4 w-full">
          {isAuthenticated ? (
            <Link to="/success" className="w-full">
              <button className="w-full max-w-[368px] h-[46px] bg-yellow-normal text-white hover:bg-yellow-dark">
                CONFIRMAR PEDIDO
              </button>
            </Link>
          ) : (
            <button
              className="w-full max-w-[368px] h-[46px] bg-[#999] text-yellow-light"
              disabled
            >
              Selecione os dados
            </button>
          )}
        </footer>
      </div>
    </div>
  );
}
