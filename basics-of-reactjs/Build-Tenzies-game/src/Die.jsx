import React from "react";

export default function Die({ numbers, isHeld, holdDice, id }) {
  const style = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <>
      <div onClick={() => holdDice(id)} className="item" style={style}>
        {numbers}
      </div>
    </>
  );
}
