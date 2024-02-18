import React, { useState } from "react";
import Data from "./components/data";
import List from './components/list'; // Assuming List component is correctly implemented and exported

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <div className='container'>
      <h3>{people.length} Students</h3>
      <List people={people} /> 
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  )
}

export default App;
