import { BsTelegram } from 'react-icons/bs';
import './App.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function App() {
  return (
    <div className="xl:px-[15%] px-5 min-h-[100vh] flex flex-col justify-between">
      <div className="flex py-10 justify-between items-center">
        <a
          href="/"
          className="flex items-center text-black font-bold text-2xl gap-2"
        >
          <img
            src="/logo1.png"
            className="rounded-full w-[60px] h-[60px] border-4 border-[#b89146]"
            alt="logo"
          ></img>
          <div className="hidden md:block">Jotchua</div>
        </a>
        <a
          href="https://jup.ag/swap/6ktDB8pro2WTCW1WkuevBWs4Jm4B9Y11iJL6TLvmEBey-SOL"
          className="bg-[#b89146] text-white px-6 py-3 rounded-full font-semibold"
        >
          Buy Some $Jotch
        </a>
      </div>

      <div className="mt-20">
        <div className="flex flex-col-reverse md:flex-row text-black gap-10 items-center">
          <div className="md:w-1/2 rounded-full flex items-center">
            <video
              autoPlay
              loop
              // controls
              src="/video.mp4"
              className="md:w-9/10 rounded-full"
              alt="logo"
              muted
            ></video>
          </div>
          <div>
            <h1 className="font-bold md:text-9xl text-8xl">$Jotch</h1>
            <div className="mt-5 text-2xl xl:text-3xl ">
              Jotchua, the cutest puppy on the <br /> blockchain deserves a
              proper CTO.
            </div>

            <div className="flex gap-3 mt-5 flex-wrap">
              <a
                href="https://t.me/jotchuamemechannel"
                className="bg-black text-white px-6 py-3 rounded-full font-semibold"
              >
                Browse Memes
              </a>
              <a
                href="https://jup.ag/swap/6ktDB8pro2WTCW1WkuevBWs4Jm4B9Y11iJL6TLvmEBey-SOL"
                className="bg-[#b89146] text-white px-6 py-3 rounded-full font-semibold"
              >
                Buy Some $Jotch
              </a>
            </div>
            <div className="mt-10 flex gap-5 items-center">
              <a
                href="https://dexscreener.com/solana/ehbyx2eqya7ar9dnnt8e8fkr2alyvqmzpmaohcwuhnig"
                className="bg-black p-2 rounded-full"
              >
                <img src="/dex.svg" className="w-8 h-8"></img>
              </a>
              <a
                href="https://t.me/jotchonsol"
                className="bg-black p-2 rounded-full"
              >
                <FaTelegramPlane className="text-3xl text-white" />
              </a>
              <a
                href="https://x.com/jotchesquizo"
                className="bg-black p-2 rounded-full"
              >
                <FaXTwitter className="text-3xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 text-center">©2024 $JOTCH, All Right Reserved.</div>
    </div>
  );
}

export default App;
