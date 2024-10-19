import { erc20Abi } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

export const useTokenBalance = () => {
  const { address } = useAccount();
  const { data, isError, isLoading, error } = useReadContract({
    abi: erc20Abi,
    functionName: 'balanceOf',
    address: '0xb9b823Df8408DCbA129D0B77BDD03910dC4c2D2b',
    args: [address],
    watch: true,
  });
  console.log('balance', data, isError, isLoading, error);
  return { balance: Number(data) / 10 ** 18 };
};
