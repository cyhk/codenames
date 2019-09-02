import Link from "next/Link";
import NavBar from "../components/NavBar";

const GAME_ID_LENGTH = 10;

const CreateGame = () => {

  function generateLink() {
    const chars = '01234567890abcdefghijklmnopqrstuvwxyz'.split('');
    const gameIDArr = Array.from({length: GAME_ID_LENGTH});
    const gameID = gameIDArr.map(elem => chars[Math.floor(Math.random()*chars.length)]).join('');
    console.log(gameID);

    return gameID;
  }

  const gameID = generateLink();

  return (
    <div>
      <NavBar />
      <h2>{`Send this link to your friends to start playing: http://localhost:3000/game/${gameID}`}</h2>

      You can go to the link <Link href={`/game/${gameID}`}><a>here</a></Link>
    </div>
  );
};

export default CreateGame;