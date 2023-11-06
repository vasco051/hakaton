import { Board } from 'components/Board';
import {Dice} from "./components/dice/ui/Dice.tsx";
import {useState} from "react";
function App() {
  const [isopen,setIsopen] = useState(false)


  return (
    <div>
      <button onClick={()=>setIsopen(prevState => !prevState)}>123123</button>

      <Board/>
      {isopen && <Dice userId={1}></Dice>}
      
    </div>
  );
}

export default App;
