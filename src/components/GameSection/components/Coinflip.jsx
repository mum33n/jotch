import React, { useEffect, useState } from 'react';
import './Flip.css';

const coinHead = '/coinhead.png';
const cointail = '/cointail.png';
function FlipAnimation() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [side, setSide] = useState('heads');

  //   const flipCoin = () => {
  //     setIsFlipping(true);

  //     // Randomly set heads or tails

  //     // Reset the flip state after the animation duration
  //     // setTimeout(() => setIsFlipping(false), 1000);
  //   };

  useEffect(() => {
    setInterval(() => {
      const result = Math.random() > 0.5 ? 'heads' : 'tails';
      setSide(result);
    }, 1000);
  }, []);

  return (
    <div className="relative">
      <div className={`flip ${side}`}>
        {/* <div className="heads">Heads</div>
      <div className="tails">Tails</div> */}
        <img
          className={`w-24 h-24 block cursor-pointer  duration-300`}
          src={`${side === 'heads' ? coinHead : cointail}`}
          alt="Heads"
          onClick={() => setSelected('Heads')}
        />
      </div>
    </div>
  );
}

export default FlipAnimation;
