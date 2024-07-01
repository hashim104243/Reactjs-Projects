import React, { useState } from 'react';
import ClockHeading from './Components/ClockHeading';
import ClockSlogan from './Components/ClockSlogan';
import CurrentTime from './Components/CurrentTime';

export default function App() {
 
  return (
    <div>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </div>
  )
}
