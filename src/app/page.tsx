import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head >
        <title>PNW Cube Drafters</title>
        <meta name="description" content="A community of Magic: The Gathering players throughout the PNW who play Cube." />
        <meta name="keywords" content="Magic: The Gathering, mtg, cube, limited, event, draft, community, Portland, Vancouver, Chehalis, OR, WA" />
        <meta property="og:title" content="PNW Cube Drafters" />
        <meta property="og:description" content="A community of Magic: The Gathering players throughout the PNW who play Cube." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pnwcubedrafters.com/" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4"> Who are we?</h1 >
        <p className="text-lg mb-4">
          PNW Cube Drafters is a community of Magic: The Gathering players throughout the Pacific Northwest who meet up to play the limited format known as Cube.
          We frequently host events at local game stores. All players are welcome.
        </p>
        <p className="text-lg mb-4">
          While we are predominantly located in the Portland area, we have members located everywhere from Salem, OR to Seattle, WA.
        </p>
        <h1 className="text-3xl font-bold mb-4">
          Already interested?
        </h1>
        <p className="text-lg mb-4">
          Head to the <a href="/locations" className="text-blue-300 hover:underline">locations</a> page to find a group near you, or join us on <a href="https://discord.gg/h45vZ3Hr8x" className="text-blue-300 hover:underline">Discord</a> to ask questions.
        </p>
        <ul></ul>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">What is Cube?</h1>
        <p className="text-lg mb-4">
          <a href="https://luckypaper.co/what-is-a-cube/" target="_blank" className="text-blue-300 hover:underline">Cube</a> is a way of playing Magic: the Gathering where players build their decks from a curated set of cards known as a cube.
          A cube might be themed around a specific format, set, mechanic, or even <a href="https://cubecobra.com/cube/overview/100-ornithopters" target="_blank" className="text-blue-300 hover:underline">a single card</a>.
          This makes Cube the ideal way engage with the aspects of the Magic that you enjoy, while avoiding those that you don&apos;t.
        </p>
        <p className="text-lg mb-4">
          The cards are provided by the designer of the cube, so players don&apos;t need to purchase <i>anything</i> to play.
          Cube is an excellent way for newcomers to experience Magic without having to invest huge sums of money into building and maintaining a collection.
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Want to learn more?</h1>
        <p className="text-lg mb-4">
          The Cube community creates a wealth of content for players to learn from.
          <br className="mb-4" />
          A few of our favorites are:
        </p>
        <ul className="list-disc px-8">
          <li className="text-lg mb-4">
            <a href="https://discord.gg/h45vZ3Hr8x" target="_blank" className="text-blue-300 hover:underline">PNW Cube Drafters Discord</a>
            <p>
              Our community&apos;s Discord server. We&apos;ll happily answer any questions you have!
            </p>
          </li>
          <li className="text-lg mb-4">
            <a href="https://luckypaper.co/podcast/" target="_blank" className="text-blue-300 hover:underline">Lucky Paper Radio</a>
            <p>
              A podcast made by cubers in Baltimore, MD. Their website is a treasure trove of resources on Cube design and play.
            </p>
          </li>
          <li className="text-lg mb-4">
            <a href="https://discord.com/invite/mtg-cube-talk-263828508126609420" target="_blank" className="text-blue-300 hover:underline">MTG Cube Talk Discord</a>
            <p>
              A Discord server with Cube players from all over the world. Most Cube conversations happen here.
            </p>
          </li>
          <li className="text-lg mb-4">
            <a href="https://www.reddit.com/r/mtgcube/" target="_blank" className="text-blue-300 hover:underline">r/mtgcube</a>
            <p>
              The subreddit for Cube players. Mostly focused on designing cubes and evaluating cards.
            </p>
          </li>
        </ul>
      </div>
    </div >
  );
}
