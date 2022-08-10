import { useState} from 'react';
import './App.css';
import {data} from "./helper/data"

function App() {
  const [search, setSearch] = useState([])

  const handleFilter=(e)=>{
    const newWord=e.target.value
    console.log(newWord);
    const filter=data.filter((value)=>{
      return value.first_name.toLowerCase().includes(newWord.toLowerCase)
    })
    setSearch(filter)
  }




  
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={handleFilter} />
      
        {search.map((val,key)=>{
          return(
            <div>
              <p>{val.first_name}</p>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
