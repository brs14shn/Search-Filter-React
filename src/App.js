import { useState} from 'react';
import './App.css';
import FilterData from './components/FilterData';
import Filters from './components/Filters';
import {data} from "./helper/data"

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="App">
     {/* <FilterData search={search} setSearch={setSearch} data={data}/> */}
      <Filters/>
      
    </div>
  );
}

export default App;
