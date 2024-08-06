// import React from 'react'
// import { item } from './Items'

// export default function CardItem({ image, rating, reviewCcount, title, price, soldOut, location }) {

//   let text;
//   if (soldOut === 1) {
//     text = "soldOut"
//   } else if (location === "online") {
//     text = "Online"
//   }


//   return (
//     <div style={{ height: "300px", width: "220px", marginLeft: "50px", margin: "50px", position: "relative" }}>
//       {text && <p style={{ position: "absolute", top: "10px", left: "20px", backgroundColor: "white", borderRadius: "20px", padding: "5px 7px", fontWeight: "bold" }}>{text}</p>}

//       <img src={`images/${image}`} style={{ height: "300px", width: "100%", }} />
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <p className='para'><img src='images/Star 1.png' /></p>
//         <p className='para'>{rating}</p>
//         <p className='para'>{reviewCcount}</p>
//       </div>
//       <p style={{ margin: "4px" }}>{title}</p>
//       <p style={{ marginTop: "4px" }}> <b>From ${price} </b>/person</p>
//     </div>




//   )
// }




import React from 'react'
import { item } from './Items'

export default function CardItem({ item }) {
  console.log(item);

  let text;
  if (item.soldOut === 1) {
    text = "soldOut"
  } else if (item.location === "online") {
    text = "Online"
  }


  return (
    <div style={{ height: "300px", width: "220px", marginLeft: "50px", margin: "50px", position: "relative" }}>
      {text && <p style={{ position: "absolute", top: "10px", left: "20px", backgroundColor: "white", borderRadius: "20px", padding: "5px 7px", fontWeight: "bold" }}>{text}</p>}

      <img src={`images/${item.image}`} style={{ height: "300px", width: "100%", }} />
      <div style={{ display: "flex", alignItems: "center" }}>
        <p className='para'><img src='images/Star 1.png' /></p>
        <p className='para'>{item.rating}</p>
        <p className='para'>{item.reviewCcount}</p>
      </div>
      <p style={{ margin: "4px" }}>{item.title}</p>
      <p style={{ marginTop: "4px" }}> <b>From ${item.price} </b>/person</p>
    </div>




  )
}
