import Link from "next/Link";

const HowToPlay = () => (
  <div>
    <Link href="/">
      <a><div>go back</div></a>
    </Link>
    <ul>
      <li>The game starts with 25 words, arranged in a 5x5 grid</li>
      <li>There are two teams - red and blue. One person from each team is the spymaster and is in charge of giving clues for their teammates to guess the correct words on the board</li>
      <li>The spymasters knows which words belong to which team because they have access to the codename cards</li>
      <li>At each turn, the spymaster gives a clue in the form of a one word clue that relates to some words belonging to their team on the board, along with a number that the clue is related to. An example would be "authority 2" for "police" and "hospital". The spymaster can also clue 'unlimited' and '0'. These allow for unlimited guessing until the turn ends</li>
      <li>Players can guess one more than the number the spymaster clues for. For example, if the spymaster clued "forest 2", the team members can at most guess 3 words</li>
      <li>The turn ends when players guesses a card that is revealed to be of the other team's or a neutral card. The game ends immediately when players guess a black card</li>
    </ul>
  </div>
);

export default HowToPlay;