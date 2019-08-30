import Link from "next/Link";

const Index = () => (
  <div>
    <Link href="/create-game">
      <a><h1>Make a new game!</h1></a>
    </Link>
    <Link href="/how-to-play">
      <a><h2>How to play</h2></a>
    </Link>
  </div>
);

export default Index;