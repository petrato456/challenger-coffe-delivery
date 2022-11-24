import { ShoppingCart, MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export type HeaderProps = {
  numberItemsCart?: number;
  hiddenCart?: boolean;
  resetApp?: boolean;
};
export function Header({ numberItemsCart, hiddenCart, resetApp }: HeaderProps) {
  return (
    <header className="w-full h-24 flex justify-between items-center px-3 container m-auto">
      {resetApp ? (
        <a href="/">
          <img
            className="w-16 h-8 lg:w-20 lg:h-10"
            src={logo}
            alt="logo-coffe-delivery"
          />
        </a>
      ) : (
        <Link to="/">
          <img
            className="w-16 h-8 lg:w-20 lg:h-10"
            src={logo}
            alt="logo-coffe-delivery"
          />
        </Link>
      )}
      <nav className="flex gap-2 lg:gap-4">
        <div className="flex text-purple-dark bg-purple-light items-center gap-2 p-3 rounded-xl font-semibold">
          <MapPin />
          <p className="text-xs">Rio de Janeiro,RJ</p>
        </div>
        {!hiddenCart && (
          <Link to="/checkout">
            <div className="flex items-center relative bg-yellow-light text-yellow-dark p-4 rounded-lg cursor-pointe hover:bg-yellow-normal hover:text-white">
              <ShoppingCart className="text-lg" />
              <span className="absolute bg-yellow-dark text-white px-2 rounded-full bottom-8 left-8">
                {numberItemsCart && numberItemsCart > 0
                  ? numberItemsCart
                  : null}
              </span>
            </div>
          </Link>
        )}
      </nav>
    </header>
  );
}
