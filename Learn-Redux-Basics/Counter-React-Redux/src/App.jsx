import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Controls from './Components/Controls';
import Header from './Components/Header';
import DisplayCounter from './Components/DisplayCounter';
import Container from './Components/Container';
import { useSelector } from 'react-redux';
import store from './Store/Index';
import CounterMessage from './Components/CounterMessage';
export default function App() {
  const privacy = useSelector(storep => storep.privacy);
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center d-flex justify-content-center align-content-center">
        <Container>
          <Header />

          {privacy ? <DisplayCounter /> : <CounterMessage />}



          <div className="col-lg-6 mx-auto" >

            <Controls />
          </div>
        </Container>
      </div>
    </center>
  )
}
// {privacy ? <DisplayCounter /> : <CounterMessage />}