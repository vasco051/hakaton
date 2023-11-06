import { FC } from 'react';


const CreateRoom: FC = () => {
  const countPlayers = [ 2, 3, 4, 5 ];

  return (
    <form>
      <h1>Создание игры</h1>

      <div>
        <span>Название</span>
        <input type="text"/>
      </div>

      <div>
        <span>Кол-во игроков</span>
        <ul>
          {countPlayers.map(count => (
            <li>{count}</li>
          ))}
        </ul>
      </div>

      <button>Создать игру</button>
    </form>
  );
};

export default CreateRoom;