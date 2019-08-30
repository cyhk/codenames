import { useRouter } from 'next/router';
import Codenames from "../../components/Codenames";

const Game = () => {
  const router = useRouter();
  const { gameid } = router.query;

  return <Codenames gameId={gameid} />
};

export default Game;