import React, { useEffect, useState } from "react";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
/* tenzies */

export default function App() {
  const [state, setState] = useState(allNewDice);
  const [tenzi, setTenzi] = useState(false);
  useEffect(() => {
    const allHeld = state.every((die) => die.isHeld);
    const fristValue = state[0].value;
    const AllsameValue = state.every((die) => die.value == fristValue);
    if (allHeld && AllsameValue) {
      setTenzi(true);
      console.log("uuuuuuuu won");
    }
    console.log("changed state");
  }, [state]);
  function allNewDice() {
    const ar = [];
    for (let index = 0; index < 10; index++) {
      ar.push(generateNewDie());
    }
    return ar;
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 10 + 1),
      isHeld: false,
    };
  }
  function handleDice() {
    if (!tenzi) {
      setState((prev) =>
        prev.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzi(false);
      setState(allNewDice());
    }
  }

  const diceElements = state.map((i) => (
    <Die
      isHeld={i.isHeld}
      id={i.id}
      numbers={i.value}
      key={i.id}
      holdDice={holdDice}
    />
  ));

  function holdDice(id) {
    setState((prev) =>
      prev.map((prev) => {
        return prev.id === id ? { ...prev, isHeld: !prev.isHeld } : prev;
      })
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <main
        style={{
          backgroundColor: "#0B2434",
          width: "500px",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {tenzi && <Confetti />}
        <div
          style={{
            backgroundColor: "white",
            width: "450px",
            height: "450px",
            borderRadius: "20px",
          }}
        >
          <div style={{ textAlign: "center", marginTop: "70px" }}>
            <h1>Tenzies Game</h1>
            <h4>
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </h4>
          </div>
          <div className="items">{diceElements}</div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px",
            }}
          >
            <button className="rol-btns" onClick={handleDice}>
              {tenzi ? "new game" : "Roll"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
