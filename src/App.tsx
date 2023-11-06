import BoardCell from './components/BoardCell/BoardCell';
import {CellVariant} from './components/BoardCell/types';
import {Dice} from "./components/dice/ui/Dice.tsx";

function App() {
    const getDice = () => {

    }
    return (
        <div>
            <button onClick={getDice()}>dice</button>
            <BoardCell variant={CellVariant.LEFT} item={{}}/>
            <Dice userId={1}></Dice>
        </div>
    );
}

export default App;
