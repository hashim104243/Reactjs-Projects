import React from "react";
import MemeData from "./MemeData";
import { useState } from "react";
export default function Meme() {
  const [memeImage, setmemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3l60ph.jpg",
  });

  const [allmemArray, setallmemArray] = useState([]);
  React.useEffect(() => {
    async function getVal() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setallmemArray(data.data.memes);
    }
    getVal();
    // fetch("https://api.imgflip.com/get_memes")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setallmemArray(data.data.memes);
    //   });
  }, []);

  // const Data1 = allmemArray.data.memes;
  // console.log("get array" + Data1);

  function getImage() {
    const Random = Math.floor(Math.random() * allmemArray.length);
    const url = allmemArray[Random].url;
    setmemeImage((prev) => {
      return { ...prev, randomImage: url };
    });
  }

  function handle(event) {
    const { name, value } = event.target;

    setmemeImage((p) => {
      return { ...p, [name]: value };
    });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <input
          value={memeImage.topText}
          onChange={handle}
          type="text"
          placeholder="top text"
          name="topText"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={memeImage.bottomText}
          name="bottomText"
          onChange={handle}
          type="text"
          placeholder="top text"
        />
      </div>
      <div>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={getImage}>Get New Meme Image</button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyItems: "center",
          justifyContent: "center",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <img src={memeImage.randomImage} />
        <h1
          style={{
            position: "absolute",
            top: "0",
          }}
        >
          {memeImage.topText}
        </h1>
        <h1
          style={{
            position: "absolute",
            bottom: "0",
          }}
        >
          {memeImage.bottomText}
        </h1>
      </div>
    </div>
  );
}
