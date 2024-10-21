import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="flex pt-10 justify-between items-center">
      <a
        href="/"
        className="flex items-center text-white font-bold text-2xl gap-2"
      >
        <img
          src="/logo1.png"
          className="rounded-full w-[60px] h-[60px] border-2 border-[#FFCA56]"
          alt="logo"
        ></img>
        <div className="hidden md:block">Jimpo Sonic</div>
      </a>
      {isHome && (
        <Link
          to="/flip"
          className="bg-[#FFCA56] text-black px-6 py-3 rounded-full font-semibold montserrat"
        >
          Flip
        </Link>
      )}
      {!isHome && <ConnectButton showBalance={false} label="Connect Wallet" />}
    </div>
  );
}

export default Navbar;
