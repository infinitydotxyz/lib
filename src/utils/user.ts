import { JsonRpcProvider } from '@ethersproject/providers';

export async function getUserDisplayName(address: string, chainId: string, provider: JsonRpcProvider) {
  try {
    // TODO support users setting their own display name

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
