export function getChainId(chain: string) {
  if (chain.trim().toLowerCase() === 'ethereum') {
    return '1';
  } else if (chain.trim().toLowerCase() === 'polygon') {
    return '137';
  } else if (chain.trim().toLowerCase() === 'localhost') {
    return '31337';
  }
  return '';
}
