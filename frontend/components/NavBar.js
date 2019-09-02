import React from 'react';
import Link from "next/Link";

const NavBar = () => {
  return (
    <nav>
      <Link href="/">
        <a>HOME </a>
      </Link>
      <Link href="/create-game">
        <a>New Game </a>
      </Link>
      <Link href="/how-to-play">
        <a>How to play</a>
      </Link>
    </nav>
  )
}

export default NavBar;