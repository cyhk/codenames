import React from 'react';
import Link from "next/Link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/create-game">
        <a><h1>New Game</h1></a>
      </Link>
      <Link href="/how-to-play">
        <a><h2>How to play</h2></a>
      </Link>
    </nav>
  )
}

export default NavBar;