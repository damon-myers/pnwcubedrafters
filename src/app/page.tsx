import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4"> Who are we?</h1 >
        <p className="text-lg mb-4">
          PNW Cube Drafters is a community of Magic: The Gathering players in the Pacific Northwest of the US who enjoy playing a specific format known as Cube.
          We host frequent events at local game stores and private homes, and we encourage players of all skill levels to join us.
        </p>
        <p className="text-lg mb-4">
          While we are mostly located in the greater Portland, OR metro area, we have members everywhere from Salem, OR to Seattle, WA.
        </p>
        <p className="text-lg mb-4">
          Already interested? Head to the <a href="/locations" className="text-blue-300 hover:underline">locations</a> page to find a game near you, or join us on <a href="https://discord.gg/h45vZ3Hr8x" className="text-blue-300 hover:underline">Discord</a> to chat and find a group.
        </p>
        <ul></ul>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">What is Cube?</h1>
        <p className="text-lg mb-4">
          <a href="https://luckypaper.co/what-is-a-cube/" className="text-blue-300 hover:underline">Cube</a> is a way to play Magic: the Gathering where players build decks using a curated set of cards known as a cube.
          A cube might be themed around a specific format, set, mechanic, or even a single card.
          This makes Cube the ideal way to tailor your game to the aspects of the Magic that you enjoy the most, while avoiding those that you don't.
        </p>
        <p className="text-lg mb-4">
          Because the cards are provided by the designer of the cube, players don't need to purchase <i>anything</i> to play.
          This makes Cube a great way for newcomers to enjoy the game without having to invest huge sums of money into building and maintaining a collection.
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Want to learn more?</h1>
        <p className="text-lg mb-4">
          The social aspect of Cube has resulted in a vibrant community that creates a wealth of content for players to learn from.
          <br className="mb-4" />
          A few of our favorites:
        </p>
        <ul className="list-disc px-8">
          <li className="text-lg mb-4">
            <a href="https://discord.gg/h45vZ3Hr8x" className="text-blue-300 hover:underline">PNW Cube Drafters Discord</a> - Discord server for the PNW Cube Drafters community. We'll happily answer any questions you have!
          </li>
          <li className="text-lg mb-4">
            <a href="https://luckypaper.co/podcast/" className="text-blue-300 hover:underline">Lucky Paper Radio</a> - A podcast made by cubers in Baltimore, MD. Their website has a wealth of resources on Cube design and play.
          </li>
          <li className="text-lg mb-4">
            <a href="https://www.reddit.com/r/mtgcube/" className="text-blue-300 hover:underline">r/mtgcube</a> - The subreddit for Cube players. Mostly focused on designing cubes and evaluating cards.
          </li>
          <li className="text-lg mb-4">
            <a href="https://discord.com/invite/mtg-cube-talk-263828508126609420" className="text-blue-300 hover:underline">MTG Cube Talk Discord</a> - A Discord server for Cube players from all over the world. Most Cube conversations happen here.
          </li>
        </ul>
      </div>
    </div >
  );
}
