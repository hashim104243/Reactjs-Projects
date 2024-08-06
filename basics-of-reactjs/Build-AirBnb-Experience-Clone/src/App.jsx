import React from 'react'
import Header from './Component/Header'
import CardItem from './Component/CardItem'
import HeroSection from './Component/HeroSection'
import { item } from './Component/Items'
console.log(item.soldOut);

export default function App() {
  const items = item.map((items) => {

    return (
      <div >
        <CardItem item={items} key={items.reviewCcount} />

      </div>
    )
  })
  // <CardItem key={items.reviewCcount} image={items.image} rating={items.rating}
  // reviewCcount={items.reviewCcount} title={items.title} price={items.price} soldOut={items.soldOut} location={items.location} />
  return (
    <div>
      <Header />

      <HeroSection />

      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>

        {items}
      </div>


    </div>
  )
}
