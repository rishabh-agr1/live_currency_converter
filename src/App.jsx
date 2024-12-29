import React from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./customHooks/useCurrencyInfo";
import { useState } from "react";

/* THE API USED IN THIS PROJECT IS NO LONGER WORKING */

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(83.4);

  const currencyInfo = useCurrencyInfo(from)

  //const options = Object.keys(currencyInfo)
  const options = ["usd", "inr"];

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
    const tempAmount = amount;
    setAmount(ConvertedAmount);
    setConvertedAmount(tempAmount);
  };

  const backgroundImageUrl =
    "https://images.pexels.com/photos/29905617/pexels-photo-29905617/free-photo-of-black-and-white-hands-handling-coins.jpeg?auto=compress&cs=tinysrgb&w=600";

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImageUrl}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                OnCurrencyChange={(currency) => {
                  setAmount(amount);
                }}
                selectedCurrency={from}
                onAmountChange={
                  (amount) => setAmount(amount)
                }
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                OnCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectedCurrency={to}
                isamountDisabled={true}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
