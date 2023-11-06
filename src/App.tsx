import BoardCell from './components/BoardCell/BoardCell';
import { CellVariant } from './components/BoardCell/types';

function App() {
  return (
    <div>
      <BoardCell variant={CellVariant.LEFT} item={{}}/>
    </div>
  );
}

export default App;
