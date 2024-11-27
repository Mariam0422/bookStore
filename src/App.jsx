import {API_KEY} from './constant';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [value, setValue] = useState("");
  const [data, setData] = useState([]);


    const getData = async () => {
      try {
        const resp = await fetch(`https://openlibrary.org/search.json?title=${value}&limit=20`);
            
        const data = await resp.json();
        console.log(data);
        setData(data.docs); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };  


  return (
    <div className="App">
      <Header setValue={setValue} getData={getData}/>
      <Main data={data}/>

    </div>
  );
}

export default App;
