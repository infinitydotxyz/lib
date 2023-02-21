import { StaticJsonRpcProvider } from '@ethersproject/providers';

export async function getUserDisplayName(address: string, chainId: string, provider: StaticJsonRpcProvider) {
  try {
    // ethers.js automatically checks that the forward resolution matches the reverse lookup
    const ensName = await provider.lookupAddress(address);

    if (ensName) {
      return ensName;
    }
    return address;
  } catch (err) {
    return address;
  }
}
