import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CoffeItemsProvider } from "./contexts/coffeItems";
import { InfosOfPaymentProvider } from "./contexts/InfosOfPayment";

import Checkout from "./pages/checkout";
import Home from "./pages/home";
import { Success } from "./pages/success";

function App() {
  return (
    <CoffeItemsProvider>
      <InfosOfPaymentProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </Router>
      </InfosOfPaymentProvider>
    </CoffeItemsProvider>
  );
}
export default App;
