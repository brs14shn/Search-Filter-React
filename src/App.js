import { useState} from 'react';
import './App.css';
import {data} from "./helper/data"

function App() {
  const [search, setSearch] = useState("")





  
  return (
    <div className="App">
      <input type="text" placeholder='Search...' onChange={(e)=>setSearch(e.target.value)} />
      
        {data.filter((value)=>{

          if(value.first_name.toLowerCase().includes(search.toLowerCase())){
            return value
          }
        }).map((val,key)=>{
          return(
            <div key={key}>
              <p>{val.first_name}</p>
            </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
