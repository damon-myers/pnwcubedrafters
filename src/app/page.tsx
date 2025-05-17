export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4"> Who are we?</h1 >
        <p className="text-lg mb-4">
          PNW Cube Drafters is a community of Magic: The Gathering players throughout the Pacific Northwest who meet up regularly to play the limited format known as Cube.
          We frequently host events at local game stores where all players are welcome.
        </p>
        <p className="text-lg mb-4">
          While we are predominantly located in the greater Portland area, we have members everywhere from Salem, OR to Seattle, WA.
        </p>
        <h1 className="text-3xl font-bold mb-4">
          Already interested?
        </h1>
        <p className="text-lg mb-4">
          Head to the <a href="/locations" className="text-blue-300 hover:underline">locations</a> page to find a game near you, or join us on <a href="https://discord.gg/h45vZ3Hr8x" className="text-blue-300 hover:underline">Discord</a> to ask questions.
        </p>
        <ul></ul>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">What is Cube?</h1>
        <p className="text-lg mb-4">
          <a href="https://luckypaper.co/what-is-a-cube/" target="_blank" className="text-blue-300 hover:underline">Cube</a> is a way to play Magic: the Gathering in which players build decks from a curated set of cards known as a cube.
          A cube might be themed around a specific format, set, mechanic, or even <a href="https://cubecobra.com/cube/overview/100-ornithopters" target="_blank" className="text-blue-300 hover:underline">a single card</a>.
          This makes Cube the ideal way to tailor your game to the aspects of the Magic that you enjoy the most, while avoiding those that you don&pos;t.
        </p>
        <p className="text-lg mb-4">
          Because the cards are provided by the designer of the cube, players don&pos;t need to purchase <i>anything</i> to play.
          Cube is an excellent way for newcomers to enjoy the game without having to invest huge sums of money into building and maintaining a collection.
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Want to learn more?</h1>
        <p className="text-lg mb-4">
          The incredible Cube community creates a wealth of content for players to learn from.
          <br className="mb-4" />
          A few of our favorites:
        </p>
        <ul className="list-disc px-8">
          <li className="text-lg mb-4">
            <a href="https://discord.gg/h45vZ3Hr8x" target="_blank" className="text-blue-300 hover:underline">PNW Cube Drafters Discord</a> - Our community&pos;s Discord server. We&pos;ll happily answer any questions you have!
          </li>
          <li className="text-lg mb-4">
            <a href="https://luckypaper.co/podcast/" target="_blank" className="text-blue-300 hover:underline">Lucky Paper Radio</a> - A podcast made by cubers in Baltimore, MD. Their website is a treasure trove of resources on Cube design and play.
          </li>
          <li className="text-lg mb-4">
            <a href="https://discord.com/invite/mtg-cube-talk-263828508126609420" target="_blank" className="text-blue-300 hover:underline">MTG Cube Talk Discord</a> - A Discord server with Cube players from all over the world. Most Cube conversations happen here.
          </li>
          <li className="text-lg mb-4">
            <a href="https://www.reddit.com/r/mtgcube/" target="_blank" className="text-blue-300 hover:underline">r/mtgcube</a> - The subreddit for Cube players. Mostly focused on designing cubes and evaluating cards.
          </li>
        </ul>
      </div>
    </div >
  );
}
