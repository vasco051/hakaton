import { Board } from 'components/Board';
import {Dice} from "./components/dice/ui/Dice.tsx";
import {useState} from "react";
import PlayerIcon from "./components/PlayerIcon";
function App() {
  const [isopen,setIsopen] = useState(false)

  const movePlayer = () => {

  }

  return (
    <div>
      <button onClick={()=>setIsopen(prevState => !prevState)}>123123</button>
      <button onClick={()=>movePlayer}>move</button>
      <PlayerIcon/>
      <Board/>
      {isopen && <Dice userId={1} ></Dice>}
      
    </div>
  );
}

export default App;
