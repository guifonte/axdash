import React, { useState } from 'react';
import axCycle from "./ax-cycle.jpg"

const buttonStyle = "rounded-2xl border-black border-2 h-12 w-12 text-xl hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
const labelStyle = "text-4xl mx-4 border-black border-2 rounded p-2 font-bold"

const App: React.FC = () => {
  const [rounds, setRounds] = useState(0)
  const [energy, setEnergy] = useState(0)
  const [cards, setCards] = useState(0)

  const incrementRound = () => {
    setRounds((prevRounds) => ++prevRounds)
    setEnergy((prevEnergy) => prevEnergy + 2)
    setCards((prevCards) => prevCards + 3)
  }

  const clearAll = () => {
    setRounds(0)
    setEnergy(0)
    setCards(0)
  }
  return (
    <div className="flex flex-col items-center">
      <div className="py-8 max-w-lg w-full grid grid-cols-3 grid-rows-7">
        <div className="flex flex-col items-center justify-end pb-2 row-start-1 col-span-full">
          <h1 className="text-3xl font-bold">Rounds</h1>
        </div>
        <div className="flex justify-center items-center row-start-2 col-start-2">
          <p className={labelStyle}>{rounds}</p>
        </div>
        <div className="flex justify-start items-center row-start-2 col-start-3">
          <button className={buttonStyle} onClick={incrementRound}>+1</button>
        </div>
        <div className="flex flex-col items-center justify-end pb-2 pt-6 row-start-3 col-span-full">
          <h1 className="text-2xl font-bold">Energy</h1>
        </div>
        <div className="flex justify-end items-center row-start-4 col-start-1">
          <button className={buttonStyle} onClick={() => setEnergy((prevEnergy) => prevEnergy - 1)}>-1</button>
        </div>
        <div className="flex justify-center items-center row-start-4 col-start-2">
          <p className={labelStyle}>{energy}</p>
        </div>
        <div className="flex justify-start items-center row-start-4 col-start-3">
          <button className={buttonStyle} onClick={() => setEnergy((prevEnergy) => prevEnergy + 1)}>+1</button>
        </div>
        <div className="flex flex-col items-center justify-end pb-2 pt-6 row-start-5 col-span-full">
          <h1 className="text-2xl font-bold">Cards</h1>
        </div>
        <div className="flex justify-end items-center row-start-6 col-start-1">
          <button className={buttonStyle} onClick={() => setCards((prevCards) => prevCards - 1)}>-1</button>
        </div>
        <div className="flex justify-center row-start-6 col-start-2">
          <p className={labelStyle}>{cards}</p>
        </div>
        <div className="flex justify-start items-center row-start-6 col-start-3">
          <button className={buttonStyle} onClick={() => setCards((prevCards) => prevCards + 1)}>+1</button>
        </div>
        <div className="flex justify-center items-center mt-8 row-start-7 col-start-2">
          <button className="rounded-3xl border-red-500 border-2 py-2 px-5 text-xl font-semibold text-red-500 hover:text-red-600 hover:border-red-600 hover:bg-red-100" onClick={clearAll}>CLEAR</button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <img src={axCycle} alt="axies categories" className="max-w-lg w-full"></img>
      </div>
    </div>
  );
}

export default App;
