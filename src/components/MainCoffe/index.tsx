import { ShoppingCart, Timer, Coffee, Package } from "phosphor-react";

import coffe from "../../assets/coffe.png";

export function MainCoffe() {
  return (
    <div className="container m-auto">
      <div className="w-full px-3 flex flex-col gap-10 lg:flex-row lg:mt-24">
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-black text-2xl lg:text-5xl">
            Encontre o café perfeito
            <br /> para qualquer hora do dia
          </h1>
          <h2 className="lg:text-1xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
          <div className=" flex flex-col gap-4 mt-4 lg:mt-7 lg:gap-7">
            <div className="flex flex-wrap gap-4 lg:gap-10">
              <div className="flex  items-center gap-2">
                <div className="rounded-3xl bg-yellow-dark text-white p-1  lg:p-3">
                  <ShoppingCart />
                </div>
                <p>Compra simples e segura</p>
              </div>
              <div className="flex  items-center gap-2">
                <div className="rounded-3xl bg-yellow-normal text-white p-1 lg:p-3">
                  <Timer />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>
            <div className="lg:flex flex flex-wrap gap-3 lg:gap-8">
              <div className="flex items-center gap-2">
                <div className="rounded-3xl bg-base-text text-white p-1  lg:p-3">
                  <Package />
                </div>
                <p>Embalagem mantém quente</p>
              </div>
              <div className="flex  items-center gap-2">
                <div className="rounded-3xl bg-purple-dark text-white p-1  lg:p-3">
                  <Coffee />
                </div>
                <p>O café chega fresquinho</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center lg:items-end lg:justify-end">
          <img src={coffe} alt="coffe" />
        </div>
      </div>
    </div>
  );
}
