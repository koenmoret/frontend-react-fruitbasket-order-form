import './App.css'
import {useState} from "react";

function App() {
    const [fruit, getFruit] = useState(["Bananen","Aardbeien","Appels","Kiwi's"]);

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
    </>
  )
}

export default App
