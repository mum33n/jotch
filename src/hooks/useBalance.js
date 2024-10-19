import { erc20Abi } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

export const useTokenBalance = (token) => {
  const { address } = useAccount();
  const { data, isError, isLoading, error } = useReadContract({
    abi: erc20Abi,
    functionName: 'balanceOf',
    address: token,
    args: [address],
    watch: true,
  });
  console.log('balance', data, isError, isLoading, error);
  return { balance: Number(data) / 10 ** 18 };
};
