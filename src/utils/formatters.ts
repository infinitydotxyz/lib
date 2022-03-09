export function jsonString(obj?: object) {
  return JSON.stringify(obj, null, 2);
}

export function getSearchFriendlyString(input?: string) {
  if (!input) {
    return '';
  }
  // remove spaces, dashes and underscores only
  const output = input.replace(/[\s-_]/g, '');
  return output.toLowerCase();
}

export function trimLowerCase(str?: string) {
  return (str || '').trim().toLowerCase();
}

export function getEndCode(searchTerm: string) {
  // Firebase doesn't have a clean way of doing starts with so this boilerplate code helps prep the query
  const strLength = searchTerm.length;
  const strFrontCode = searchTerm.slice(0, strLength - 1);
  const strEndCode = searchTerm.slice(strLength - 1, searchTerm.length);
  const endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
  return endCode;
}

export function normalizeAddress(address: string) {
  return address.trim().toLowerCase();
}
