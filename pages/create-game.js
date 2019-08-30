import Link from "next/Link";

const CreateGame = () => {
  return (
    <div>
      <Link href="/">
        <a><div>go back</div></a>
      </Link>
      <h2>Enter your email, and then the emails of friends you want to join your game. We'll send them an email with the link to the game.</h2>
      <h3>You can send emails to up to 8 people.</h3>
      <form>
        <div>
          <label htmlFor="email-1">Player 1: </label>
          <input id="email-1" placeholder="Your email here" />
        </div>
        <div>
          <label htmlFor="email-2">Player 2*: </label>
          <input id="email-2" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-3">Player 3: </label>
          <input id="email-3" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-4">Player 4: </label>
          <input id="email-4" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-5">Player 5: </label>
          <input id="email-5" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-6">Player 6: </label>
          <input id="email-6" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-7">Player 7: </label>
          <input id="email-7" placeholder="Enter email" />
        </div>
        <div>
          <label htmlFor="email-8">Player 8: </label>
          <input id="email-8" placeholder="Enter email" />
        </div>
      </form>
    </div>
  );
};

export default CreateGame;