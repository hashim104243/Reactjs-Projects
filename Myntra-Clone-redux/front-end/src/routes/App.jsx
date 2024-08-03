import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import FetchItem from '../Components/FetchItem'
import { Outlet } from 'react-router-dom'
LoadingSpinner
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Components/LoadingSpinner'

export default function App() {
  const fetchStatus = useSelector((item) => item.fetchStatus)
  console.log(fetchStatus);


  return (
    <div>
      <Header />
      <FetchItem />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />
    </div>
  )
}
