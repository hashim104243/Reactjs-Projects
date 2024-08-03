import React from 'react'
import HomeItem from '../Components/HomeItem'
import { useSelector } from 'react-redux'
export default function Home() {
  const item = useSelector((store) => store.items);
  // console.log("got", item);
  return (
    <div>
      <main>
        <div className="items-container">

          {item.map((item) => {
            return <HomeItem item={item} key={item.id} />

          })}
        </div>
      </main>
    </div>
  )
}
