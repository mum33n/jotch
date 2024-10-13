import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const roadmapItems = [
  {
    title: 'Phase 1',
    items: [
      'Presale',
      'Contract deployment',
      'FTMscan update',
      'Dexscreener update',
    ],
  },
  {
    title: 'Phase 2',
    items: ['Sonic Migration', 'Influencer Partnership', 'CMC & CG Listing'],
  },
  {
    title: 'Phase 3',
    items: ['Twitter Spaces', 'Community Expansion', 'Billboard'],
  },
];

function Home() {
  return (
    <>
      <div className="mt-20 xl:px-[15%] px-5 py-20">
        <div className="flex flex-col-reverse md:flex-row text-white gap-10 items-center">
          <div className="md:w-1/2 rounded-full flex items-center">
            <img
              src="/logo1.png"
              className="rounded-full animate-bounce"
              alt="logo"
              muted
            ></img>
          </div>
          <div className="md:w-1/2">
            <h1 className="font-bold text-8xl">$Jimpo</h1>
            <div className="mt-5 text-2xl xl:text-3xl text-arial montserrat">
              Jimpo is created by decentralized team of builders and believers
              on Sonic: Jimpo is for the people and by the people.
              <p>Our mission is to spread fun</p>
            </div>

            <div className="montserrat mt-5 font-bold">
              CA: 0xE375A2337C3eF03D83B6538E7857595EE97E0585
            </div>

            <div className="flex gap-3 mt-5 flex-wrap">
              {/* <a
                  href="https://t.me/Jimpo Sonicmemechannel"
                  className="bg-black text-white px-6 py-3 rounded-full font-semibold"
                >
                  Browse Memes
                </a> */}
              <a
                href="https://spooky.fi/#/swap?inputCurrency=ETH&outputCurrency=0xE375A2337C3eF03D83B6538E7857595EE97E0585"
                className="bg-[#FFCA56] w-full text-center text-black px-6 py-3 rounded-full font-semibold montserrat"
              >
                Buy Some $Jimpo
              </a>
            </div>
            <div className="mt-10 flex gap-5 items-center">
              <a href="/" className="bg-black p-2 rounded-full">
                <img src="/dex.svg" className="w-8 h-8"></img>
              </a>
              <a
                href="https://t.me/Jimpo_Sonic"
                className="bg-black p-2 rounded-full"
              >
                <FaTelegramPlane className="text-3xl text-white" />
              </a>
              <a
                href="https://x.com/Jimpo_Sonic"
                className="bg-black p-2 rounded-full"
              >
                <FaXTwitter className="text-3xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-[#FFCA56]">
        <div className="xl:px-[15%] px-5 min-h-[20vh] flex flex-col justify-between py-20">
          <h1 className="text-center text-6xl">Roadmap</h1>
          <div className="flex flex-wrap gap-10 mt-10 justify-around">
            {roadmapItems.map((phase) => (
              <div className="bg-[#2591FE] md:w-4/10 lg:w-1/4 p-10 rounded-lg">
                <div className="text-center text-white text-4xl">
                  {phase.title}
                </div>
                <div className="mt-5 montserrat text-lg">
                  {phase.items.map((item) => (
                    <li>{item}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section 3 */}
      {/* <div className="text-white">
        <div className="xl:px-[15%] px-5 min-h-[20vh] flex flex-col justify-between py-20">
          <h1 className="text-center text-6xl">Token Allocation</h1>
          <div className="flex gap-10 mt-10 justify-around">
            <div className="montserrat font-bold text-xl">
              <div>Presale 35%</div>
              <div>Liquidity 25%</div>
              <div>Flywheel/Dex Bribes 20%</div>
              <div>Foundation 20%</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-5 text-center text-white montserrat">
        ©2024 $Jimpo, All Right Reserved.
      </div>
    </>
  );
}

export default Home;
