import { useState } from 'react';
import {
  useAccount,
  useChainId,
  useConfig,
  useReadContract,
  // useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';
import abi from '../../abis/flip.json';
import { erc20Abi } from 'viem';
import { useQuery } from '@tanstack/react-query';
import { useTokenBalance } from '../../hooks/useBalance';
import { waitForTransactionReceipt } from '@wagmi/core';
import { ethers, MaxUint256 } from 'ethers';
import { toast } from 'react-toastify';
import FlipAnimation from './components/Coinflip';
const tokenToSymbol = {
  '0xE375A2337C3eF03D83B6538E7857595EE97E0585': 'Jimpo',
  '0x1f008f9af47b387bdf67a25f2b8219942207298f': 'Fknuckles',
  '0x9c375c4fe659bf9a8af721cec9fac250b92493a5': 'BOF',
  '0xe816b19b673088c02f3c9e03bc4a66e1ef676cf7': 'Versus',
};
const coins = [
  { name: 'Jimpo', address: '0xE375A2337C3eF03D83B6538E7857595EE97E0585' },
  { name: 'Fknuckles', address: '0x1f008f9af47b387bdf67a25f2b8219942207298f' },
  { name: 'BOF', address: '0x9c375c4fe659bf9a8af721cec9fac250b92493a5' },
  { name: 'Versus', address: '0xe816b19b673088c02f3c9e03bc4a66e1ef676cf7' },
];
// const coins = [];
const coinHead = '/coinhead.png';
const cointail = '/cointail.png';

function GameSection() {
  const [selected, setSelected] = useState('');
  const [playing, setPlaying] = useState(false);
  const [wager, setWager] = useState(0);
  const [selectedCoin, setSelectedCoin] = useState(coins[0].address);
  // const signer=useP
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();
  const config = useConfig();
  const chainId = useChainId();

  // const useFetchAllowance = async (address) => {
  //   console.log(address);
  //   if (!address) {
  //     return 0;
  //   }
  //   const result = useReadContract({
  //     abi: erc20Abi,
  //     functionName: 'allowance',
  //     address: '0xE375A2337C3eF03D83B6538E7857595EE97E0585',
  //     args: [address, '0xC962C3A628970e7fB98e42C05fE424518cDDd8F7'],
  //   });

  //   console.log('result: ', result);
  //   return result;
  // };

  // const { data } = useQuery({
  //   queryKey: ['allowance'],
  //   queryFn: () => useFetchAllowance(address),
  //   refetchInterval: 2000,
  // });

  const balance = useTokenBalance(selectedCoin);

  const { data } = useReadContract({
    abi: erc20Abi,
    functionName: 'allowance',
    address: selectedCoin,
    args: [address, '0xC962C3A628970e7fB98e42C05fE424518cDDd8F7'],
    watch: true,
  });

  const play = async () => {
    setPlaying(true);
    const toastId = toast.info('Waiting for wallet aprroval', {
      autoClose: false,
    });
    try {
      const txn = await writeContractAsync({
        abi,
        address: '0xC962C3A628970e7fB98e42C05fE424518cDDd8F7',
        functionName: 'play',
        args: [selectedCoin, wager * 10 ** 18, selected === 'Heads' ? 0 : 1],
        gasLimit: 200_000,
      });

      // const config = useConfig();
      toast.update(toastId, {
        type: 'success',
        render: 'Tansaction successful, evaluating result',
      });

      // const receipt = useWaitForTransactionReceipt({ hash: txn });
      const receipt = await waitForTransactionReceipt(config, {
        hash: txn,
        chainId,
      });

      // provid
      if (receipt && receipt.logs) {
        try {
          const eventInterface = new ethers.Interface(abi);
          const filteredLog = receipt.logs.filter(
            (log) =>
              log.address ==
              '0xC962C3A628970e7fB98e42C05fE424518cDDd8F7'.toLowerCase()
          );
          console.log('filtered log', filteredLog);
          const resultEvent = eventInterface.parseLog(filteredLog[0]);
          console.log(resultEvent);
          toast.update(toastId, {
            type: 'success',
            render: 'Round completed!',
            autoClose: 5000,
          });
          if (resultEvent.name === 'Won') {
            alert('Congratulations you won!');
          } else {
            alert('Better luck next time');
          }
        } catch (error) {
          console.log(error);
          toast.update(toastId, {
            type: 'error',
            render: 'An error occurred',
            autoClose: 5000,
          });
        }
      }
    } catch (error) {
      toast.update(toastId, {
        type: 'error',
        render: 'An error occurred',
        autoClose: 5000,
      });
    } finally {
      setPlaying(false);
    }
    // receipt.logs.forEach((log) => {
    //   try {
    //     // const event=
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
    // }

    // console.log(txn, receipt);
  };

  console.log(data);

  const approve = async () => {
    const txn = await writeContractAsync({
      abi: erc20Abi,
      address: selectedCoin,
      functionName: 'approve',
      args: ['0xC962C3A628970e7fB98e42C05fE424518cDDd8F7', MaxUint256],
    });
    console.log(txn);
  };

  console.log('wager', wager);
  return (
    <div className="md:w-1/2 mx-auto border-2 rounded-xl p-3 flex flex-col gap-5 bg-[#FFCA56] montserrat font-bold">
      <div className="border-2 p-2 rounded-xl flex flex-col gap-2">
        <div className="flex justify-between">
          <div>Wager</div>
          <div>
            Balance: {balance.balance} {tokenToSymbol[selectedCoin]}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <input
            type="number"
            placeholder={'0.0'}
            onChange={(e) => setWager(e.target.value)}
            value={wager}
            className="bg-[#FFCA56] placeholder:text-gray-700 text-2xl w-1/2 focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />

          <select
            value={selectedCoin}
            onChange={(e) => setSelectedCoin(e.target.value)}
            className="ml-3 border p-2 rounded-lg bg-[#FFCA56]"
          >
            {coins.map((coin) => (
              <option key={coin.name} value={coin.address} className="bg-white">
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col border-2 p-2 rounded-xl pl-14 pr-14 gap-5">
        {playing ? (
          <FlipAnimation />
        ) : (
          <>
            <div className="flex justify-between pl-4 pr-4">
              <div>Heads</div>
              <div>or</div>
              <div>Tails</div>
            </div>
            <div className="flex justify-between">
              <img
                className={`w-24 cursor-pointer hover:scale-95 transition-all duration-300 ${
                  selected === 'Heads' ? 'opacity-100' : 'opacity-40'
                }`}
                src={coinHead}
                alt="Heads"
                onClick={() => setSelected('Heads')}
              />
              <img
                className={`w-24 hover:scale-95 cursor-pointer transition-all duration-300 ${
                  selected === 'Tails' ? 'opacity-100' : 'opacity-40'
                }`}
                src={cointail}
                alt="Tails"
                onClick={() => setSelected('Tails')}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <div className="mx-auto w-64 h-1 bg-gradient-to-r from-transparent via-[#422D26] to-transparent"></div>
        <div className="flex gap-5 justify-center">
          {/* Your Winnings: <span>0.00</span> */}
        </div>
      </div>

      <div>
        {!address ? (
          <button
            // onClick={play}
            className="bg-gray-800 text-xl text-white w-full transition-all duration-300 hover:scale-105 active:scale-95 py-5 rounded-xl border-2 outline-white"
          >
            Wallet not connected
          </button>
        ) : (Number(data) / 1) * 10 ** 18 < wager * 10 ** 18 ? (
          <button
            onClick={approve}
            className="bg-gray-800 text-xl text-white w-full transition-all duration-300 hover:scale-105 active:scale-95 py-5 rounded-xl border-2 outline-white"
          >
            Approve
          </button>
        ) : (
          <button
            onClick={play}
            disabled={playing || !selected || !wager || wager > balance.balance}
            className="bg-gray-800 text-xl text-white w-full transition-all duration-300 hover:scale-105 active:scale-95 py-5 rounded-xl border-2 outline-white"
          >
            {!selected
              ? 'No side selected'
              : !wager
              ? 'Enter wager amount'
              : wager > balance.balance
              ? 'Insufficient Balance'
              : playing
              ? 'Flipping ...'
              : 'Flip'}
          </button>
        )}
      </div>
    </div>
  );
}

export default GameSection;
